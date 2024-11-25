function definirDiaDaSemana(numero) {
    switch (numero) {
        case 1:
            return "Domingo";
        case 2:
            return "Segunda-feira";
        case 3:
            return "Terça-feira";
        case 4:
            return "Quarta-feira";
        case 5:
            return "Quinta-feira";
        case 6:
            return "Sexta-feira";
        case 7:
            return "Sábado";
        default:
            return "Número inválido";
    }
}

// Testando a função com os valores fornecidos e exibindo os resultados no console
console.log(definirDiaDaSemana(3));  // Saída: Terça-feira
console.log(definirDiaDaSemana(7));  // Saída: Sábado
console.log(definirDiaDaSemana(8));  // Saída: Número inválido