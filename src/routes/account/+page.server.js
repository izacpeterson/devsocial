import * as db from "../../lib/server/db";
export const actions = {
  setTheme: async ({ cookies, request }) => {
    const data = await request.formData();
    const theme = data.get("theme");
    let user = cookies.get("userId");
    cookies.set("theme", theme, {
      path: "/",
    });

    db.setTheme(theme, user);
  },
};
