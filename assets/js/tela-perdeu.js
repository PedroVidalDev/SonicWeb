function telaPerdeu(personagem, pontuacao){
    const tela = document.querySelector("#tela-perdeu");
    const telaJogo = document.querySelector("#jogo")
    telaJogo.style.display = "none";
    tela.style.display = "flex";

    const mensagem = document.querySelector("#mensagem-perdeu");
    mensagem.innerHTML = `Parabéns, você correu ${pontuacao}m!`
}

export {telaPerdeu};