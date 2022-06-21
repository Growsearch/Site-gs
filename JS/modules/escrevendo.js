
// aqui irei criar uma maquina de escrever no meio da pagina, 

export default function escrevendoTela() {

function maquinaEscrev(elemento) {
    const textoProd = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoProd.forEach ((letra , i ) => {
        setTimeout(() => elemento.innerHTML += letra , 75 * i);
    });
}

const prodSpeak = document.querySelector('.info > p');
maquinaEscrev(prodSpeak);

const prodSpeak2 = document.querySelector('#text-cta');
maquinaEscrev(prodSpeak2);

}
// resolvido a parte de maquina de escrever.  Abaixo irei fazer a integração com 
// o scroll para que so comece quando o usuario chegar a section.


