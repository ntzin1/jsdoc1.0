function parOuImpar(numero) {
    return numero % 2 === 0 ? "Par" : "Ímpar";
}

// Testando a função com os valores fornecidos e exibindo os resultados no console
console.log(parOuImpar(10));  // Saída: Par
console.log(parOuImpar(15));  // Saída: Ímpar
console.log(parOuImpar(22));  // Saída: Par