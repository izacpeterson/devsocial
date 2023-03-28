import { db } from "../../../lib/server/db";
import { json } from "@sveltejs/kit";

export async function GET({ url }) {
  let searchQuery = url.searchParams.get("username");
  let searchResults = await search(searchQuery);

  return json(searchResults);
}

async function search(query) {
  return new Promise((resolve, reject) => {
    db.all("SELECT username, uuid FROM users WHERE username LIKE ?", [`%${query}%`], (err, rows) => {
      console.log(rows);
      rows = rows.map((row) => {
        row.url = "/users/" + row.uuid;
        return row;
      });
      console.log(rows);

      resolve(rows);
    });
  });
}
