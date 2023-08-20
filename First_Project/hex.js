const hex=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

const btn=document.querySelector("#btn");
const color=document.querySelector(".color");
//#a2a2a2
btn.addEventListener("click",function(){
    let hexSymbol="#";

    for(let i=0;i<6;i++)
    {
        hexSymbol +=hex[getRandomHex()];
    }
    document.body.style.backgroundColor=hexSymbol;
    color.innerHTML=hexSymbol
})

function getRandomHex (){
    return Math.floor(Math.random()*hex.length)
}