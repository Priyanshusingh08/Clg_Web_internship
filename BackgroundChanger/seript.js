var btn = document.querySelector("#menu");

btn.addEventListener("click", function(e){
   var color = e.target.id;
   var background = document.querySelector("body");
   console.log(color);
   background.style.background=color;
})