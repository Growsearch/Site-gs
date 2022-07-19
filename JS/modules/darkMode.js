export default function darkModeOn() {

const chk = document.querySelector('.checkbox');

chk.addEventListener('change', () => {
    document.body.classList.toggle('dark')
});

}