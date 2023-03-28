import { redirect } from "@sveltejs/kit";
import crypto from "crypto";
import { db } from "../../../lib/server/db";

export const actions = {
  newPost: async ({ cookies, request }) => {
    const data = await request.formData();
    const title = await data.get("title");
    const body = await data.get("body");
    const user = cookies.get("userId");

    let date = new Date();

    db.run("INSERT INTO posts (title, body, user, date) VALUES (?, ?, ?, ?)", [title, body, user, date.toLocaleString()]);
  },
};
