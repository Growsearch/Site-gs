
export default function dataAnimeScroll() {
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
    const windowTop = window.pageYOffset + (window.innerHeight * 3 / 4);
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

}