<script>
  export let data;
</script>

<form method="POST" action="?/login" class="flex flex-col items-center">
  <h3 class="text-2xl">Login</h3>
  <input type="text" name="username" class="input input-primary m-2" placeholder="Username" />
  <input type="password" name="password" class="input input-primary m-2" placeholder="Password" />
  <button class="btn btn-primary m-2">Login</button>
</form>
