<script>
  import Post from "../../lib/components/Post.svelte";
  export let data;
  let { user, feed } = data;
</script>

{#each feed as post}
  <Post {post} />
{/each}
<!-- <pre>
    {JSON.stringify(data, null, 2)}
</pre> -->
