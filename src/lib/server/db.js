import sqlite3 from "sqlite3";
const db = new sqlite3.Database("db.db");

db.run("CREATE TABLE IF NOT EXISTS users (username TEXT, password TEXT, salt TEXT, uuid TEXT, theme TEXT)");
db.run("CREATE TABLE IF NOT EXISTS posts (title TEXT, body TEXT, user TEXT, date TEXT)");
db.run("CREATE TABLE IF NOT EXISTS following (user TEXT, follows TEXT)");

export async function getFeed(user) {
  return new Promise((resolve, reject) => {
    db.all("SELECT title, body, date, username, uuid FROM following INNER JOIN posts ON posts.user = following.follows INNER JOIN users ON posts.user = users.uuid WHERE following.user = ?", [user], (err, rows) => {
      if (err) {
        console.log(err);
      }
      resolve(rows);
    });
  });
}

export async function getUser(username) {
  return new Promise((resolve, reject) => {
    db.get("SELECT * FROM users WHERE username = ?", [username], (err, row) => {
      resolve(row);
    });
  });
}

export async function getUserById(uuid) {
  return new Promise((resolve, reject) => {
    // db.get("SELECT username FROM users WHERE uuid = ?", [uuid], (err, row) => {
    //   resolve(row);
    // });
    db.all("SELECT title, body, date, username, uuid FROM users INNER JOIN posts ON users.uuid = posts.user WHERE users.uuid = ?", [uuid], (err, rows) => {
      if (rows.length == 0) {
        db.all("SELECT username, uuid FROM users WHERE uuid = ?", [uuid], (err, rows) => {
          resolve(rows);
        });
      } else {
        resolve(rows);
      }
    });
  });
}
export async function checkFollowing(user, follows) {
  return new Promise((resolve, reject) => {
    db.all("SELECT * FROM following WHERE user = ? AND follows = ?", [user, follows], (err, rows) => {
      if (rows.length != 0) {
        resolve(true);
      } else {
        resolve(false);
      }
    });
  });
}

export async function setTheme(theme, user) {
  db.run("UPDATE users SET theme = ? WHERE uuid = ?", [theme, user], (err) => {});
}

export async function register(username, password) {}

export { db };
