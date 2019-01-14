document.addEventListener("DOMContentLoaded", function(event) {

function canvasDesktop(){
  canvas = document.getElementById("monCanvas2");

  if(canvas.getContext)
  {
      context = canvas.getContext('2d');
      context.canvas.width  = window.innerWidth;
      context.canvas.height = window.innerHeight;
      var x1=monCanvas2.width;
      var y1=monCanvas2.height;
  }
  function drawLine1_1()
  {
   context.beginPath();
   context.lineWidth = 3;
   context.moveTo(x1,y1/1.5);
   context.lineTo(x1/2,y1);
   context.stroke();
  }
  function drawLine1_2() {
    context.beginPath();
    context.lineWidth = 3;
    context.moveTo(0,y1/1.5);
    context.lineTo(x1/2,y1);
    context.stroke();
  }
  function drawLine1_3() {
    context.beginPath();
    context.lineWidth = 3;
    context.moveTo(x1/2,0);
    context.lineTo(x1/2,y1);
    context.stroke();
  }
  function drawLine1_4() {
    context.beginPath();
    context.lineWidth = 4;
    context.moveTo(0,y1);
    context.lineTo(x1,y1);
    context.stroke();
  }

  drawLine1_1(monCanvas2)
  drawLine1_2(monCanvas2)
  drawLine1_3(monCanvas2)
  drawLine1_4(monCanvas2)

}


function canvasMobil(){
  canvas = document.getElementById("monCanvas2");

  if (canvas.getContext) {
    context = canvas.getContext('2d');
    context.canvas.width = window.innerWidth;
    context.canvas.height = window.innerHeight;
    var x1 = monCanvas2.width;
    var y1 = monCanvas2.height;
  }

  function drawLine0_1() {
    context.beginPath();
    context.lineWidth = 3;
    context.moveTo(0, 200);
    context.lineTo(x1, 376.67);
    context.stroke();
  }

  function drawLine0_2() {
    context.beginPath();
    context.lineWidth = 3;
    context.moveTo(0,543.33);
    context.lineTo(x1,y1);
    context.stroke();
  }
  function drawLine0_3() {
    context.beginPath();
    context.lineWidth = 3;
    context.moveTo(0, 670);
    context.lineTo(232, 670);
    context.stroke();
  }

  drawLine0_1(monCanvas2)
  drawLine0_2(monCanvas2)
  drawLine0_3(monCanvas2)

}


let viewportWidth = $(window).width();
window.addEventListener("resize", function() {
  viewportWidth = $(window).width();
  responsive(viewportWidth);
}, false)
window.addEventListener("load", function() {
  viewportWidth = $(window).width();
  responsive(viewportWidth);
}, false)

function responsive(viewportWidth) {
  if (viewportWidth < 576) {
    canvasMobil()
  } else {
    canvasDesktop()

  }
}

});
