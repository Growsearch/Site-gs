
export default function initFuncionamento() {

const funcionamento = document.querySelector('[data-semana]');
const diasSemana = funcionamento.dataset.semana.split(',').map(Number);
const horarioSemana = funcionamento.dataset.horario.split(',').map(Number);

const dataAgora = new Date();
const diaAgora = dataAgora.getDay();
const horarioAgora = dataAgora.getHours();

const semanaAberto = diasSemana.indexOf(diaAgora) !== -1;
const horarioAberto = (horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1]);

if(semanaAberto && horarioAberto) {
    funcionamento.classList.add('aberto');
}

const writeOn = document.querySelector('.funcionamento > h3');

function mudancaWrite() {
    if(funcionamento.classList.contains('aberto')) {
        writeOn.innerHTML = 'Dev On';
    } else {
        writeOn.innerHTML = 'Dev Off';
    }
}
mudancaWrite();

}
