function iniciarJogo(personagemEscolhido){
    const spritePersonagem = document.querySelector("#sprite-personagem");
    const spriteInimigo = document.querySelector("#sprite-inimigo");
    
    if(personagemEscolhido == "Sonic"){
        spritePersonagem.src = "./assets/img/sprites/sonic/sonic-correndo.gif";
    } else{
        spritePersonagem.src = "./assets/img/sprites/shadow/shadow-correndo.png";
    }

    document.addEventListener("keydown", (event) => { 
        if(event.key === "ArrowUp"){
            spritePersonagem.src = "./assets/img/sprites/sonic/sonic-pulando.gif";
            spritePersonagem.classList.add("pulo");
            
            setTimeout(() => {
                spritePersonagem.classList.remove("pulo");
                spritePersonagem.src = "./assets/img/sprites/sonic/sonic-correndo.gif";
            }, 800)
        }
    })

    setInterval(() => {
        if((Number(spriteInimigo.offsetLeft) <= window.innerWidth * 0.35) && (Number(spriteInimigo.offsetLeft) >= window.innerWidth * 0.22) && (window.getComputedStyle(spritePersonagem).bottom.replace('px', '') < window.innerHeight * 0.4)){
            spriteInimigo.style.animation = "none";
            spriteInimigo.style.left = spriteInimigo.offsetLeft + "px";
        }
    }, 10)
}

export {iniciarJogo}