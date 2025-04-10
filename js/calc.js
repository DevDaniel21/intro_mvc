// calcular a soma de um conjunto de números
// a função sum recebe um número variável de argumentos
// e usa o objeto arguments para acessar os argumentos passados
function sum() {
    // O objeto arguments é uma variável local disponível dentro de todas as funções JavaScript.
    // Você pode se referir a ele para obter todos os argumentos passados para uma função.
    // O objeto arguments é semelhante a um array, mas não possui métodos de array.
    // Para usar métodos de array em arguments, você deve convertê-lo em um array.
    const numbers = [...arguments]
    // a função reduce, aplicada a um array, executa uma função para cada elemento do array, acumulando um valor.
    // O primeiro argumento da função reduce é a função que será executada para cada elemento do array.
    return numbers.reduce(function (sum, atual) {
        return sum + atual
    }, 0) // O segundo argumento da função reduce é o valor inicial do acumulador (sum).
}

// calcula a média de um conjunto de números
// a função average recebe um número variável de argumentos
// e chama a função sum para somar todos os números
// e depois divide o resultado pelo número de argumentos
function average() {
    return sum(...arguments) / arguments.length
}

// O opertador spread (...) é usado para passar um array como argumentos para uma função.
// Nesse caso, o array arguments é passado como argumento para a função sum.
//console.log(sum(1, 2, 3, 4, 5)) // 15
//console.log(average(1, 2, 3, 4, 5)) // 3
/*
    O operador spread (...) em JavaScript é usado para expandir elementos de um iterável
    (como um array) em locais onde zero ou mais argumentos (para chamadas de função)
    ou elementos (para arrays literais) são esperados.
    Isso é muito útil em muitas situações, como quando você deseja passar argumentos
    para uma função ou elementos para um array.
*/