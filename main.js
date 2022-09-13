canvas=document.getElementById("desenho");
ctx= canvas.getContext("2d");
cor="black";
papel.beginPath();
papel.strokeStyle=cor;
papel.lineWidth=2;
papel.arc(
    200,200,40,0,2*Math.PI
);
papel.stroke();
canvas.addEventListener(
    "mousedown", mymousedown
);
function mymousedown(e){
    mousex=e.clientX-canvas.offsetLeft;
    mousey=e.clientY-canvas.offsetTop;
    papel.beginPath();
papel.strokeStyle=cor;
papel.lineWidth=2;
papel.arc(
    mousex,mousey,40,0,2*Math.PI
);
papel.stroke();
}