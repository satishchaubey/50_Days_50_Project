let count =0;

const btns=document.querySelectorAll("button")
const value=document.querySelector("#value")

btns.forEach(function(btn){
    btn.addEventListener('click',function(index){
        // console.log(index)
        const target=index.currentTarget.classList
        if(target=="increment"){
            // console.log("hello")
            count++;
            value.style.color="green"
        }
        else if(target=="decrement"){
            // console.log("hello")
           
            if(count>0)
            {
                count--
                value.style.color="red"
            }
        }
        else{
            // console.log("hello")
            count=0
            value.style.color="yellow"
        }
        value.innerHTML=count

    })
})