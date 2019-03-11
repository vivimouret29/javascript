'use strict';

// Créez un bouton. Si ce bouton est cliqué, logguez dans la console 'Clicked!'.
// Si ce bouton est cliqué plus de 5 fois, enlevez son écouteur d'événement 'click'.
// document.querySelector('#btn').addEventListener('click', () => {});
// $('#btn').click(() => {});
// $('#btn').on('click', () => {});

let counter = 0;
$('#js-btn').click(() => {
    counter++;
    if (counter > 5) {
        $('#js-btn').off('click')
    }
    console.log('counter', counter);
})

// Créez un div bleu. Si on le survole, il passe en vert. Si on sort le curseur du div, il redevient bleu. Utilisez les méthodes mouseenter, mouseleave ou hover.
$('#js-hovered').mouseenter(() => {
    $('#js-hovered').css('background-color', 'green');
});
$('#js-hovered').mouseleave(() => {
    $('#js-hovered').css('background-color', 'blue');
});

// Desactivez le comportement par défaut du click du bouton droit de la souris sur toute la page. 
// Si le bouton a été cliqué, vérifiez si le comportement par defaut est desactivé. Dans ce cas-là, logguez dans la console 'You shall not pass'

// Si le paragraphe avec l'id js-tooltip-wrapper est survolé, affichez le span avec l'id js-tooltip. Si il n'est plus survolé, cachez le span.
$('#js-tooltip-wrapper').mouseenter(() => {
    $('#js-tooltip').css('display', 'inline');
});
$('#js-tooltip-wrapper').mouseleave(() => {
    $('#js-tooltip').css('display', 'none');
});












