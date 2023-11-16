// 1 - arrays

const lista = [1, 2, 3, 4, 5];

console.log(lista);

console.log(typeof lista);


// 2 - mais sobre arrays

const arr = ["a", "b", "c", "d", "e"];

console.log(arr[0]);

console.log(arr[2]);

console.log(arr[3]);


// 3 - propriedades

const numbers = [5, 3, 4];

console.log(numbers.length);

console.log(numbers["length"]);

const myName = "Kaline";

console.log(myName.length);

// 4 - metodos

const otherNumbers = [1, 2, 3];

const allNumbers = numbers.concat(otherNumbers);

console.log(allNumbers);

const text = "Alguma coisa";

console.log(text.toLocaleUpperCase());

console.log(typeof text.toLocaleUpperCase);

console.log(text.indexOf("g"));

// 5 - objetos

const person = {
    name: "Kaline",
    age: 31,
    job: "Programador"
}

console.log(person);
console.log(person.name);
console.log(person.name.length);
console.log(typeof person);

// 6 - criando e deletando proprirdades

const car = {
    engine: 2.0,
    brand: "vw",
    model: "Tiguan",
    km: 20000
};

console.log(car);

car.doors = 4;

console.log(car);

delete car.km;

console.log(car);

// 7 - mais sobre objetos

const obj = {
    a: "teste",
    b: true,
};

console.log(obj instanceof Object);

const obj2 = {
    c: []
}

Object.assign(obj2, obj);

console.log(obj2);

// 8 - conhecendo melhor os objetos

console.log(Object.keys(obj));
console.log(Object.keys(obj2));
console.log(Object.keys(car));

console.log(Object.entries(car));

// 9 - mutação

const a = {
    name: "Kaline",
};

const b = a;

console.log(a);
console.log(b);

console.log(a === b);

a.age = 21;

console.log(a);
console.log(b);

delete b.age;

console.log(a);
console.log(b);

// 10 - loops em arrays

const users = ["Kaline", "João", "Helena", "Luke"];

for (let i = 0; i < users.length; i++) {
    console.log(`listando o usuário: ${users[i]}`);
}

// 11 - push e pop

const array = ["a", "b", "c"];

array.push("d");

console.log(array);

console.log(array.length);

array.pop();

console.log(array);

const itemRemovido = array.pop();

console.log(itemRemovido);

console.log(array);

array.push("z", "x", "y");

console.log(array);

// 12 - shift e unshift

const letters = ["a", "b", "c"];

const letter = letters.shift();

console.log(letter);

console.log(letters);

letters.unshift("p", "q", "r");

letters.unshift("z");

console.log(letters);

// 13 - indexOf e lastlndexOf

const myElements = ["Morango", "Maça", "Abacate", "Pera", "Abacate"];

console.log(myElements.indexOf("Maça"));
console.log(myElements.indexOf("Abacate"));

console.log(myElements[2]);
console.log(myElements.indexOf("Abacate"));

console.log(myElements.lastIndexOf("Abacate"));

console.log(myElements.lastIndexOf("Mamão"));

console.log(myElements.indexOf("Mamão"));

// 14 - slice

const testeSlice = ["a", "b", "c", "d", "e", "f"];

const subArray = testeSlice.slice(2, 4);

console.log(subArray);
console.log(testeSlice);

const subArray2 = testeSlice.slice(2, 4 + 1);
console.log(subArray2);

const subArray3 = testeSlice.slice(10, 20);
console.log(subArray3);

const subArray4 = testeSlice.slice(2);
console.log(subArray4);

// 15 - forEach

const nums = [1, 2, 3, 4, 5];
nums.forEach((numero) => {
    console.log(`O número é: ${numero}`)
});

const posts = [
    { title: "Primeiro post", category:"PHP"},
    { title: "Segundo post", category:"JS"},
    { title: "Terceiro post", category:"Python"},
]

posts.forEach((post) => {
    console.log(`Exibindo post: ${post.title}, da categoria: ${post.category}`)
});

// 16 - includes

const brands = ["BMW", "VW", "FIAT"];
console.log(brands.includes("FIAT"));
console.log(brands.includes("KIA"));

if (brands.includes("BMW")) {
    console.log("Há carros da marca BMW!");
};

// 17 - reverse

const reverseTeste = [1, 2, 3, 4, 5];
reverseTeste.reverse();
console.log(reverseTeste);

// 18 - trim

const trimTeste = " testando \n ";
console.log(trimTeste);
console.log(trimTeste.trim());
console.log(trimTeste.length);
console.log(trimTeste.trim().length);

// 19 - padStart

const testePadStart = "1";
const newNumber = testePadStart.padStart(4, "0");
console.log(testePadStart);
console.log(newNumber);

const testePadEnd = newNumber.padEnd(10, "0");
console.log(testePadEnd);

// 20 - split

const frase = "O rato roeu a roupa do rei de Roma";
const arrayDaFrase = frase.split(" ");
console.log(arrayDaFrase);

// 21 - join

const fraseDenovo = arrayDaFrase.join(" ");
console.log(fraseDenovo);

const itensParaComprar = ["Mouse", "Teclado", "Monitor"];
const fraseDeCompra = `Precisamos comprar: ${itensParaComprar.join(", ")}.`;
console.log(fraseDeCompra);


// 22 - repeat

const palavra = "Testando ";
console.log(palavra.repeat(5));

// 23 - rest operator

const somaInfinita = (...args) => {
  let total = 0;
  
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
}

console.log(somaInfinita(1, 2, 3));
console.log(somaInfinita(1, 20, 345, 876, 1937, 3088, 12094, 5938));

// 24 - for...of

const somaInfinita2 = (...args) => {
    let total = 0;

    for (num of args) {
        total += num;
    }
    return total;
}

console.log(somaInfinita2(1, 2, 4));
console.log(somaInfinita2(5, 1, 7, 45, 32, 90));

// - 25 destructuring em objetos

const userDetails = {
    firstName: "Kaline",
    lastName: "Kelly",
    job: "Estudante"
};

const { firstName, lastName, job } = userDetails;
console.log(firstName, lastName, job);

// renomear variaeis
const { firstName: PrimeiroNome } = userDetails;
console.log(firstName);

// 26 - destructuring em array

const myList = ["Avião", "Sibmarino", "Carro"];
const [veículoA, veículoB, veículoC] = myList;
console.log(veículoA, veículoB, veículoC);

// 27 - JSON

const myJason = `{"name": "Kaline", "age": 31, "skills": ["PHP", "JS", "Python"]}`;
console.log(myJason);
console.log(typeof myJason);

// 28 - conversão

const myObject = JSON.parse(myJason);
console.log(myObject);
console.log(myObject.name);
console.log(typeof myObject);