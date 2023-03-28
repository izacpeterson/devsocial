<script>
  export let data;
</script>

<main class="flex flex-col">
  <form method="POST" action="?/register" class="flex flex-col items-center">
    <h3 class="text-2xl">Register</h3>
    <input type="text" name="username" placeholder="Username" class="input input-primary  m-2 p-2" />
    <input type="text" name="password" placeholder="Password" class="input input-primary m-2 p-2" />
    <!-- <input type="text" name="password" placeholder="Confirm Password" class="input input-primary m-2 p-2" /> -->
    <button class="btn btn-primary m-2">Register</button>
  </form>
</main>
