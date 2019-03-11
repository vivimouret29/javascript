'use strict';

// Quand le rendu de la page sera terminé, utilisez les selecteurs jQuery pour sélectionner et logguer:
$(document).ready(() => {

    // toutes les balises divs
    const divs = $('div');
    console.log('divs', divs);

    // toutes le balises avec le nom de classe js-paragrah
    console.log('class', $('.js-paragraph'));

    // la balise avec l'id js-unique-paragraph
    console.log('id', $('#js-unique-paragraph'));

    // le premier titre <h3>
    console.log('first h3', $('h3:first'));

    // le premier <th> du premier <tr>
    console.log('premier th premier tr', $('tr:first th:first'));

    // le premier <td> du chaque <tr>
    console.log('premier td chaque tr', $('tr td:first-child'));

    // tous les liens
    console.log('tous les liens', $('a'))

    // tous les lien externes (ceux qui ont l'attribut target égal à _blank)
    console.log('tous les liens externes', $('a[target="_blank"]'))

    // tous les lien internes (ceux qui n'ont pas d'attribut target égal à _blank)
    console.log('tous les liens internes', $('a[target!="_blank"]'))

    // tous les boutons dans un formulaire
    console.log('boutons', $('form:button'))
})

// Récupérez et logguez dans la console le contenu du titre de la page.
const title = $('h1').text();
console.log('title', title);

// Changez le contenu du titre de la page à 'My page title'.
$('h1').text('my page title');

// Récupérez et logguez dans la console le HTML de l'article.
const articleContent = $('#js-article').html();
console.log('articleContent', articleContent);

// Changez le contenu de l'article à
$('js-article').html(`
<h2>This is my article.</h2>
<p>This is my article's content.</p>
<a href="https://example.com">Read more</a>
`);

// Récupérez et logguez dans la console la valeur du champ de saisie avec l'id js-search.
const inputValue = $('#js-search').val();
console.log('inputValue', inputValue);

// Changez la valeur du champ de saisie à 'Beagles'
$('#js-search').val('Beagles');

// Récupérez et logguez dans la console la valeur du placeholder du champ de saisie.

// Changez la valeur du placeholder du champ de saisie à 'Search'
$('#js-search-form')[0].addEventListener('submit', (event) => {
    event.preventDefault();
    // 
});

// CSS
// Ajoutez la classe 'alert-primary' au <div>.
$('#js-alert').addClass('alert-primary');

// Supprimez la classe 'alert' du <div>. Supprimez la classe 'alert-primary' du <div>.
$('#js-alert').removeClass('alert-primary');

// Ajoutez d'un coup les classes 'alert' et 'alert-warning' au <div>.
$('#js-alert').addClass('alert alert-warning');

// Vérifiez si le <div> possède déjà la classe 'alert-warning'. Si oui, supprimez-la.
if ($('#js-alert').hasClass('alert-warning')) {
    $('#js-alert').removeClass('alert-warning');
}

// En cliquant sur le bouton #js-btn, basculez la classe 'alert-success': premier clique ajoute la classe, deuxième clique l'enlève, troisième l'ajoute de nouveau, etc.
$('#js-btn')[0].addEventListener('click', () => {
    $('#js-alert').toggleClass('alert-success');
});

// Récupérez et logguez dans la console la couleur du fond du bouton.
console.log($('#js-btn').css('background-color'));

// Passez la couleur du fond du bouton en #71b8af.
$('#js-btn').css('background-color', '#71b8af');

// Changez d'un coup la couleur du texte du bouton à #fff2d5 et le radius de la bordure à 3px
$('#js-btn').css({
    color: '#fff2d5',
    'border-radius': '3px'
});

// Vérifiez si le <div> a la classe alert-danger. Si oui, ajoutez la classe text-danger au <p> et supprimez la classe btn-success du bouton. 
// Au clique sur le bouton ajoutez la propriété css display égale à none au <div>.
if ($('#js-danger-alert').hasClass('alert-danger')) {
    $('#js-danger-alert').addClass('text-danger');
    $('#js-danger-alert-btn').removeClass('btn-success');
};


