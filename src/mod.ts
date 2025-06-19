import { Application } from "./deps.ts";
import router from "./routes/todos.ts";

const app = new Application();

// Configuração do CORS para permitir requisições do frontend (frontend em React)
app.use(async (ctx, next) => {
  ctx.response.headers.set("Access-Control-Allow-Origin", "http://localhost:3000");
  ctx.response.headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  ctx.response.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
  
  if (ctx.request.method === "OPTIONS") {
    ctx.response.status = 200;
    return;
  }
  
  await next();
});

app.use(router.routes());
app.use(router.allowedMethods());

console.log("🦖 Server running on http://localhost:8000");
await app.listen({ port: 8000 });
