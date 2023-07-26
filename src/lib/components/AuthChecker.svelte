<script>
  import { currentUser, auth } from "$lib/firebase";
  import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

  async function handleSignin() {
    const provider = new GoogleAuthProvider();
    let user = await signInWithPopup(auth, provider);
    console.log(user);
  }
</script>

{#if currentUser}
  <slot />
{:else}
  <div class="card">
    <div class="card-body">
      <h2 class="card-title">Welcome To DevSocial</h2>
      <p>Please login or create an account to continue</p>
      <a href="/auth" class="btn btn-primary">Create Account</a>
      <button on:click={handleSignin} class="btn btn-secondary">Login</button>
    </div>
  </div>
{/if}
