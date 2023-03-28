import * as db from "../../../../lib/server/db";

export async function load({ params, cookies }) {
  let loggedInUser = cookies.get("userId");
  let data = await db.getUserById(params.id);
  let user = data[0].username;
  let uuid = data[0].uuid;
  let following = await db.checkFollowing(loggedInUser, uuid);
  return { user: { username: user, uuid: uuid }, posts: data, loggedInUser: loggedInUser, following: following };
}
