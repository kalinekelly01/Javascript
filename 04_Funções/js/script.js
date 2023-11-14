// 1 - criando uma função

function minhaFuncao() {
    console.log("Testando");
}

minhaFuncao();

const minhaFuncaoEmVariavel = function () {
    console.log("Função em variável");
}

minhaFuncaoEmVariavel();

function funcaoComParametro(txt) {
    console.log(`Imprimindo: ${txt}`);
}

funcaoComParametro("Imprimimdo alguma coisa");

funcaoComParametro("Imprimimdo outra coisa");

// 2 - return

const a = 10
const b = 20
const c = 30
const d = 40

function soma(n1, n2) {
    return n1 + n2;
}

const resultado = soma(a, b);

console.log(resultado);

console.log(soma(c, d));

// 3 - escopo da função

let y = 10;

function testandoEscopo() {
    let y = 20;
    console.log(`Y dentro da função é: ${y}`);
}

testandoEscopo();

y = 15;

console.log(`Y fora da função é: ${y}`);

testandoEscopo();

// 4 - escobo aninhado

let m = 10;

function escopoAninhado() {
    let m = 20;

    if (true) {
        let m = 30;

        if(true) {
            let m = 40;

            console.log(m);
        }
        console.log(m);
    }
    console.log(m);
}

escopoAninhado();
console.log(m);

// 5 - arrow function

const testeArrow = () => {
    console.log("Está é uma arrow function");
}

testeArrow();

const parOuImpar = (n) => {
    if (n % 2 === 0) {
        console.log("Par");
        return;
    }
    console.log("Impar");
}
parOuImpar(5);
parOuImpar(10);

// 6 - mais sobre arrow fanction

const raizQuadrada = (x) => {
    return x * x;
}

console.log(raizQuadrada(4));

const raizQuadrada2 = (x) => x * x;

console.log(raizQuadrada2(5));

console.log(raizQuadrada(12));

const helloWord = () => console.log("Hello Word");

helloWord();

// 7 - parametro opcional

const muitiplication = function(m, n) {
    if(n === undefined) {
        return m * 2;
    } else {
      return  m * n;
    }
}

console.log(muitiplication(5));

console.log(muitiplication(2, 4));

const greeting = (name) => {
    if(!name) {
        console.log("Olá!")
        return;
    }
    console.log(`Olá ${name} !`);
}
greeting();

greeting("Kaline");

// 8 - valor default

const customGreeting = (name, greet = "olá") => {
    return `${greet}, ${name}!`;
}

console.log(customGreeting("Kaline"));

console.log(customGreeting("João", "Bom dia"));

const repeatText = (text, repeat = 2) => {
   for (let i = 0; i < repeat; i++) {
    console.log(text);
   } 
}

repeatText("Testando");

repeatText("Agora repete 5 vezes", 5);

// 9 - closure

function someFunction() {
    let txt = "Alguma coisa";

    function display() {
        console.log(txt);
    }
    display();
}

someFunction();

// 10 - mais sobre closure

const muitiplicationClosure = (n) => {
    return (m) => {
        return n * m;
    }
}

const c1 = muitiplicationClosure(5);

const c2 = muitiplicationClosure(10);

console.log(c1);

console.log(c2);

console.log(c1(5));

console.log(c2(10));

// 11 - recursão

const untilTen = (n, m) => {
    if (n < 10) {
        console.log("A  função parou de executar!");
    } else {
        const x = n - m;

        console.log(x);

        untilTen(x, m);

    }
}

untilTen(100, 7);

function factorial(x) {
    if (x === 0) {
     return 1;   
    } else {
        return x * factorial(x - 1);
    }
}

const num = 6;

const result = factorial(num);

console.log(`O fatorial do número ${num} é ${result}`);
