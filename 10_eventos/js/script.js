// 1 - acionando eventos

const btn = document.querySelector("#my-button");
btn.addEventListener("click", function() {
    console.log("Clicou aqui!");
})

// 2 - removendo eventos

const secondBtn = document.querySelector("#btn");
function imprimirMensagem() {
    console.log("Teste");
}
secondBtn.addEventListener("click", imprimirMensagem);

const thirdBtn = document.querySelector("#other-btn");
thirdBtn.addEventListener("click", () => {
    console.log("Evento removido");
    secondBtn.removeEventListener("click", imprimirMensagem);
});