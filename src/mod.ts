import { Application } from "./deps.ts";
import router from "./routes/todos.ts";

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

console.log("🦖 Server running on http://localhost:8000");
await app.listen({ port: 8000 });
