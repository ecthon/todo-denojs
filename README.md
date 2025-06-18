<div align="center">
  <img src="https://jsr.io/logos/deno.svg?__frsh_c=ca5b312be6dd05d0c3fcd846d4d033c72ae5ef61" alt="Deno Logo" width="200"/>
</div>

# Todo App com Deno 🦖

Uma aplicação simples de Todo List construída com Deno e Oak framework.

## 🚀 Tecnologias

- [Deno](https://deno.land/) - Runtime JavaScript/TypeScript
- [Oak](https://deno.land/x/oak) - Framework web para Deno
- [UUID](https://deno.land/std/uuid) - Geração de IDs únicos

## 📋 Versões

- Deno: 1.40.0 ou superior
- Oak: v12.6.0
- UUID: v0.224.0

## 🛠️ Como Executar

1. Instale o Deno seguindo as instruções em [deno.land](https://deno.land/#installation)

2. Clone o repositório:
```bash
git clone https://github.com/ecthon/todo-denojs
cd todo-deno
```

3. Execute o projeto:
```bash
deno run --allow-net mod.ts
```

O servidor estará rodando em `http://localhost:8000`

## 📁 Estrutura do Projeto

```
todo-deno/
├── mod.ts            # Arquivo principal
├── routes/
│   └── todos.ts      # Rotas de TODO
├── controllers/
│   └── todos.ts      # Lógica das rotas
├── models/
│   └── todo.ts       # Modelo de dados
├── deps.ts           # Dependências externas
└── README.md         # Documentação
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

## 👨‍💻 Autor

Criado por [@ecthon](https://github.com/ecthon) ❤️🦖

Feito com Deno e muito carinho para a comunidade open source!

### 📱 Conecte-se comigo

- [GitHub](https://github.com/ecthon)
- [LinkedIn](https://linkedin.com/in/ecthon)
- [GitHub Sponsors](https://github.com/sponsors/ecthon)

Se você gostou do projeto, considere apoiar meu trabalho através do GitHub Sponsors! 🌟

