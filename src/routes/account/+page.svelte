<script>
  let theme = "";
</script>

<h2>Account</h2>
<div class="flex flex-col p-4">
  <a href="/account/register">Register</a>
  <a href="/account/login">Login</a>
  <a href="/account/logout">Logout</a>
</div>

<form method="POST" action="?/setTheme">
  Theme:
  <select name="theme" bind:value={theme}>
    <option value="light">Light</option>
    <option value="dark">Dark</option>
    <option value="corporate">Corporate</option>
    <option value="business">Business</option>
    <option value="cyberpunk">Cyberpunk</option>
  </select>
  <button>Set</button>
</form>
