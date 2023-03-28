<script>
  export let data;
  let { user, theme } = data;
</script>

<div data-theme={theme} class="min-h-screen pb-20">
  <header>
    <div class="flex justify-between items-center p-4">
      <a href="/">
        <h1 class="text-2xl">Dev Social</h1>
      </a>

      {#if user}
        <a href="/account">
          <h2 class="text-xl">{user}</h2>
        </a>
      {/if}
      {#if !user}
        <a href="/account/">
          <h2 class="text-xl">Login/Register</h2>
        </a>
      {/if}
    </div>
  </header>

  <slot />

  <nav class="fixed bottom-0 bg-base-200 text-primary w-full flex justify-between items-center p-4">
    <a href="/feed">
      <span class="material-symbols-outlined"> home </span>
    </a>
    <a href="/users/search" class="">
      <span class="material-symbols-outlined"> search </span>
    </a>
    <a href="/posts/new" class="">
      <span class="material-symbols-outlined"> post_add </span>
    </a>
    <a href="/account">
      <span class="material-symbols-outlined"> person </span>
    </a>
  </nav>
</div>

<style>
  nav {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.25);
  }
</style>
