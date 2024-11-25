
# Documentação das Funções

## 1. `verificarIdade`

```javascript
/**
 * Verifica se a idade é menor ou maior de idade.
 *
 * @param {number} idade - A idade a ser verificada.
 * @returns {string} - Retorna "Menor de idade" se a idade for menor que 18, caso contrário "Maior de idade".
 */
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
```

---

## 2. `definirDiaDaSemana`

```javascript
/**
 * Define o dia da semana baseado em um número.
 *
 * @param {number} numero - O número correspondente ao dia da semana (1 a 7).
 * @returns {string} - Retorna o nome do dia da semana ou "Número inválido" se o número não estiver entre 1 e 7.
 */
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
```

---

## 3. `parOuImpar`

```javascript
/**
 * Verifica se um número é par ou ímpar.
 *
 * @param {number} numero - O número a ser verificado.
 * @returns {string} - Retorna "Par" se o número for par, caso contrário "Ímpar".
 */
function parOuImpar(numero) {
    return numero % 2 === 0 ? "Par" : "Ímpar";
}

// Testando a função com os valores fornecidos e exibindo os resultados no console
console.log(parOuImpar(10));  // Saída: Par
console.log(parOuImpar(15));  // Saída: Ímpar
console.log(parOuImpar(22));  // Saída: Par
```

---

## 4. `podeAcessar`

```javascript
/**
 * Verifica se uma pessoa pode acessar um recurso com base na idade, se é administrador e se está bloqueada.
 *
 * @param {Object} params - Os parâmetros de verificação.
 * @param {number} params.idade - A idade da pessoa.
 * @param {boolean} params.isAdmin - Indica se a pessoa é um administrador.
 * @param {boolean} params.isBlocked - Indica se a pessoa está bloqueada.
 * @returns {boolean} - Retorna true se a pessoa pode acessar, caso contrário false.
 */
function podeAcessar({ idade, isAdmin, isBlocked }) {
    return (idade > 18 || isAdmin) && !isBlocked;
}

// Testando a função com os valores fornecidos
console.log(podeAcessar({ idade: 20, isAdmin: false, isBlocked: false }));  // Saída: true
console.log(podeAcessar({ idade: 16, isAdmin: true, isBlocked: true }));   // Saída: false
```

---

## 5. `calcularDesconto`

```javascript
/**
 * Calcula o preço após aplicar um desconto.
 *
 * @param {number} precoOriginal - O preço original do produto.
 * @param {number} desconto - O percentual de desconto a ser aplicado.
 * @returns {number} - Retorna o preço após o desconto.
 */
const calcularDesconto = (precoOriginal, desconto) => precoOriginal - (precoOriginal * (desconto / 100));

// Testando a função com os valores fornecidos
console.log(calcularDesconto(100, 10));  // Saída: 90
console.log(calcularDesconto(200, 25));  // Saída: 150
console.log(calcularDesconto(50, 5));    // Saída: 47.5
```

---