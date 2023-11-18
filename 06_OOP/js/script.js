// 1 - métodos

const animal = {
    nome: "bob",
    latir: function () {
        console.log("Au au");
    }
}
console.log(animal.nome);
animal.latir();

// 2 - mais de métodos

const pessoa = {
    nome: "Helena",

    getNome: function () {
        return this.nome;
    },
    setNome: function (novoNome) {
        this.nome = novoNome;
    }
}
console.log(pessoa.nome);
console.log(pessoa.getNome());

pessoa.setNome("Hazel");
console.log(pessoa.getNome());

// 3 - prototype

const text = "asd";
console.log(Object.getPrototypeOf(text));

const bool = true;
console.log(Object.getPrototypeOf(bool));

const arr = [];
console.log(Object.getPrototypeOf(arr));

// 4 - mais sobre prototypes

const myObject = {
    a: "b" ,
}
console.log(Object.getPrototypeOf(myObject));

const mySegundObject = Object.create(myObject);
console.log(mySegundObject);
console.log(mySegundObject.a);
console.log(Object.getPrototypeOf(mySegundObject) === myObject);

// 5 - classes básicas

const cachorro = {
    raca: null,
    patas: 4,
}
const pastorAlemao = Object.create(cachorro);
pastorAlemao.raca = "Pastor Alemão";
console.log(pastorAlemao);
console.log(pastorAlemao.patas);

const bulldog = Object.create(cachorro);
bulldog.raca = "Bulldog";
console.log(bulldog);

// 6 - função como classe - fun.construtora

function criarCachorro(nome, raca) {
    const cachorro = Object.create({});
    cachorro.nome = nome;
    cachorro.raca = raca;
    return cachorro;
}
const bob = criarCachorro("Bob", "Vira lata");
console.log(bob);

const jack = criarCachorro("Jack", "Poodle");
console.log(jack);
console.log(Object.getPrototypeOf(jack));

// 7 - função como classe

function Cachorro(nome, raca) {
    this.nome = nome;
    this.raca = raca;
}
const husky = new Cachorro("Ozzy", "Husky");
console.log(husky);

// 8 - métodos na função construtora

Cachorro.prototype.uivar = function () {
    console.log("Auuuuu!");
}
console.log(Cachorro.prototype);
husky.uivar();

// 9 - classes ES6

class CachorroClasse {
    constructor (nome, raca) {
        this.nome = nome;
        this.raca =  raca;
    }  
}
const jeff = new CachorroClasse("Jeff", "Labrador");
console.log(jeff);
console.log(Object.getPrototypeOf(jeff));

// 10 - mais sobre classes

class Caminhão {
    constructor(eixos, cor){
        this.eixos = eixos;
        this.cor = cor;
    }
    descreverCaminhao() {
        console.log(`Este caminhão tem ${this.eixos} eixos e é da cor ${this.cor}`);
    }
}

const scania = new Caminhão(6, "azul");
console.log(scania);
scania.descreverCaminhao();

// 11 - overrride

class Humano {
   constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
   } 
}
const kaline = new Humano("Kaline",21);
console.log(kaline);
console.log(Humano.prototype.idade);
Humano.prototype.idade = "Não definida";
console.log(kaline.idade);

// 12 - symbol

class Aviao {
    constructor(marca, turbinas) {
        this.marca;
        this.turbinas;
    }
}
const asas = Symbol();
const pilotos = Symbol();
Aviao.prototype[asas] = 2;
Aviao.prototype[pilotos] = 3;
const boeing = new Aviao("Boeing", 10);
console.log(boeing);
console.log(boeing[asas]);
console.log(boeing[pilotos]);

// 13 - getters e setters

class Post {
    constructor(titulo, descricao, tags) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.tags = tags;
    }
    get exibirTitulo() {
     return `Voce está lendo: ${this.titulo}`;
    }
    set adicionarTags(tags) {
        const tagsArrays = tags.split(", ");
        this.tags = tagsArrays;
    }
}
const myPost = new Post("Algum post", "É um post sobre programação");
console.log(myPost);
console.log(myPost.exibirTitulo);
myPost.adicionarTags = "programação, python, JS";
console.log(myPost); 

// 14 - herança

class Mamifero {
    constructor(patas) {
        this.patas = patas;
    }
}
class Lobo extends Mamifero {
    constructor(patas, nome) {
    super(patas, patas) 
    this.nome = nome;   
    }
}
const luke = new Lobo(4, "luke");
console.log(luke);

// 15 - instanceof

console.log(luke instanceof Lobo);
console.log(Lobo instanceof Mamifero);
console.log(new Lobo(4, "teste") instanceof Mamifero);