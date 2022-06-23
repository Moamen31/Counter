//create a variable to decrease or increase the number of it
let count = 0;
//get elements
let value = document.querySelector(".value")
let btns = document.querySelectorAll(".btn")

//function for every btn when on clicked
btns.forEach(function(btn){
    btn.addEventListener("click",function(e){
//if it has class decrease do something
        if (e.currentTarget.classList.contains("decrease")){
            count--
            
        }
        else if (e.currentTarget.classList.contains("increase")){
            count++
        }
        else{
            count = 0
        }
        //consition to change the colors
        if (count < 0) {
            value.style.color = "#f44336"
        }
        else if (count > 0) {
            value.style.color = "#8bc34a"
        }
        else if (count === 0){
            value.style.color = "#222"
        }
        //add the count value to the span value
        value.innerHTML = count
    })
})