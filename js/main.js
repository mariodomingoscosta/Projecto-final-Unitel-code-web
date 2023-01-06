// fixar menu no Topo

const cabeca = document.querySelector('.logoMenu');
const topCabeca = cabeca.offsetTop;


function fixarNoTopo(){
    if(window.pageYOffset >= topCabeca){
        cabeca.classList.add('fixaMenu')
    }else{
        cabeca.classList.remove('fixaMenu')
    }
    
    // Posicinamento da caixa modal cards Events
    document.querySelector(".modalCards").style.top=window.pageYOffset+"px";
}

window.addEventListener("scroll",fixarNoTopo)

// Mostrar menu mobile
const btnBars = document.querySelector(".bars")
const menuMobile = document.querySelector(".menu-mobile")
const fecharMenu = document.querySelector(".fechar-menu");
btnBars.addEventListener("click",()=>{
     menuMobile.style.right="0";
})

fecharMenu.addEventListener("click",()=>{
    menuMobile.style.right="-300px";
})

// mostrar e ocultar modal de cadastro e Login 
const btnConectar = document.querySelector(".btnCadas");
const btnCloseModal = document.querySelector(".fecharModal");
const modalLogin = document.querySelector(".modalCastro")

btnConectar.addEventListener("click",()=>{
   modalLogin.classList.add("mostraModal");
   document.querySelector("html").style.overflowY="hidden"
})

btnCloseModal.addEventListener("click",()=>{
    modalLogin.classList.remove("mostraModal");
    document.querySelector("html").style.overflowY="visible"
 })