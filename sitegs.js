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

//treinando efeito de máquina de escrever 

function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach ((letra , i) => {
        setTimeout(() => elemento.innerHTML += letra , 70 * i);
    });
}

const titulo = document.querySelector('div.info > p')
typeWriter(titulo);
