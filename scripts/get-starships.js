const fs = require("fs");
const fetch = require("node-fetch");

process.chdir(__dirname);

const base = "https://swapi.graph.cool/";

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

const opts = {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ query })
};

async function main() {
  const starships = [];

  const res = await fetch(base, opts);
  const list = await res.json();

  fs.writeFileSync(
    `../src/routes/_starships.js`,
    `export default ${JSON.stringify(list)};`
  );
}

main();
