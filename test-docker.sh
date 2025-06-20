#!/bin/bash

echo "🐳 Testando build do Docker..."

# Parar e remover containers existentes
docker stop todo-denojs 2>/dev/null || true
docker rm todo-denojs 2>/dev/null || true

# Remover imagem existente
docker rmi todo-denojs:latest 2>/dev/null || true

# Fazer o build da imagem
echo "📦 Fazendo build da imagem..."
docker build -t todo-denojs:latest .

if [ $? -eq 0 ]; then
    echo "✅ Build realizado com sucesso!"
    
    # Executar o container
    echo "🚀 Executando container..."
    docker run -d --name todo-denojs -p 8000:8000 todo-denojs:latest
    
    # Aguardar um pouco para a aplicação inicializar
    sleep 3
    
    # Testar se a aplicação está respondendo
    echo "🧪 Testando aplicação..."
    curl -f http://localhost:8000/ || echo "❌ Aplicação não está respondendo"
    
    echo "📋 Para ver os logs: docker logs todo-denojs"
    echo "🛑 Para parar: docker stop todo-denojs"
else
    echo "❌ Erro no build do Docker"
    exit 1
fi 