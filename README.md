<div align="center">
  <img src="https://jsr.io/logos/deno.svg?__frsh_c=ca5b312be6dd05d0c3fcd846d4d033c72ae5ef61" alt="Deno Logo" width="200"/>
</div>

# Todo App com Deno 🦖

Uma aplicação simples de Todo List construída com Deno e Oak framework.

## 🚀 Tecnologias

- [Deno](https://deno.land/) - Runtime JavaScript/TypeScript
- [Oak](https://deno.land/x/oak) - Framework web para Deno
- [SQLite](https://deno.land/x/sqlite) - Banco de dados SQLite
- [UUID](https://deno.land/std/uuid) - Geração de IDs únicos

## 📋 Versões das Libs

- Deno: 1.40.0 ou superior
- Oak: v12.6.0
- SQLite: v3.9.1
- UUID: v0.224.0

## 📚 Histórico de Versões

- **[Version 2.0](version-2.md)** - Implementação de banco de dados SQLite com persistência de dados
- Version 1.0 - Versão inicial com armazenamento em memória

## 🛠️ Como Executar

1. Instale o Deno seguindo as instruções em [deno.land](https://deno.land/#installation)

2. Clone o repositório:
```bash
git clone https://github.com/ecthon/todo-denojs
cd todo-deno
```

3. Execute o projeto:
```bash
# Usando task do Deno (recomendado)
deno task start

# Ou executando diretamente
deno run --allow-net --allow-read --allow-write src/mod.ts
```

4. (Opcional) Para popular dados iniciais:
```bash
deno task seed
```

5. (Opcional) Para verificar dados inseridos:
```bash
deno run -A src/check_seed.ts
```

O servidor estará rodando em `http://localhost:8000`

### 🚀 Tasks Disponíveis

- `deno task start` - Executa a aplicação
- `deno task dev` - Executa em modo watch (desenvolvimento)
- `deno task seed` - Popula o banco com dados iniciais

## 📁 Estrutura do Projeto

```
todo-deno/
├── src/
│   ├── mod.ts            # Arquivo principal
│   ├── db.ts             # Configuração do banco SQLite
│   ├── deps.ts           # Dependências externas
│   ├── seed.ts           # Script para popular dados iniciais
│   ├── check_seed.ts     # Utilitário para verificar dados
│   ├── routes/
│   │   └── todos.ts      # Rotas de TODO
│   ├── controllers/
│   │   └── todos.ts      # Lógica das rotas
│   └── models/
│       └── todo.ts       # Modelo de dados
├── todos.db              # Arquivo do banco de dados SQLite
├── deno.json             # Configuração do Deno
├── deno.lock             # Lock de dependências
├── version-2.md          # Documentação da versão 2.0
└── README.md             # Documentação principal
```

## 🔌 Rotas Disponíveis

### GET /todos
- Retorna a lista de todos os TODOs

### POST /todos
- Cria um novo TODO
- Body: `{ "title": "string" }`

### PUT /todos/:id/toggle
- Alterna o status de um TODO (completo/incompleto)
- Parâmetros: `id` (UUID do TODO)

## 📝 Notas

Este é o README v1 do projeto. Novas versões serão adicionadas conforme o projeto evolui.

## 🔒 Permissões do Deno

O projeto requer as seguintes permissões:
- `--allow-net`: Para permitir conexões de rede
- `--allow-read`: Para leitura do banco de dados SQLite
- `--allow-write`: Para escrita no banco de dados SQLite

## 👨‍💻 Autor

Criado por [@ecthon](https://github.com/ecthon) ❤️🦖

Feito com Deno e muito carinho para a comunidade open source!

### 📱 Conecte-se comigo

- [GitHub](https://github.com/ecthon)
- [LinkedIn](https://linkedin.com/in/ecthon)
- [GitHub Sponsors](https://github.com/sponsors/ecthon)

Se você gostou do projeto, considere apoiar meu trabalho através do GitHub Sponsors! 🌟

