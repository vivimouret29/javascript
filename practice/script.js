'use strict'

// création
const slide = document.querySelector("#navbarDropdownMenu");
const slide_menu = document.querySelector("#navbarDropdownMenuLink"); 
slide_menu.onclick = function () {
    slide.style.display=(window.getComputedStyle(document.querySelector('#navbarDropdownMenu')).display=='none') ? "block" : "none";
}

// ajout de la date actuelle
var today=new Date();
var annee = today.getFullYear();
var sannee = document.getElementById('js-current-year');
sannee.innerHTML = annee;

// création fonction du calcul de l'imc
function BMI() {
    var weight = document.getElementById("js-bmi-weight").value;
    var height = document.getElementById("js-bmi-height").value;
    const IMC = (weight / ((height / 100) * (height / 100)));
    if (IMC < 18.5){
        alert('Your Body Mass Index is ' + IMC + '. It is considered underweight.');
    }
    else if (IMC >= 18.5 && IMC <= 25){
        alert('Your Body Mass Index is ' + IMC + '. It is a healthy weight.');
    }
    else if (IMC < 25){
        alert('Your Body Mass Index is ' + IMC + '. It is considered overweight.');
    }
}
// appel de la fonction imc après submit
document.getElementById("js-bmi-form").addEventListener("submit", (event) => {
    event.preventDefault()
    BMI()
})

// tableau bmifacts
const bmiFacts = [
    {
      title: 'Future weight of children can be anticipated by BMI',
      description: 'Scientists in a new study have concluded that future weight can be forecasted by looking at children’s BMI. ',
      img: 'http://lorempixel.com/200/200/cats'
    },
    {
      title: 'Losing BMI weight lowers the risk of diabetes',
      description: 'New research established the fact that lowering BMI by almost five units dramatically lowers risk of diabetes, in spite of the initial weight of a person.',
      img: 'http://lorempixel.com/200/200/sports'
    },
    {
      title: 'Pre-pregnancy BMI is closely related to excess weight gain during pregnancy',
      description: 'Excessive weight gain during pregnancy affects the health of a mother and her baby, pre-pregnancy BMI and ethnicity might signal a likelihood for obesity later in life for young mothers.',
      img: 'http://lorempixel.com/200/200/fashion'
    },
    {
      title: 'Coronary heart disease is proportionate to Body Mass Index (BMI)',
      description: 'According to a research from the Million Women Study, Coronary heart disease (CHD) increases with age and also with an increase in body mass index (BMI).',
      img: 'http://lorempixel.com/200/200/food'
    },
  ];
// parcours tout le document bmifacts puis le modifie en ajoutant les div
// bmiFacts.forEach(function(bmiFacts)){
//     document.write();
// }

// ouverture en pop-up de la pub dès l'ouverture de la page
window.open('https://cat-bounce.com/', '_blank');