function telaPerdeu(personagem, pontuacao){
    const tela = document.querySelector("#tela-perdeu");
    const telaJogo = document.querySelector("#jogo")
    telaJogo.style.display = "none";
    tela.style.display = "flex";

    const mensagem = document.querySelector("#mensagem-perdeu");
    mensagem.innerHTML = `Parabéns, você correu ${pontuacao}m!`

    const botaoEnviarNome = document.querySelector("#enviar-nome");
    botaoEnviarNome.addEventListener("click", () => {
        window.location.reload(true)
    })
}

export {telaPerdeu};