import { test, expect } from "vitest";
import { newPost, db } from "../firebase.js";
import { doc, getDoc, deleteDoc } from "firebase/firestore";

test("Expect post to be created, and uploaded", async () => {
  const post = {
    text: "Hello, World!",
    user: {
      uid: "123456",
      username: "Test Izac",
    },
    username: "Test Izac",
    userPhoto: "photo.png",
    dateTime: new Date().toISOString(),
    likes: [],
    comments: [],
  };

  let uuid = await newPost(post);

  console.log(uuid);

  const postRef = doc(db, "posts", uuid);
  const postSnap = await getDoc(postRef);
  expect(postSnap.exists()).toBe(true);
  expect(postSnap.data()).toEqual(post);

  await deleteDoc(postRef);
  const postSnap2 = await getDoc(postRef);
  expect(postSnap2.exists()).toBe(false);
});
