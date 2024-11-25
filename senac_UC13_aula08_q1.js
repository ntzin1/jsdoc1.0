function verificarIdade(idade) {
    if (idade < 18) {
        return "Menor de idade";
    } else {
        return "Maior de idade";
    }
}

// Chamando a função para os valores fornecidos e exibindo os resultados no console
console.log(verificarIdade(15));  // Saída: Menor de idade
console.log(verificarIdade(18));  // Saída: Maior de idade
console.log(verificarIdade(21));  // Saída: Maior de idade