var modeBtn  = document.getElementById("mode")
var body = document.querySelector("body")
var currentMOde = "light"


modeBtn.addEventListener("click" , () =>{
    if(currentMOde === "light"){
        currentMOde = "dark"
        body.classList.add("dark")
        body.classList.remove("light")
    } else {
        currentMOde = "light"
        body.classList.add("light")
        body.classList.remove("dark")
    }

    console.log(currentMOde);
    
})