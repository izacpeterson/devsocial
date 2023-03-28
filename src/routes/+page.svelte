<script>
  export let data;
  if (data.user) {
    // window.location.href = "/feed";
  }
</script>

{#if data.user}
  <main class="flex flex-col items-center">
    <h2 class="text-2xl">Welcome</h2>

    <p class="">Dev Social is a social media platform for developers.</p>

    <a href="/posts/new">
      <button class="btn">New Post</button>
    </a>
    <a href="/users/search">
      <button class="btn">Search and Follow users</button>
    </a>
  </main>
{:else}
  <main class="flex flex-col justify-center items-center">
    <h3 class="text-3xl pb-10">Welcome to Dev Social.</h3>
    <a href="/account/login" class="btn btn-primary m-2">login</a>
    <span>or</span>
    <a href="/account/register" class="btn btn-primary m-2">register</a>
  </main>
{/if}
