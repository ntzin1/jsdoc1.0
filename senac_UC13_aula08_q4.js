function podeAcessar({ idade, isAdmin, isBlocked }) {
    return (idade > 18 || isAdmin) && !isBlocked;
}

// Testando a função com os valores fornecidos
console.log(podeAcessar({ idade: 20, isAdmin: false, isBlocked: false }));  // Saída: true
console.log(podeAcessar({ idade: 16, isAdmin: true, isBlocked: true }));   // Saída: false