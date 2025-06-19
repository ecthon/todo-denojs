# Deploy no Render

Este projeto está configurado para ser deployado no Render usando Docker.

## Arquivos de Configuração

- `Dockerfile`: Configuração do container Docker
- `.dockerignore`: Arquivos excluídos do build
- `render.yaml`: Configuração do serviço no Render

## Como Fazer o Deploy

### Opção 1: Usando render.yaml (Recomendado)

1. Faça push do código para um repositório Git (GitHub, GitLab, etc.)
2. No Render Dashboard, clique em "New +" e selecione "Blueprint"
3. Conecte seu repositório
4. O Render detectará automaticamente o `render.yaml` e configurará o serviço

### Opção 2: Deploy Manual

1. No Render Dashboard, clique em "New +" e selecione "Web Service"
2. Conecte seu repositório Git
3. Configure:
   - **Name**: `todo-denojs` (ou o nome que preferir)
   - **Environment**: `Docker`
   - **Region**: Escolha a região mais próxima
   - **Branch**: `main` (ou sua branch principal)
   - **Root Directory**: Deixe vazio (raiz do projeto)
   - **Dockerfile Path**: `./Dockerfile`
   - **Docker Context**: `.`

## Variáveis de Ambiente

O projeto usa as seguintes variáveis de ambiente:

- `PORT`: Porta onde a aplicação rodará (configurada automaticamente pelo Render)

## Banco de Dados

⚠️ **Importante**: O banco de dados SQLite será criado localmente no container. 
Para produção, considere usar um banco de dados persistente como PostgreSQL.

## Health Check

O Render fará health checks na rota `/`. Certifique-se de que sua aplicação responda corretamente nesta rota.

## Logs

Você pode ver os logs da aplicação no dashboard do Render em tempo real.

## Troubleshooting

Se o deploy falhar:

1. Verifique os logs no Render Dashboard
2. Teste localmente com Docker:
   ```bash
   docker build -t todo-denojs .
   docker run -p 8000:8000 todo-denojs
   ```
3. Certifique-se de que todas as dependências estão no `deps.ts` 