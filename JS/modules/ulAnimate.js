
export default function ulAnimate() {

    const blocos = document.querySelector('.todasLi');
    const windowPmetade = window.innerHeight * 0.3;

    function animarBlocos() {
        const topoDiv = blocos.getBoundingClientRect().top;
        const eVisivel = (topoDiv - windowPmetade) < 0;
        if(eVisivel)
        blocos.classList.add('ativo');
        //else 
        //blocos.classList.remove('ativo');
    }

    window.addEventListener('scroll', animarBlocos);

}