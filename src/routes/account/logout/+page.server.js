import { redirect } from "@sveltejs/kit";

export async function load({ cookies }) {
  //   throw redirect(302, "/");
}
export const actions = {
  default({ cookies }) {
    // eat the cookie
    cookies.set("user", "", {
      path: "/",
      expires: new Date(0),
    });
    cookies.set("userId", "", {
      path: "/",
      expires: new Date(0),
    });
    throw redirect(302, "/account/login");
  },
};
