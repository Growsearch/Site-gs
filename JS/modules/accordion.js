
    // PARTE DE CLICAR E APARECER A ESCRITA , NA PARTE DE CTA-EBOOK!!

    export default function initAccordion(){
        const ebookLista = document.querySelectorAll('#edit-list dt');
        const activeClass = 'ativo';
    
        if(ebookLista.length) {
            ebookLista[0].classList.toggle(activeClass);
            //ebookLista[0].nextElementSibling.classList.toggle(activeClass);
    
              function activeEbook() {
                 this.classList.toggle(activeClass);
                 this.nextElementSibling.classList.toggle(activeClass);
                }
    
            ebookLista.forEach((item) => {
                item.addEventListener('click' , activeEbook);
            });
        }
    }
    