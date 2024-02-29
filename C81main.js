canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="red";
ctx.beginPath();
ctx.strokeStyle=blue;
ctx.lineWidth=5;
ctx.arc(250,210,40,0,2*Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown", mymousedown);
function mymousedown(e){
    mouse_x = e.clientX - canvas.offsetLeft;
     mouse_y = e.clientY - canvas.offsetTop;
      console.log("X = " + mouse_x + " ,Y = " + mouse_y);
     circle(mouse_x , mouse_y);
}

function circle(mouse_x , mouse_y) { ctx.beginPath(); ctx.strokeStyle = color; ctx.lineWidth = 2; 
    ctx.arc(mouse_x, mouse_y, 40 ,0 , 2*Math.PI); ctx.stroke(); }

    ctx.beginPath();
    ctx.strokeStyle=red;
    ctx.lineWidth=1;
    ctx.rect(150,143,430,200);
    ctx.stroke();   