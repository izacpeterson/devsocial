<script>
  let username;
  let password;
  let confirmPassword;

  async function register() {
    if (password !== confirmPassword) {
      alert("PASSWORDS DO NOT MATCH");
      return;
    }
    let response = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    let result = await response.json();
    console.log(result);

    let usernameTaken = result.usernameTaken;

    if (usernameTaken) {
      alert("USERNAME TAKEN");
    } else {
      window.location.href = "/account/login";
    }
  }
</script>

<main class="flex flex-col">
  <form class="flex flex-col items-center" on:submit|preventDefault={register}>
    <h3 class="text-2xl">Register</h3>
    <input type="text" name="username" placeholder="Username" bind:value={username} class="input input-primary  m-2 p-2" />
    <input type="text" name="password" placeholder="Password" bind:value={password} class="input input-primary m-2 p-2" />
    <input type="text" name="password" placeholder="Confirm Password" bind:value={confirmPassword} class="input input-primary m-2 p-2" />
    <!-- <input type="text" name="password" placeholder="Confirm Password" class="input input-primary m-2 p-2" /> -->
    <button class="btn btn-primary m-2">Register</button>
  </form>
</main>
