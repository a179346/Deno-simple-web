# Deno simple web

A test for deno-express & dejs.

## start
deno run --allow-net --allow-read app.ts

## app.ts
```typescript
import * as expressive from "https://raw.githubusercontent.com/NMathar/deno-express/master/mod.ts";
import { renderFile } from "https://deno.land/x/dejs/mod.ts";
import {
  getMovies,
  getMovie,
  addMovie,
  updateMovie,
  deleteMovie,
} from "./model/movie.ts";

const { cwd } = Deno;
const port = 3000;

const app = new expressive.App();

app.use(expressive.simpleLog());
app.use(expressive.static_("./public"));
app.use(expressive.bodyParser.json());

app.get("/movies", async (req, res) => {
  const output = await renderFile(`${cwd()}/view/movies.ejs`, {
    movies: getMovies(),
  });
  res.body = output;
  res.toHttpResponse();
});

const server = await app.listen(port);
console.log("app listening on port " + server.port);
```
