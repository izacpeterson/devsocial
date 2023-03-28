export async function load({ cookies }) {
  let user = cookies.get("user");
  return { user: user };
}
