const colors = ["green", "red", "#f2f3f3", "pink"];

const btn=document.getElementById("btn");
const color=document.querySelector(".color");

btn.addEventListener('click',function(){
  const randomNumber=getRandomNumber()
  document.body.style.backgroundColor=colors[randomNumber]
  color.innerHTML=colors[randomNumber];
})

function getRandomNumber (){
    return Math.floor(Math.random()*colors.length)
}