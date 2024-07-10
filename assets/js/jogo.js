function iniciarJogo(personagemEscolhido){
    const spritePersonagem = document.querySelector("#sprite-personagem");
    if(personagemEscolhido == "Sonic"){
        spritePersonagem.src = "./assets/img/sprites/sonic/sonic-correndo.gif";
    } else{
        spritePersonagem.src = "./assets/img/sprites/shadow/shadow-correndo.png";
    }
    
}

export {iniciarJogo}