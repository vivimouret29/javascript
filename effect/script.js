'use strict';


// Utilisez le HTML ci-dessus. Affichez l'alerte si le bouton #js-show-alert est cliqué. Cachez-la si le bouton #js-hide-alert est cliqué.
$('#js-show-alert').click(() => {
    // $('#js-alert').show(); --> affiche
    // $('#js-alert').toggle(); // affiche / cache
    // $('#js-alert').slideDown(); // affiche avec animation glisse
    $('#js-alert').fadeIn(); // affiche avec animation pop
});

$('#js-hide-alert').click(() => {
    // $('#js-alert').hide(); // cache
    // $('#js-alert').slideUp(); // cache avec animation glisse
    $('#js-alert').fadeOut(); // affiche avec animation pop
});

// Au clique sur le bouton avec l'id js-btn-fade-in faites apparaître le div avec l'animation fondu (fade in). 
// Au clique sur le bouton avec l'id js-btn-fade-out faites disparaître le div avec l'animation fondu (fade out).
$('#js-btn-fade-in').click(() => {
    $('#js-div-fade-in-out').fadeIn();
});
$('#js-btn-fade-out').click(() => {
    $('#js-div-fade-in-out').fadeOut();
});

// Utilisez le HTML ci-dessus.
// Après le rendu de la page tous les <div> ont l'opacité de 30%.
// Quand un <div> est cliqué, son opacité monte à 100%. Quand un autre <div> est cliqué, son opacité monte à 100% et l'opacité de tous les autres divs descend de nouveau à 30%.
// Utilisez la méthode fadeTo.


// Au clique sur le paragraphe avec l'id js-p-fade-to faites baisser son opacité jusque 10%.
$('#js-animation-1')
    .delay(1000)
    .animate({
        left: '300px'
    }, 700)
    .animate({
        width: '200px'
    }, 500)
    .animate({
        height: '700px'
    });












