const otp = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const btn = document.getElementById("btn");
const number = document.getElementById("number");

btn.addEventListener("click", function () {
    let num="";
    console.log(num,"number")
  for (let i = 0; i <=3; i++) {
    num+=otp[getOTP()]
  }
  number.innerHTML=num
});

function getOTP(){
    return Math.floor(Math.random()*otp.length)
}
