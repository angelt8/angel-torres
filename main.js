document.querySelector('.menu-btn').addEventListener('click',() => {
     document.querySelector('.nav-menu').classList.toggle('show')
    });

    ScrollReveal().reveal('.showcase');
    ScrollReveal().reveal('.new-cards', { delay: 500});
    ScrollReveal().reveal('.cards-banner-one', { delay: 500});
    ScrollReveal().reveal('.social', { delay: 500});
    
    $('ul.nav-menu li a').click(function(){
     var activetab =$('this').attr('href')
     ScrollReveal().reveal(activetab, { delay: 500})
     $(activetab).show();
     return false;
    });

    
