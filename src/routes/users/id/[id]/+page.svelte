<script>
  import Post from "../../../../lib/components/Post.svelte";

  export let data;
  console.log(data);

  async function follow(user, uuid) {
    fetch(`/api/userFollow?user=${user}&follows=${uuid}`);
    data.following = true;
  }
</script>

<div class="pb-20 flex flex-col items-center">
  <h2 class="text-4xl">
    {data.user.username}
  </h2>
  <div class="w-full flex justify-between">
    <span>Followers: 0</span>
    <span>Following: 0</span>
    <span>Posts: 2</span>
  </div>
  <div>
    {#if data.following}
      <!-- <button class="btn btn-primary">Chat</button>-->
      <div />
    {:else}
      <button class="btn btn-primary" on:click={follow(data.loggedInUser, data.user.uuid)}>Follow</button>
    {/if}
  </div>
  {#if data.posts[0].title}
    <ul class="w-full">
      {#each data.posts as post}
        <div>
          <Post {post} />
        </div>
      {/each}
    </ul>
  {:else}
    <p class="text-2xl">No posts</p>
  {/if}
</div>
