'use script';

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const getCoordinatesInCanvas = (canvasEl, event) => {
    // récupérer la taille de <canvas> et sa position relative par rapport à la zone d'affichage
  const rect = canvasEl.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  console.log(`x: ${x}, y: ${y}`);
}
canvas.addEventListener('click', (event) => {
  getCoordinatesInCanvas(canvas, event);
})

ctx.strokeStyle = '#fff';
ctx.fillStyle = '#fff';

// head
ctx.beginPath();
ctx.arc(200, 180, 60, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();

// body
ctx.beginPath();
ctx.arc(200, 360, 120, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();

// hat
ctx.strokeStyle = '#000';
ctx.fillStyle = '#000';
ctx.fillRect(123, 130, 150, 25); //bas
ctx.fillRect(152, 47, 90, 100); //haut

// left arm
ctx.lineWidth = 5;
ctx.beginPath();
ctx.moveTo(132,301);
ctx.lineTo(30, 254);
ctx.stroke();

// right arm
ctx.lineWidth = 5;
ctx.beginPath();
ctx.moveTo(256,305);
ctx.lineTo(330, 267);
ctx.lineTo(370, 210);
ctx.stroke();

// eyes left
ctx.beginPath();
ctx.arc(177, 177, 5, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();

// eyes right
ctx.beginPath();
ctx.arc(220, 177, 5, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();

// nose
ctx.strokeStyle = 'orange';
ctx.fillStyle = 'orange';
ctx.beginPath();
ctx.moveTo(199, 186);
ctx.lineTo(124, 211);
ctx.lineTo(199, 210);
ctx.quadraticCurveTo(203, 195, 199, 186);
ctx.stroke();
ctx.fill();

// scarf
ctx.strokeStyle = 'purple';
ctx.fillStyle = 'purple';
ctx.fillRect(170, 230, 60, 20); //largeur
ctx.fillRect(200, 250, 20, 75); //hauteur
