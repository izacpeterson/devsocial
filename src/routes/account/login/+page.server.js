import { redirect } from "@sveltejs/kit";
import crypto from "crypto";
import * as db from "../../../lib/server/db";

export const actions = {
  login: async ({ cookies, request }) => {
    const data = await request.formData();
    const username = data.get("username");
    const password = data.get("password");

    let user = await db.getUser(username);

    let hash = crypto.pbkdf2Sync(password, user.salt, 1000, 64, "sha512").toString("hex");

    if (hash == user.password) {
      cookies.set("user", username, {
        path: "/",
      });
      cookies.set("userId", user.uuid, {
        path: "/",
      });
      cookies.set("theme", user.theme, {
        path: "/",
      });

      throw redirect(301, "/");
    }
  },
};
