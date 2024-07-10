function iniciarJogo(personagemEscolhido){
    const spritePersonagem = document.querySelector("#sprite-personagem");
    if(personagemEscolhido == "Sonic"){
        spritePersonagem.src = "./assets/img/sprites/sonic/sonic-correndo.gif";
    } else{
        spritePersonagem.src = "./assets/img/sprites/shadow/shadow-correndo.png";
    }

    document.addEventListener("keydown", (event) => { 
        if(event.key === "ArrowUp"){
            spritePersonagem.src = "./assets/img/sprites/sonic/sonic-pulando.png";
            spritePersonagem.classList.add("pulo");
            
            setTimeout(() => {
                spritePersonagem.classList.remove("pulo");
                spritePersonagem.src = "./assets/img/sprites/sonic/sonic-correndo.gif";
            }, 450)
        }
    })
    
}

export {iniciarJogo}