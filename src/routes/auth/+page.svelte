<script>
  import { auth, currentUser } from "$lib/firebase";
  import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

  async function handleSignin() {
    const provider = new GoogleAuthProvider();
    let user = await signInWithPopup(auth, provider);
    console.log(user);
  }
</script>

<div class="card bg-base-200 m-4 shadow-xl">
  <div class="card-body">
    {#if !$currentUser}
      <button on:click={handleSignin} class="btn btn-primary">Sign in with Google</button>
    {:else}
      <p class="pb-4 text-center">Welcome, {$currentUser.displayName}</p>
      <div class="card-actions justify-end">
        <button
          on:click={() => {
            signOut(auth)
              .then(() => {
                // Sign-out successful.
              })
              .catch((error) => {
                // An error happened.
              });
          }}
          class="btn btn-warning">Logout</button
        >
        <a href="/auth/username" class="btn btn-primary">Set Username</a>
      </div>
    {/if}
  </div>
</div>
