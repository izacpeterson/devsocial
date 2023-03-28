import * as db from "../../lib/server/db";
export async function load({ cookies }) {
  let user = cookies.get("userId");
  let feed = await db.getFeed(user);
  return { user: user, feed: feed };
}
