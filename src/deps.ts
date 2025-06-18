export { Application, Router, Context } from "https://deno.land/x/oak@v12.6.0/mod.ts";
export { DB } from "https://deno.land/x/sqlite@v3.9.1/mod.ts";

// Função para gerar UUID usando crypto nativo do Deno
export function generate(): string {
  return crypto.randomUUID();
}

