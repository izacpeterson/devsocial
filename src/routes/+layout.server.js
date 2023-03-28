export async function load({ cookies }) {
  let user = cookies.get("user");
  let theme = cookies.get("theme");
  return { user: user, theme: theme };
}
