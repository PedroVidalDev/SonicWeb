function iniciarJogo(personagemEscolhido){

    const caminho = `./assets/img/sprites/${personagemEscolhido}/`;
    
    const somDeFundo = document.querySelector("#som-de-fundo");
    somDeFundo.play();

    const somPulo = document.querySelector("#som-pulo");

    const spritePersonagem = document.querySelector("#sprite-personagem");
    const spriteInimigo = document.querySelector("#sprite-inimigo");
    const legendaPontuacao = document.querySelector("#pontuacao")

    const chao = document.querySelector("#chao");
    const chaoSegundo = document.querySelector("#chao-segundo")

    let pontuacao = 0;
    let perdeu = false;
    
    spritePersonagem.src = caminho + "sonic-correndo.gif";

    document.addEventListener("keydown", (event) => { 
        spritePersonagem.src = caminho + "sonic-pulando.gif";
        spritePersonagem.classList.add("pulo");
        
        somPulo.play();
        setTimeout(() => {
            spritePersonagem.classList.remove("pulo");
            spritePersonagem.src = "./assets/img/sprites/sonic/sonic-correndo.gif";
        }, 800)
    })

    setInterval(() => {
        if((Number(spriteInimigo.offsetLeft) <= window.innerWidth * 0.35) && (Number(spriteInimigo.offsetLeft) >= window.innerWidth * 0.22) && (window.getComputedStyle(spritePersonagem).bottom.replace('px', '') < window.innerHeight * 0.4)){
            
            spritePersonagem.src = caminho + "sonic-perdedor.png";

            spriteInimigo.style.left = spriteInimigo.offsetLeft + "px";
            spriteInimigo.style.animation = "none";

            chao.style.left = chao.offsetRight + "px";
            chao.style.animation = "none";

            chaoSegundo.style.left = chaoSegundo.offsetRight + "px";
            chaoSegundo.style.animation = "none";

            perdeu = true;
            somDeFundo.pause();
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