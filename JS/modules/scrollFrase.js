
export default function scrollFrase() {

const frase = document.querySelector('p.text-cta');

if(frase.length) {
  const windowMetade = window.innerHeight * 0.6;


function animaFrase() {
    frase.forEach((paragrafo) => {
        const sectionTop = paragrafo.getBoundingClientRect().top;
        const isDivVisible = (sectionTop - windowMetade) < 0;
        if(isDivVisible) 
            paragrafo.classList.add('ativo');
            
        else if(paragrafo.classList.contains('ativo')) {
            paragrafo.classList.remove('ativo');
        }
    });
}

animaFrase();

  window.addEventListener('scroll' , animaFrase);
}

// aqui a parte do Observer 

function handleMutation(mutation) {
    if(mutation[0].target.classList.contains('.ativo')) {
        observer.disconnect();        
    }
}

const observerTarget = document.querySelector('.text-cta');
const observer = new MutationObserver(handleMutation);

observer.observe(observerTarget , {attributes: true});

}