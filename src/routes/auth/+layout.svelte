<script>
  import { page } from "$app/stores";
</script>

<div class="flex justify-center m-4">
  <ul class="steps">
    <a href="/auth" class="step step-primary">Sign in</a>
    <a href="/auth/username" class="step step-primary" class:step-primary={$page.route.id?.includes("username") || $page.route.id?.includes("photo")}>Username</a>
    <a href="/auth/photo" class="step" class:step-primary={$page.route.id?.includes("photo")}>Profile Photo</a>
  </ul>
</div>

<slot />
