'use strict'

// Logguez dans la console 'Hello' 3 secondes après le rendu de la page.

setTimeout(() => {
    console.log('hello')
}, 3000);


// Logguez dans la console 'Logged after 5 seconds' 5 secondes après le rendu de la page.

setTimeout(() => {
    console.log('logged after 5 seconds')
}, 5000);

// Ajoutez un écouteur d'événement 'click' à l'objet window pour logguer dans la console 'Clicked' 3 secondes après le clique.

window.addEventListener('click', () => {
    setTimeout(() => {
        console.log('clicked!');
    }, 3000);
});

// Créez un div. Au survol de ce div logguez dans la console 'I was hovered 5.5 seconds ago' 5 secondes plus tard.

const div = document.querySelector('#survol');

div.addEventListener('mouseover', () => {
    setTimeout(() => {
        console.log('I was hovered 5.5 seconds ago');
    }, 1000);
});

// Créez dynamiquement une image avec src égal à http://lorempixel.com/400/200/.
// Quand l'image sera entièrement chargée, logguez dans la console 'Done!' et l'affichez sur la page.
// En cas d'erreur de chargement, logguez dans la console 'Error'.

const myImg = document.createElement('img');
myImg.src = 'http://lorempixel.com/400/200/';
myImg.onload = () => {
    console.log('done!');
    document.body.appendChild(myImg)
};
myImg.onerror = () => {
    console.log('error');
};

// Créez dynamiquement une node de script avec l'url de la librarie lodash: https://cdn.jsdelivr.net/npm/lodash@4.17.11/lodash.min.js.
// Quand le script sera téléchargé, appelez la fonction round pour arrondir le nombre 10.02.

const myScript = document.createElement('Script');
myScript.src = 'https://cdn.jsdelivr.net/npm/lodash@4.17.11/lodash.min.js';
docume
myScript.onloadend = () => {
    console.log(round(10.02))
};
myScript.onerror = () => {
    console.log('error');
};