<script>
  import { currentUser, storage, db } from "$lib/firebase";
  import { doc, updateDoc } from "firebase/firestore";
  import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

  let url;
  let loading = false;
  async function upload(e) {
    loading = true;
    const file = e.target.files[0];

    const fileExtention = file.name.split(".").pop();

    const storageRef = ref(storage, `users/${$currentUser.uid}/profile.${fileExtention}`);
    const result = await uploadBytes(storageRef, file).then((snapshot) => {
      console.log("Uploaded a blob or file!");
    });

    url = await getDownloadURL(storageRef);

    const userRef = doc(db, "users", $currentUser.uid);
    await updateDoc(userRef, {
      photoURL: url,
    }).then(() => {
      console.log("Document successfully updated!");
    });
  }
</script>

<main class="card">
  <div class="card-body">
    <h2 class="card-title">Upload Profile Picture</h2>
    <img src={url} alt="" />
    <input type="file" class="file-input file-input-primary" on:change={upload} />
    <a href="/" class="btn btn-primary">Finish</a>
  </div>
</main>
