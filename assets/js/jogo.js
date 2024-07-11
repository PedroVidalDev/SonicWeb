function iniciarJogo(personagemEscolhido){
    
    const audio = document.querySelector("audio");
    audio.play();

    const spritePersonagem = document.querySelector("#sprite-personagem");
    const spriteInimigo = document.querySelector("#sprite-inimigo");
    const legendaPontuacao = document.querySelector("#pontuacao")

    let pontuacao = 0;
    let perdeu = false;
    
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
            
            spriteInimigo.style.left = spriteInimigo.offsetLeft + "px";
            spriteInimigo.style.animation = "none";
            perdeu = true;
        }
    }, 10)

    let velocidade = 3;
    setInterval(() => {
        if(!perdeu){
            spriteInimigo.style.animation = `andarInimigo ${velocidade}s infinite linear`;
            velocidade = velocidade - 0.01;
        }
    }, 5000)

    setInterval(() => {
        if(!perdeu){
            pontuacao++;
        }
        
        legendaPontuacao.innerHTML = `${pontuacao}m`
    }, 200)
}

export {iniciarJogo}