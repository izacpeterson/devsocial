export async function load({ cookies }) {
  let user = cookies.get("userId");
  return { user: user };
}
