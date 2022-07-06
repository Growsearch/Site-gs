
// MENU MOBILE !
export default function menuMobile() {

const btnmobile = document.querySelector('button.btn-mobile');

function toggleMenu(event){
    if (event.type == 'touchstart') event.preventDefault()
        const nav = document.querySelector('nav.nav');
        nav.classList.toggle('active'); 
        const active = nav.classList.contains('active');      
    event.currentTarget.setAttribute('aria-expanded' , 'true');

    if(active) { 
        event.currentTarget.setAttribute('aria-label' , 'Fechar Menu');
    } else {
        event.currentTarget.setAttribute('aria-label' , 'Abrir Menu');
    }
}

btnmobile.addEventListener('click' , toggleMenu);
btnmobile.addEventListener('touchstart' , toggleMenu);

}