const selecaoSonic = document.querySelector("#botao-selecao-sonic")
const selecaoShadow = document.querySelector("#botao-selecao-shadow")
const personagem = document.querySelector("#personagem")

selecaoSonic.addEventListener("mouseover", () => {
    personagem.src = "./assets/img/personagens/sonic.png";
})

selecaoShadow.addEventListener("mouseover", () => {
    personagem.src = "./assets/img/personagens/shadow.png";
})