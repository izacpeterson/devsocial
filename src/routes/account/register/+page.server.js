import { redirect } from "@sveltejs/kit";
import crypto from "crypto";
import { db } from "../../../lib/server/db";

export const actions = {
  register: async ({ cookies, request }) => {
    const data = await request.formData();
    const username = data.get("username");
    const password = data.get("password");

    let salt = crypto.randomBytes(16).toString("hex");
    let hash = crypto.pbkdf2Sync(password, salt, 1000, 64, "sha512").toString("hex");

    db.run("INSERT INTO users(username, password, salt, uuid, theme) VALUES(?, ?, ?, ?, ?)", [username, hash, salt, crypto.randomUUID(), "light"]);

    throw redirect(303, "/account/login");
  },
};
