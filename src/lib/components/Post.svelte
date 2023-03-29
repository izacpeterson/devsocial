<script>
  export let post;
</script>

<pre>
    <!-- {JSON.stringify(post, null, 2)} -->
</pre>

<div class="card p-3 mx-2 bg-base-200 shadow-xl">
  <div class="flex justify-between">
    <h3 class="text-xl">{post.title}</h3>
    <a href="/users/id/{post.uuid}" class="text-xl">{post.username}</a>
  </div>
  <span class="text-xs">{post.date}</span>
  <p class="p-4">{post.body}</p>
</div>
