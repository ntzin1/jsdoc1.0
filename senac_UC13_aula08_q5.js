const calcularDesconto = (precoOriginal, desconto) => precoOriginal - (precoOriginal * (desconto / 100));

// Testando a função com os valores fornecidos
console.log(calcularDesconto(100, 10));  // Saída: 90
console.log(calcularDesconto(250, 20));  // Saída: 200