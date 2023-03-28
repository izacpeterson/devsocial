<script>
  export let data;
  let { user } = data;
  let search;
  let results = [];

  async function findUser() {
    let data = await fetch("/api/userSearch?username=" + search);
    let json = await data.json();
    console.log(json);
    results = json;
  }
  async function follow(uuid) {
    let data = await fetch(`/api/userFollow?user=${user}&follows=${uuid}`);
  }
</script>

<form on:submit|preventDefault={findUser} class="flex flex-col items-center">
  <input type="text" bind:value={search} class="input input-primary m-2" />
  <button on:click={findUser} class="btn button-primary">Find User</button>
</form>

<ul class="flex flex-col">
  {#each results as result}
    <a href={`/users/id/${result.uuid}`} class="m-2">{result.username}</a>
    <!-- <button class="btn" on:click={follow(result.uuid)}>Follow</button> -->
  {/each}
</ul>
