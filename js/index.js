//Silde
const slideConteudo = document.querySelectorAll(".sld");
var cabecalho = document.querySelector(".cabecalho");
var slideConteudoActual = 1;
var currentImage = 1;
var frame;
var tempoSlide = 0;


function ConteudoActual(s){//ConteudoActual
    slideConteudo[s].style.display="block";
}

function imagemAtual(){//imagem atual
    if(currentImage == 3) currentImage=1
    else currentImage++;
    cabecalho.style.backgroundImage="url('img/bg"+currentImage+".jpg')";
}

//funcao para controlar todos os Slides na pagina
function gerenciaSlides(){
    tempoSlide++;
    if(tempoSlide == 700){//Controla tempo de troca
        for(var i=0; i<slideConteudo.length; i++){//loop para limpar o conteudo
            slideConteudo[i].style.display="none";
        }
        ConteudoActual(slideConteudoActual);//adicona um outro conteudo
        imagemAtual()
        if (slideConteudoActual==2) slideConteudoActual = 0;
        else  slideConteudoActual++;
        tempoSlide =0;
}
    frame=requestAnimationFrame(gerenciaSlides);
}

//Modal de cards
const cards = document.querySelectorAll(".card")
cards.forEach(crd =>{
    crd.addEventListener("click",card);
})

var Evento;
var imagemModalCard = document.querySelector(".imagemModalCard");
var tipoEvento = document.querySelector(".tipoEvento")

function card(){
    if(this.classList.contains('evento1')){
      
        Evento = document.querySelector(".evento1 h3").innerHTML;
        imagemModalCard.src="img/cards/card1.jpg"
        tipoEvento.innerHTML= Evento;

    }else if(this.classList.contains('evento2')){

        Evento = document.querySelector(".evento2 h3").innerHTML;
        imagemModalCard.src="img/cards/card2.jpg"
        tipoEvento.innerHTML= Evento;

    }else if(this.classList.contains('evento3')){

        Evento = document.querySelector(".evento3 h3").innerHTML;
        imagemModalCard.src="img/cards/card3.jpg"
        tipoEvento.innerHTML= Evento;

    }else if(this.classList.contains('evento4')){

        Evento = document.querySelector(".evento4 h3").innerHTML;
        imagemModalCard.src="img/cards/card4.jpg"
        tipoEvento.innerHTML= Evento;

    }else if(this.classList.contains('evento5')){

        Evento = document.querySelector(".evento5 h3").innerHTML;
        imagemModalCard.src="img/cards/card5.jpg"
        tipoEvento.innerHTML= Evento;

    }else if(this.classList.contains('evento6')){

        Evento = document.querySelector(".evento6 h3").innerHTML;
        imagemModalCard.src="img/cards/card1.jpg"
        tipoEvento.innerHTML= Evento;
    }

    document.querySelector(".modalCards").classList.add("mostraModalCards")
    document.querySelector("html").style.overflowY="hidden"
    
}
//fechar modal cards
const btnCloseModalCards = document.querySelector(".fecharModalCards");
btnCloseModalCards.addEventListener("click",()=>{
    document.querySelector(".modalCards").classList.remove("mostraModalCards")
    document.querySelector("html").style.overflowY="visible"
 })
//funcao de inicilizaçao
function inicializador(){
    gerenciaSlides();
    slideConteudo[0].style.display="block";
    cabecalho.style.backgroundImage="url('img/bg"+currentImage+".jpg')";
}
window.onload = inicializador();