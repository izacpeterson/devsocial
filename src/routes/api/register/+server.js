import { db } from "../../../lib/server/db";
import { json } from "@sveltejs/kit";
import crypto from "crypto";

export async function POST({ request }) {
  const data = await request.json();
  let username = data.username;
  let password = data.password;

  let salt = crypto.randomBytes(16).toString("hex");
  let hash = crypto.pbkdf2Sync(password, salt, 1000, 64, "sha512").toString("hex");

  let usernameTaken = await checkUsername(username);

  if (usernameTaken) {
    return json({ usernameTaken: usernameTaken });
  } else {
    db.run("INSERT INTO users(username, password, salt, uuid, theme) VALUES(?, ?, ?, ?, ?)", [username, hash, salt, crypto.randomUUID(), "dark"]);
    return json({ usernameTaken: usernameTaken });
  }

  // return json(data);
}

async function checkUsername(username) {
  return new Promise((resolve, reject) => {
    db.all("SELECT username FROM users WHERE username = ?", [username], (err, rows) => {
      if (rows.length != 0) {
        resolve(true);
      } else {
        resolve(false);
      }
    });
  });
}
