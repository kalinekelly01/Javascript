// 1 - Number
console.log(typeof 2);
console.log(typeof 5.14);
console.log(typeof -127);

// 2 - Ops. Aritmeticas
console.log(2 + 4);
console.log(10 - 5);
console.log(2 * 10);
console.log(20 / 2);
console.log(9 + 3 * 10);

// 3 - Special numberes
console.log(typeof Infinity);
console.log(typeof -Infinity);
console.log(12 *  "asd");
console.log(typeof NaN);

// 4 - Textos
console.log("Um texto");
console.log('mais um texto');
console.log(`17`);

console.log(typeof "Um texto");
console.log(typeof 'mais um texto');

// 5 - Símbolos especiais em String
console.log("Testando a \n quebra de linha");
console.log("Espaçamento \t de tab"); 

// 6 - Concatenação
console.log("Oi," + " tudo " + "bem?");
console.log(`Testando` + ` com ` + `crase!`);

// 7 - Interpolação
console.log(`A soma de 2 + 2 é: ${2 + 2}`);
console.log(`Podemos executar qualquer coisa aqui ${console.log("teste")}`);

// 8 - Boolean
console.log(true);
console.log(5 > 20);
console.log(30 < 10);
console.log(typeof false);

// 9 - Comparações
console.log(5 <= 5);
console.log(5 < 5);
console.log(10 == 10);
console.log(10 === 10);
console.log(10 != 9);

// 10 - Identico
console.log(9 == "9");
console.log(9 === "9");
console.log(9 != "9");
console.log(9 !== "9");

// 11 - Operadores Lógicos
console.log(true && true);
console.log(true && false);
console.log(5 > 2 && 2 < 10);
console.log(5 > 2 && "kaline" === 1);
console.log(5 > 2 || 5 > 100);
console.log(!true);
console.log(!5 > 2);
console.log(!10 === 10);

// 12 - Empty Values
console.log(typeof null, typeof undefined);
console.log(null === undefined);
console.log(null == undefined);
console.log(null == false);
console.log(undefined == false);

// 13 - Mudança de tipos
console.log(5 * null);
console.log("teste" * "opa");
console.log("10" + 1);
console.log("10" - 1);