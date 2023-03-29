const cvs = document.querySelector('#cvs');
const ctx = cvs.getContext('2d');

cvs.width = window.innerWidth;
cvs.height = window.innerHeight;

let x = [50, 50, 500, 500, 50];
let y = [500, 100, 100, 500, 500];

function Line(xPoint, yPoint) {
    if (xPoint.length !== yPoint.length) {
      console.error("Ошибка: Длина массивов должна быть одинаковой.");
      return;
    }
    ctx.beginPath();
    ctx.moveTo(xPoint[0], yPoint[0]);
    for (let i = 1; i < xPoint.length; i++) {
      ctx.lineTo(xPoint[i], yPoint[i]);
    }
    ctx.stroke();
  }

  Line(x, y);