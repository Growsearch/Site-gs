// Adicionando interatividade na class="frase";
export default function fraseAnima() {

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
    ativar.style.background = '#e7e7e7'
    ativar.style.color = '#3D4343'
    ativar.style.fontSize = '12px'
}

}