/// <reference lib="deno.ns" />
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

// Usar a porta do ambiente ou 8000 como padrão
const port = parseInt(Deno.env.get("PORT") || "8000");
console.log(`🦖 Server running on http://localhost:${port}`);
await app.listen({ port });
