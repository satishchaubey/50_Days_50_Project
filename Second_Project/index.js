let count = 0;

const value=document.querySelector(".value");

const btns=document.querySelectorAll("button")

btns.forEach(function(index){
    index.addEventListener("click",function(val){
        const styles=val.currentTarget.classList;

        if(styles.contains("increment")){
            count++;
            value.style.color="green"
        }
        else if(styles.contains("decrement")){
           
            if(count>0){
                count--;
                value.style.color="red"
            }
            else{ 
                value.style.color="yellow"
            }
        }
        else{
            count=0;
            value.style.color="white"
        }
        value.innerHTML=count;
    })
})