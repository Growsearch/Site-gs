
// aqui irei criar uma maquina de escrever no meio da pagina, obeservando o scroll.

function maquinaEscrev(elemento){
    const textoProd = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoProd.forEach ((letra , i ) => {
        setTimeout(() => elemento.innerHTML += letra , 70 * i);
    });
}

const prodSpeak = document.querySelector('#text-cta');
maquinaEscrev(prodSpeak);

// resolvido a parte de maquina de escrever.  Abaixo irei fazer a integração com 
// o scroll para que so comece quando o usuario chegar a section.


