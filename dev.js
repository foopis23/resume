import * as theme from './theme.js';
import resume from './resume.json';

const server = Bun.serve({
  routes: {
    "/": async () => {
      return new Response(theme.render(resume), {
        headers: {
          "Content-Type": "text/html",
        },
        status: 200,
      });
    }
  },
  fetch() {
    return new Response("Not Found", { status: 404 });
  },
});

console.log(`Server running at ${server.url}`);
