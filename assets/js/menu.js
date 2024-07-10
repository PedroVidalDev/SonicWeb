const menu = document.querySelector("#menu")
const jogo = document.querySelector("#jogo")
const selecaoSonic = document.querySelector("#botao-selecao-sonic");
const selecaoShadow = document.querySelector("#botao-selecao-shadow");
const personagem = document.querySelector("#personagem");

let personagemEscolhido;

selecaoSonic.addEventListener("mouseover", () => {
    personagem.classList.remove("opacidadeSaida");
    personagem.classList.add("opacidadeEntrada");
    personagem.src = "./assets/img/personagens/sonic.png";
})

selecaoSonic.addEventListener("mouseout", () => {
    personagem.classList.remove("opacidadeEntrada");
    personagem.classList.add("opacidadeSaida");
    personagem.src = "./assets/img/personagens/sonic.png";
})

selecaoSonic.addEventListener("click", () => {
    menu.style.display = "none";
    jogo.style.display = "flex";
    personagemEscolhido = "Sonic";
})

selecaoShadow.addEventListener("mouseover", () => {
    personagem.classList.remove("opacidadeSaida");
    personagem.classList.add("opacidadeEntrada");
    personagem.src = "./assets/img/personagens/shadow.png";
})

selecaoShadow.addEventListener("mouseout", () => {
    personagem.classList.remove("opacidadeEntrada");
    personagem.classList.add("opacidadeSaida");
    personagem.src = "./assets/img/personagens/shadow.png";
})

selecaoShadow.addEventListener("click", () => {
    menu.style.display = "none";
    jogo.style.display = "flex";
    personagemEscolhido = "Shadow";
})

export {personagemEscolhido};