##Sapper Fetch On Build Example

[Demo](https://sapper-fetch-on-build-example.netlify.com)

A simple example showcasing how to make on export/build fetches get fetched
and made static. Uses a script to fetch data before building. Look in
scripts/get-starships.js to see the implementation.

To run:

```bash
# Develop
npm run update && npm run dev

# Export
npm run export && npm run export
```
