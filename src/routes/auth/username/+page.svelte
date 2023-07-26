<script>
  import { currentUser, db } from "$lib/firebase";
  import { doc, getDoc, collection, query, where, getDocs, setDoc } from "firebase/firestore";

  let loading = false;
  let username = "";
  let available = null;
  let done = false;
  async function checkUsername() {
    loading = true;
    const q = query(collection(db, "users"), where("username", "==", username));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.size > 0) {
      console.log("Username already exists");
      available = false;
      loading = false;
      return;
    } else {
      console.log("Username is available");
      available = true;
      loading = false;
    }
  }

  async function setUsername() {
    if (!available) return;
    const userRef = doc(db, "users", $currentUser.uid);
    let user = {
      username: username,
      uid: $currentUser.uid,
      email: $currentUser.email,
      photoURL: "",
    };
    await setDoc(userRef, user, { merge: true }).then(() => {
      console.log("Document successfully written!");
    });
    done = true;
  }

  $: console.log($currentUser);
</script>

<main class="card">
  <div class="card-body shadow-xl bg-base-200 m-4">
    {#if done}
      <p class="text-success text-center">Welcome, {username}!</p>
      <a href="/auth/photo" class="btn btn-primary"> Next</a>
    {:else}
      <input bind:value={username} on:input={checkUsername} type="text" class="input input-bordered input-primary" placeholder="username" />
      {#if loading}
        <p>Checking available</p>
      {/if}
      {#if available}
        <p class="text-success text-center">Username is available</p>
        <button on:click={setUsername} class="btn btn-primary"> Set </button>
      {:else}
        <p class="text-error text-center">Username is not available, try again!</p>
      {/if}
      <button on:click={checkUsername} class="btn btn-primary"> Check </button>
    {/if}
  </div>
</main>
