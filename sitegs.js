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

// testando alguns incrementos em JS :)

    let a = window.document.getElementById('anuncio-p')

    a.addEventListener('mouseenter' , convidar)
    a.addEventListener('mouseleave' , sair )
    a.addEventListener('click' , clicou )

    function convidar(){
        a.innerText = "Quer conhecer melhor estas funções? clique aqui!"
        a.style.background = "#fff"
        a.style.fontSize = " 10px"
    }

    function sair(){
        a.innerText = "Volte e clique se quiser conhecer as funções. :)"
        a.style.background = "#44f187"
    }

    function clicou(){
        a.click > alert("Parabéns por explorar a plataforma ao máximo, mas ainda estamos desenvolvendo algumas partes do site. Em breve, diversas novidades para vocês!")
    }