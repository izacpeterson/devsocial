<script>
  import { currentUser, db } from "$lib/firebase";
  import { doc, setDoc } from "firebase/firestore";

  let postText = "";

  async function handePost() {
    let post = {
      text: postText,
      user: $currentUser.uid,
      username: $currentUser.username,
      userPhoto: $currentUser.photoURL,
      dateTime: new Date().toISOString(),
      likes: [],
      comments: [],
    };

    console.log(post);

    let uuid = crypto.randomUUID();
    await setDoc(doc(db, "posts", uuid), post).then(() => {
      window.location = "/";
    });
  }
</script>

<form action="" class="card bg-base-200 m-4 shadow-xl">
  <div class="card-body">
    <h2 class="card-title">New Post</h2>
    <textarea bind:value={postText} class="textarea" name="" id="" cols="30" rows="10" />
    <div class="card-actions justify-end">
      <button class="btn btn-error">Cancel</button>
      <button on:click={handePost} class="btn btn-primary">Post</button>
    </div>
  </div>
</form>
