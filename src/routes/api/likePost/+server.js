import { db } from "../../../lib/server/db";
import { json } from "@sveltejs/kit";
import crypto from "crypto";

export async function POST({ cookies, request }) {
  const data = await request.json();
  let post = data.id;
  const user = cookies.get("userId");

  db.run(
    "INSERT INTO likes (post, user) VALUES (?, ?)",
    [post, user],
    (err) => {
      console.log(err);
    }
  );

  let response = { user: user, post: post };
  return json(response);
}
