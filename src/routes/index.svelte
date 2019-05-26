<style>
  h1,
  figure h1 {
    text-align: center;
    font-size: 2em;
    text-transform: uppercase;
    font-weight: 700;
    margin: 0 0 0.5em 0;
  }

  figure {
    margin: 0 0 1em 0;
  }

  img {
    width: 100%;
    max-width: 400px;
    margin: 0 0 1em 0;
  }

  p {
    margin: 1em auto;
    max-width: 600px;
  }
</style>

<svelte:head>
  <title>Sapper Fetch On Build Example</title>
</svelte:head>

<h1>Sapper Fetch On Build Example</h1>

<p>
  A simple example showcasing how to make on export/build fetches get fetched
  and made static. Uses a script to fetch data before building. Look in
  scripts/get-starships.js to see the implementation.
</p>

<p>
  Repository can be found
  <strong>
    <a href="https://github.com/kevmodrome/Sapper-Fetch-On-Build-Example">
      here
    </a>
  </strong>
  .
</p>
