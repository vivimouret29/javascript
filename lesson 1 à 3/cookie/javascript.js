'use script';

// let 
// const user = {
//     name: 'Toto'
// }

// //user = {
// //   name: 'Tata'
// //}
// // user.name = 'Tata'
// //const EARTH_MASS

// let myString = "Hello World";
// let myNumber = 1.5;
// let myBoolean = true; //false
// let myNull = null;
// let myUndefined = undefined

// const myObject = {
//     name:'Toto',
//     car: {
//         color: 'red'
//     }
// }

// let MyArray = [1,2,3];
// let MyNesteArray = [1,2,3,[3],4,'Hello'];

// // if 20/2 >= 10;
// // 'yes'
// // else 'false'

// isPrivate = false 
// isPrivate = false

// if (isPrivate = false || (isPrivate = true && isMember = true)){ ; // if (!isPrivate || (isPrivate && isMember))
// 'ok'}

// const username =prompt ('What is your name?')
// console.log('username',username);
// alert('your value here');

// const today = new Date();
// const todayDay = today.getDate

// const clientId = 1;

// //(condition) ? ... = ...
// (typeof clientId === 'number') ? console.log('Saved') : console.log('Cancel')


// // fonction en java

// function myFunc() {
//     console.log('Hello World');
//     // return undifined
// }

// function returnFunc(text= ' ') {
//     HTMLFormControlsCollection.log('text',text)
//     return text.toUpperCase();
// }

// console.log(returnFunc('Hello World'))

// const sum = (param1, param2) => {
//     console.log('param1', param1);
//     console.log('param2',param2);
//     return param1 + param2;
// }

// console.log('sum', sum(2,4))

// const sum = (p1,p2) => p1, p2;
// console.log('sum', sum(2,4));


// const truncate = (str, length, trail= '...') => {
//  str.substring(0,length)
// }

// const res1 = truncate('I will be truncated',15,'->')
// console.log ('res1' , res1)
// const res2 = truncate('I will be truncated',5)
// console.log ('res2',res2)


// //tableau 

// const myArr = [1,'Hello', true];
// console.log(myArr[0]);
// console.log(myArr[myArr.lenght -1]);

// const myArr1 = myArr;
// myArr1[0] = 'World';

// console.log('myArr',myArr);
// console.log('myArr1',myArr1);

// myArr2 = [...myArr];
// myArr2[0] = 'test';

// const myArr3 = [1,2,3,4,5,6,7]
// myArr3.shift
// myArr3.unshift



// // Trouvez toutes les balises div du document. Loggez le deuxième élément s'il est présent.
// const myDivs = document.getElementsByTagName('div');
// console.log('myDivs',myDivs);
// const myDivs2 = document.querySelectorAll('div');
// console.log('myDivs2 > first', myDivs2[0]);

// // Trouvez toutes les balises p avec la classe 'my-paragraph' du document. Loggez le premier élément s'il est présent.
// const myParagrahs = document.getElementByClassName ('my-paragraph');
// const myParagraphs2 = document.querySelectorAll('.myParagraph');
// console.log('myParagrpah2',myparagrpahs2);

// // Trouvez la balise span avec l'id 'js-unique-el'. Loggez-là. Inspéctez les propriétés de cet objet Element
// const myUniqueEl = document.getElementById('js-unique-el');
// const myUniqueEl = document.querySelector('#js-unique-el');

// // Trouvez toutes les balises p qui se trouvent dans un div.
// const myParagrahsInDivs = document.querySelectorAll('div p');
// console.log('myParagraphsInDivs', myParagrahsInDivs);

// // Trouvez toutes les balises span qui sont précédées par un div.
// const spansPreceededByDivs = document.querySelectorAll('div~span');
// console.log('spansPreceededByDivs',spansPreceededByDivs);



// // Ajoutez le texte 'I am the first paragraph' au premier paragraphe du document.
// const firstP = document.querySelector('p');
// firstP.innertext = 'I am the first paragraph';
// console.log('firstP > text', firstP.innertext);

// // Ajoutez le HTML <span>Hello</span> au deuxième paragraphe du document.
// const secondP = document.querySelectorAll('.second-p');
// secondP[0].innerHTML = '<span>Hello</span>';
// console.log('secondP > html', secondP[0].innerHTML);

// // Modifiez les attributs width à 50% et height à 'auto' de l'image.
// const myImg =document/querySelector('Img');
// myImg.setAttribute('width', '50%');

// // Ajoutez un attribut alt non vide à l'image.
// myImg;setAttribute('alt', 'Random image');

// // Donnez la couleur 'blue' au premier paragraphe du div et la taille de police '1.5rem'.
// firstP.style.color = 'blue';
// firstP.style.fontsize = '1.5rem';

