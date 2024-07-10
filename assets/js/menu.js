const selecaoSonic = document.querySelector("#botao-selecao-sonic");
const selecaoShadow = document.querySelector("#botao-selecao-shadow");
const personagem = document.querySelector("#personagem");

selecaoSonic.addEventListener("mouseover", () => {
    personagem.classList.remove("opacidadeSaida");
    personagem.classList.add("opacidadeEntrada");
    personagem.src = "./assets/img/personagens/sonic.png";
})

selecaoShadow.addEventListener("mouseover", () => {
    personagem.classList.remove("opacidadeSaida");
    personagem.classList.add("opacidadeEntrada");
    personagem.src = "./assets/img/personagens/shadow.png";
})

selecaoSonic.addEventListener("mouseout", () => {
    personagem.classList.remove("opacidadeEntrada");
    personagem.classList.add("opacidadeSaida");
    personagem.src = "./assets/img/personagens/sonic.png";
})

selecaoShadow.addEventListener("mouseout", () => {
    personagem.classList.remove("opacidadeEntrada");
    personagem.classList.add("opacidadeSaida");
    personagem.src = "./assets/img/personagens/shadow.png";
})

