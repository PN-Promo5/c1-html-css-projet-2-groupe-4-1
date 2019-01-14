document.addEventListener("DOMContentLoaded", function(event) {
      //PAGE ACCEUIL PAGE ACCEUIL PAGE ACCEUIL PAGE ACCEUIL PAGE ACCEUIL

      function canvasDesktop(){
        canvas = document.getElementById("monCanvas");

        if (canvas.getContext) {
          context = canvas.getContext('2d');
          context.canvas.width = window.innerWidth;
          context.canvas.height = window.innerHeight;
          var x1 = monCanvas.width;
          var y1 = monCanvas.height;
          var myLink = document.getElementsByClassName("linkOtherPages");
          var myCtn = document.getElementsByClassName("containerPageAcceuil");
          // var y1String = y1.toString();
          myLink[0].style.height = (y1/1.53)+'px';
          myCtn[0].style.height = y1+'px';

        }

        function drawLine0_1() {
          context.beginPath();
          context.lineWidth = 3;
          context.moveTo(x1, 0);
          context.lineTo(0, y1);
          context.stroke();
        }

        function drawLine0_2() {
          context.beginPath();
          context.lineWidth = 3;
          context.moveTo(0, 0);
          context.lineTo(x1, y1);
          context.stroke();
        }

        drawLine0_1(monCanvas)
        drawLine0_2(monCanvas)

      }

      function canvasMobil(){
        canvas = document.getElementById("monCanvas");

        if (canvas.getContext) {
          context = canvas.getContext('2d');
          context.canvas.width = window.innerWidth;
          context.canvas.height = window.innerHeight;
          var x1 = monCanvas.width;
          var y1 = monCanvas.height;
        }

        function drawLine0_1() {
          context.beginPath();
          context.lineWidth = 3;
          context.moveTo(0, 55);
          context.lineTo(x1, 55);
          context.stroke();
        }

        function drawLine0_2() {
          context.beginPath();
          context.lineWidth = 3;
          context.moveTo(0,55);
          context.lineTo(x1,355);
          context.stroke();
        }
        function drawLine0_3() {
          context.beginPath();
          context.lineWidth = 3;
          context.moveTo(0, 355);
          context.lineTo(x1, 355);
          context.stroke();
        }

        drawLine0_1(monCanvas)
        drawLine0_2(monCanvas)
        drawLine0_3(monCanvas)

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



        //PAGE INFO PAGE INFO PAGE INFO PAGE INFO
      });
