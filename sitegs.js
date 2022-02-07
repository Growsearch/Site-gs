function porvir(){
    window.alert("No momento estamos sem esta página. Trabalhando nisto!")
    var retorno = confirm('Quer ir para o BLOG?')
    if (retorno == true) {
        window.open ("https://growsearch.github.io/projeto-blog/index.html")
    } else{
        window.alert("voce preferiu ficar por aqui")
    }
}

function carregar(){
    window.alert("No momento ainda nao temos a prévia do e-book. Já estamos trabalhando nisto!")
}

//treinando efeito de máquina de escrever  ( FUNCIONANDO )

function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach ((letra , i) => {
        setTimeout(() => elemento.innerHTML += letra , 70 * i);
    });
}

const titulo = document.querySelector('div.info > p')
typeWriter(titulo);


// Adicionando interatividade na class="frase";

let frase = document.querySelector('div.frase')
let ativar = document.querySelector('button#ativar')

ativar.addEventListener('click' , () => {
    frase.classList.toggle('animar');
})

// interacoes do slide completa. (css e js)

// Agora darei inicio ao button, ( mudar quando clicar )

ativar.addEventListener('click' , clicou)

function clicou(){
    ativar.innerText = 'Clique para sair e voltar o slide!'
    ativar.style.background = 'rgb(44, 44, 44)'
    ativar.style.color = 'white'
}

// MENU MOBILE !

const btnmobile = document.querySelector('button.btn-mobile');

function toggleMenu(event){
    if (event.type == 'touchstart') event.preventDefault()
        const nav = document.querySelector('nav.nav');
        nav.classList.toggle('active'); 
        const active = nav.classList.contains('active');      
    event.currentTarget.setAttribute('aria-expanded' , 'true');

    if (active){ event.currentTarget.setAttribute('aria-label' , 'Fechar Menu')
    } else{
        event.currentTarget.setAttribute('aria-label' , 'Abrir Menu')
    }
}

btnmobile.addEventListener('click' , toggleMenu)
btnmobile.addEventListener('touchstart' , toggleMenu)


// ANIMMANDO DATA-ANIME     SCROLL //

function debounce(func, timeout = 200){
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
  }
  function saveInput(){
    console.log('Saving data');
  }
  const processChange = debounce(() => saveInput());

// FUNCTION DEBOUNCE copiei e colei da internet ----  site: https://www.freecodecamp.org/news/javascript-debounce-example/


const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeScroll() {
    const windowTop  = window.pageYOffset + (window.innerHeight * 3 / 4);
    target.forEach(function(element) {
        if ((windowTop) > element.offsetTop) {
            element.classList.add(animationClass);
        } else{
            element.classList.remove(animationClass);
        }
    })
}

animeScroll();

if (target.length) {
    window.addEventListener('scroll' , debounce(function() {
        animeScroll();
    } , 200));
}
