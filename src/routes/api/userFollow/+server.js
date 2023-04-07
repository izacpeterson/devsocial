import { db } from "../../../lib/server/db";
import { json } from "@sveltejs/kit";

export async function GET({ url }) {
  let user = url.searchParams.get("user");
  let follows = url.searchParams.get("follows");

  db.run(
    "INSERT INTO following (user, follows) VALUES (?, ?)",
    [user, follows],
    (err, rows) => {
      console.log(err, user, follows);
    }
  );

  return json({ msg: "done" });
}
