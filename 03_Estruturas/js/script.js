// 1 - Variáveis

let nome = "kaline";
console.log(nome);

nome = "Kaline Kelly";
console.log(nome);

//o const não muda seu valor!
const idade = 21;
console.log(idade);

console.log(typeof nome);
console.log(typeof idade);

// 2 - Mais sobre Variáveis
//let 2test = "inválido"
//let @test = "inválido"

let a = 10, b = 20, c = 30;
console.log(a, b, c);

const  nomecompleto = "Kaline Kelly";

const nomeCompleto = "João Vitor";

console.log(nomecompleto);

console.log(nomeCompleto);

let _teste = "ok";

let $teste = "ok";

console.log(_teste, $teste);

// 3 - Prompt

const age = prompt("Digite sua idade");

console.log(`Voce tem ${age} anos.`);

// 4 - Alert

alert("Testando");

const z = 10

alert(`O número é ${z}`);

// 5 - Math

console.log(Math.max(5, 2, 3, 19));
console.log(Math.floor(5.14));
console.log(Math.ceil(6.29))

// 6 - Console

console.log("teste!");
console.error("error!");

// 7 - if

const m = 10;

if(m > 5) {
    console.log("M é maior que 5!");
}

const user = "João"

if(user === "João") {
    console.log("Olá João!");
}


if(user === "Kaline") {
    console.log("Olá Kaline!");
}

console.log(user === "João", user === "Kaline" ); 

// 8 - else

const loggedIn = false

if (loggedIn) {
    console.log("Está autenticado!");
} 
else {
    console.log("Não está autenticado!");
}

const q = 10;
const w = 15;

if (q > 5 && w > 20) {
    console.log("Números mais altos");
}
else {
    console.log("Os números não são mais altos");
}

// 9 - else if

if (1 > 2) {
    console.log("Teste");
} else if (5 > 1) {
    console.log("Agora sim!");
}

const userName = "Mateus";
const userAge = 31;

if (userName === "José") {
    console.log("Bem-vindo José");
} else if (userName === "Mateus" && userAge === 31) {
    console.log("Olá Mateus, voce tem 31 anos!");
} else {
    console.log("Nenhuma condição aceita!");
}

// 10 - while

let p = 0

while (p < 5) {
    console.log(`Repetindo ${p}`);
    p = p + 1;
}

// 11 - do while

let o = 10
do {
    console.log(`Valoe de o: ${o}`);
    o--;
} while (o > 1);

// 12 - for

for (let t = 0; t < 10; t++) {
    console.log("Repetindo algo...");
}

let r = 10;
for (r; r > 0; r = r - 1) {
    console.log(`O r está diminuindo: ${r}`);
}

// 13 - Identação

for (let u = 0; u < 10; u++) {
    if (u * 2 > 10) {
        console.log(`Maior que 10! ${u}`);
    } else {
        if (u / 2 === 0) {
            console.log("deu 0");
        }
    }
}

// 14 - break

for (let g = 20; g > 10; g--) {
    console.log(`O valor de g é: ${g}`);

    if (g === 12) {
        console.log("O g é 12");
        break;
    }
}

// 15 - continue

for(let s = 1; s < 10; s = s + 1){
    if(s % 2 === 0) {
        console.log("Número par!");
        continue;
    }

    console.log(s);
} 

// 16 - switch

const job = "Advogado";

switch (job) {
  case "Programador":
    console.log("Voce é um programador!");
    break;
  case "Advogado":
    console.log("Voce é um advogado!");
    break;
  case "Engenheiro":
    console.log("Voce é um engenheiro!");
  default:
  console.log("Profissão não encontrada");
}