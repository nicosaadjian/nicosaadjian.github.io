// Función que ajusta el desplazamiento según la altura de la navbar
function updateScrollPadding() {
    const navigationHeight = document.querySelector('.navbar.navbar-expand-sm.bg-light').offsetHeight;
    document.documentElement.style.setProperty('--scroll-padding', `${navigationHeight}px`);
}

// Ejecuta la función inicialmente para ajustar el padding en el viewport original
updateScrollPadding();

// Escucha el evento de cambio de tamaño de la ventana para recalcular la altura de la navbar
window.addEventListener('resize', updateScrollPadding);


let skillHTML = document.getElementById('skill-html')
let skillCSS = document.getElementById('skill-css')
let skillBootstrap = document.getElementById('skill-bootstrap')
//HTML////////////////////////////////////
skillHTML.addEventListener('mouseover', function(){
    skillHTML.innerHTML = 'This site was created using HTML5!'
});
skillHTML.addEventListener('mouseout', function(){
    skillHTML.innerHTML = 'HTML';
});
//CSS////////////////////////////////////
skillCSS.addEventListener('mouseover', function(){
    skillCSS.innerHTML = 'This site was created using CSS3!'
});
skillCSS.addEventListener('mouseout', function(){
    skillCSS.innerHTML = 'CSS';
});
//Boostrap////////////////////////////////////////////
skillBootstrap.addEventListener('mouseover', function(){
    skillBootstrap.innerHTML = 'This site was created using Bootstrap5!'
});

skillBootstrap.addEventListener('mouseout', function(){
    skillBootstrap.innerHTML = 'Bootstrap 5';
});