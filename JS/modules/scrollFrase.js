 
export default function scrollFrase() {

 const frase = document.querySelector('.text-cta');
 const windowMetade = window.innerHeight * 0.6;

    function animaFrase() {
        const divTop = frase.getBoundingClientRect().top;
        const isDivVisible = (divTop - windowMetade) < 0;
        if(isDivVisible)
        frase.classList.add('ativo');

        //else if(frase.classList.contains('ativo')) {
            //frase.classList.remove('ativo');
        //}
     }
    
     window.addEventListener("scroll" , animaFrase); 

     // aqui vou fazer para escrever apenas com a class="ativo";

        function writeFrase(element) {
            const writeProd = element.innerHTML.split('');
            element.innerHTML = '';
            writeProd.forEach((letra , i) => {
                setTimeout(() => element.innerHTML += letra , 75 * i);
            });
         }

     // aqui a parte do observer e ver se esta "ativo";

     function mutacao(mutation) {
        if(mutation[0].target.classList.contains('ativo')) {
            observandoFrase.disconnect();
            writeFrase(frase);
        }
     }

     const observandoFrase = new MutationObserver(mutacao);
    
     observandoFrase.observe(frase, {attributes:true});



     // aqui irei animar o .CTA-BLOG !!!!

     const segFrase = document.querySelector('.cta-blog > h2 ');

     function animandoBlog() {
        const classTop = segFrase.getBoundingClientRect().top
        const isClassVisible = (classTop - windowMetade) < 0;
        if(isClassVisible) 
        segFrase.classList.add('ativo');
        //else if(segFrase.classList.contains('ativo')) 
       // segFrase.classList.remove('ativo');
    } 
    
    window.addEventListener('scroll' , animandoBlog)
     
    function writeBlog(element) {
        const escreverBlog = element.innerHTML.split('');
        element.innerHTML = '';
        escreverBlog.forEach((letra , i) => {
            setTimeout(() => element.innerHTML += letra , 75 * i);
        });
     }

     function mutationBlog(mutando) {
        if(mutando[0].target.classList.contains('ativo')) {
            observandoBlog.disconnect()
            writeBlog(segFrase);
        }
     }

     const observandoBlog = new MutationObserver(mutationBlog);

     observandoBlog.observe(segFrase , {attributes: true})

 }