// // Ajoutez la classe img à l'image.
// myImg.className = 'my-img'; //myImg.ClassName += 'another-class'
// myImg.classlist.add('my-img');
// //myImg.classlist.remove('my-img')

// // Supprimez le paragraphe qui se trouve dans un div. Supprimez le span.
// const parent = document.querySelector('div');
// const nodeToDelete = document.querySelector('div p');
// parent.removeChild(nodeToDelete);

// // Créer un element
// const myBody = document.querySelector('body');
// const newDiv = document.createElement('div');
// newDiv.innerText = 'Hello!';
// myBody.appendChild(newDiv); // append dernier, prepend premier


// EXO Window

// const paragraphe = document.getElementById('paragraphe');
// const ajout = document. createElement('p')
// ajout.innerText = 'Nom de navigateur: '+ window.navigator.userAgent;
// paragraphe.prepend(ajout) ;

// const paragraphe2 = document.getElementById('paragraphe2');
// const ajout2 = document. createElement('p');
// const ajout3 = document. createElement('p');
// const ajout4 = document. createElement('p');
// const ajout5 = document. createElement('p');
// ajout2.innerText = 'Largeur fenetre: ' + window.innerWidth;
// ajout3.innerText = 'Hauteur fenetre: ' + window.innerHeight;
// ajout4.innerText = 'Largeur navigateur: ' + window.outerWidth;
// ajout5.innerText = 'Hauteur navigateur: ' + window.outerHeight;
// paragraphe2.append(ajout2);
// paragraphe2.append(ajout3);
// paragraphe2.append(ajout4);
// paragraphe2.append(ajout5);

// Créez un bouton dans votre HTML. Ajoutez-lui un écouteur d'événements côté JavaScript. Si le bouton est cliqué, loggez 'Clicked!'. Loggez également l'événement passé et explorez ces propriétés.
// const btn = document.querySelector('#js-btn');
// btn.addEventListener('click', (event) => {
//     console.log('Cliked', event );
// });

// window.addEventListener('contextmenu', (event) =>{
//     event.preventDefault();
// });

// const grayBtn = document.querySelector('#js-gray-btn');
// grayBtn.addEventListener('click', () => {
//     isClikedTwice = !isClikedTwice;
//     if (isClikedTwice) {
//         grayBtn.style.backgroundColor = 'green';
//     } else {
//         grayBtn.style.backgroundColor = 'gray';
//     }
// });


// const hoveredBtn = document.querySelector('#hovered-btn');
// hoveredBtn.addEventListener('mouseenter', () => {
//     hoveredBtn.style.backgroudColor = 'red';
// })
// hoveredBtn.addEventListener('mouseleave', () => {
//     hoveredBtn.style.backgroudColor = 'inherit'; // revient a la couleur initiale
// })

// créez un cookie lang égal a 'fr'
document.cookie = 'lang=fr';

// Créez un cookie previewSeen &gal a true qui va expirer le lendemain
document.cookie = `lang=fr; expires=${new Date('2019-02-12')}`;

// Créez un cookie test égal a 'test' qui va expirer le 31 décembre 2019
docCookies.setItem('test1', 'test', new Date('2019-12-31'));

// Créez un cookie userId égal à 123
docCookies.setItem('userId', 123);
console.log(typeof docCookies.getItem('userId'));

// Modifiez la valeur du cookie userId à 321.
docCookies.setItem('userId', 321);

// Récupérez et loggez les valeurs des cookies lang, previewSeen et userId
console.log(docCookies.getItem('lang'));
console.log(docCookies.getItem('previewSeen'));
console.log(docCookies.getItem('userId'));

// store an object
docCookies.setItem('testObject', JSON.stringify({ id:1 }));

//get an object
const myObj = docCookies.getItem('testObject');
console.log('myObj', myObj);
console.log('myObj parsed', JSON.parse(myObj));

// Supprimez le cookie test.
docCookies.removeItem('test');
docCookies.setItem('test', '', new Date('2000-01-01'));

// LOCAL STORAGE

// Vérifiez si l'objet LocalStorage est supporté par le navigateur.
if (localStorage) {
    // Créez une entrée greeting égale à 'Hello World'. 
    localStorage.setItem('greeting', 'hello wooooooooooooorld');

    // Créez une entrée adIds égale à l'objet {top: 1, bottom: 2}. 
    localStorage.setItem('adIds', JSON.stringify({top: 1, bottom: 2}));

    // Récupérez greeting. 
    console.log(localStorage.getItem('greeting'));

    // Modifiez cette entrée à 'Welcome'. 
    localStorage.setItem('greeting', 'welcome');

    // Supprimez greeting du LocalStorage.
    localStorage.removeItem('greeting');

    // delete all entries
    localStorage.clear();
}

