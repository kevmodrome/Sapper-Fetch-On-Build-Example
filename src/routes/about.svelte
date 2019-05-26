<script context="module">
  const query = `
		query {
				allStarships {
					name
          class
          films {
            title
          }
				}
			}
	`;
  const url = "https://swapi.graph.cool/";
  const opts = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query })
  };

  export async function preload() {
    return this.fetch(url, opts)
      .then(res => res.json())
      .then(res => res.data.allStarships)
      .then(starships => {
        return { starships };
      });
  }
</script>

<script>
  import Card from "../components/Card.svelte";
  export let starships;
</script>

<style>
  .grid {
    display: grid;
    grid-column-gap: 30px;
    grid-row-gap: 30px;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  }
</style>

<svelte:head>
  <title>Starships</title>
</svelte:head>

<h1>Starships</h1>

<p>This page shows a list of starships from Star Wars.</p>

<div class="grid">
  {#each starships as starship}
    <Card>
      <h1 slot="header">{starship.name}</h1>
       {starship.class}
      <div slot="footer">
        <h2>In the following films:</h2>
        <ul>
          {#each starship.films as film}
            <li> {film.title} </li>
          {/each}
        </ul>
      </div>
    </Card>
  {/each}
</div>
