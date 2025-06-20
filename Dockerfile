# Usar a imagem oficial do Deno com versão estável
FROM denoland/deno:1.41-alpine

# Definir diretório de trabalho
WORKDIR /app

# Copiar arquivos de configuração primeiro (para melhor cache)
COPY deno.json deno.lock* ./

# Copiar código fonte
COPY src/ ./src/

# Cache das dependências do Deno
RUN deno cache src/mod.ts

# Expor a porta que a aplicação usa
EXPOSE 8000

# Comando para executar a aplicação
CMD ["deno", "run", "-A", "src/mod.ts"] 