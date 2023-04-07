<script>
  export let post;
  console.log(post);
  async function likePost(id) {
    let response = await fetch("/api/likePost", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: post.postID,
      }),
    });

    const data = await response.json();
    console.log(data);
    post.userLikes = true;
    post.likes++;
  }
  async function unLikePost(id) {
    console.log("unlike");
  }
</script>

<!-- <pre>
    {JSON.stringify(post, null, 2)}
</pre> -->

<div class="card p-3 mx-2 m-8 bg-base-200 shadow-xl">
  <div class="flex justify-between">
    <h3 class="text-xl">{post.title}</h3>
    <a href="/users/id/{post.userID}" class="text-xl">{post.username}</a>
  </div>
  <span class="text-xs">{post.date}</span>
  <p class="p-4">{post.body}</p>
  <div class="flex">
    {#if !post.userLikes}
      <button on:click={likePost} class="text-accent">
        <span
          class="material-symbols-outlined"
          style="font-variation-settings: 'FILL' 0"
        >
          favorite
        </span>
      </button>
    {:else}
      <button on:click={unLikePost} class="text-accent">
        <span
          class="material-symbols-outlined"
          style="font-variation-settings: 'FILL' 1"
        >
          favorite
        </span>
      </button>
    {/if}
    {post.likes}
  </div>
  <!-- <p class="text-xs">{post.postID}</p> -->
</div>

<style>
  /* .material-symbols-outlined {
    font-variation-settings: "FILL" 1, "wght" 400, "GRAD" 0, "opsz" 48;
  } */
</style>
