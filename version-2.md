# Version 2.0 - Implementação de Banco de Dados SQLite

## 📋 Resumo das Alterações

Esta versão introduz persistência de dados usando SQLite, melhorando significativamente a funcionalidade da aplicação Todo.

## 🆕 Novas Funcionalidades

### 1. **Persistência de Dados com SQLite**
- Implementação de banco de dados SQLite para armazenar TODOs
- Tabela `todos` com campos: `id`, `title`, `completed`
- Dados persistem entre execuções da aplicação

### 2. **Sistema de Seed**
- Arquivo `src/seed.ts` para popular o banco com dados iniciais
- Dados de exemplo incluídos:
  - "Estudar Deno" (não concluído)
  - "Criar API de TODO" (não concluído)
  - "Testar SQLite com Deno" (concluído)

### 3. **Verificação de Dados**
- Arquivo `src/check_seed.ts` para verificar dados inseridos
- Utilitário para debug e validação

## 🔧 Alterações Técnicas

### **Novas Dependências**
- `sqlite@v3.9.1` - Para operações de banco de dados

### **Novos Arquivos Criados**
- `src/db.ts` - Configuração e inicialização do banco SQLite
- `src/seed.ts` - Script para popular dados iniciais
- `src/check_seed.ts` - Utilitário para verificar dados
- `todos.db` - Arquivo do banco de dados SQLite

### **Arquivos Modificados**

#### `src/deps.ts`
- Adicionada importação do `DB` do SQLite
- Implementada função `generate()` usando `crypto.randomUUID()`

#### `src/controllers/todos.ts`
- **getTodos**: Agora consulta dados do banco SQLite
- **createTodo**: Insere novos TODOs no banco
- **toggleTodo**: Atualiza status no banco de dados
- Tratamento de erros para TODOs não encontrados

#### `src/models/todo.ts`
- Interface `Todo` definida com tipos corretos
- Campo `completed` como boolean

#### `deno.json`
- Novas tasks adicionadas:
  - `start`: Executa a aplicação
  - `seed`: Executa o script de seed
  - `dev`: Executa em modo watch
- Configuração de lint excluindo arquivos de banco

## 🚀 Como Usar as Novas Funcionalidades

### Executar o Seed
```bash
deno task seed
```

### Verificar Dados
```bash
deno run -A src/check_seed.ts
```

### Executar em Modo Desenvolvimento
```bash
deno task dev
```

## 📊 Melhorias na API

### **GET /todos**
- Agora retorna dados reais do banco SQLite
- Dados persistem entre reinicializações

### **POST /todos**
- Salva novos TODOs no banco de dados
- Retorna o TODO criado com ID único

### **PUT /todos/:id/toggle**
- Atualiza o status no banco de dados
- Validação de existência do TODO
- Retorna erro 404 se TODO não encontrado

## 🔒 Permissões Necessárias

- `--allow-net`: Para conexões de rede
- `--allow-read`: Para leitura do banco de dados
- `--allow-write`: Para escrita no banco de dados

## 🐛 Correções

- Implementação de validação de IDs
- Tratamento adequado de erros
- Conversão correta de tipos (boolean/integer)

## 📈 Benefícios da Versão 2.0

1. **Persistência**: Dados não são perdidos ao reiniciar
2. **Escalabilidade**: Preparado para crescimento
3. **Confiabilidade**: Validações e tratamento de erros
4. **Desenvolvimento**: Ferramentas de debug e seed
5. **Manutenibilidade**: Código organizado e tipado

---

**Data da Release**: Dezembro 2024  
**Compatibilidade**: Deno 1.40.0+  
**Breaking Changes**: Nenhuma (API mantida compatível) 