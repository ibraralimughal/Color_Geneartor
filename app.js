let h3 = document.querySelector("h3")
let btn = document.querySelector("button")

btn.addEventListener("click",()=>{
    let finalColor = getColors();
    let div = document.querySelector("div")
    div.style.backgroundColor = finalColor

    h3.innerText = finalColor

})
function getColors (){
    let red = Math.floor(Math.random()*255)
    let green = Math.floor(Math.random()*255)
    let blue = Math.floor(Math.random()*255)
    let final = `rgb(${red},${green},${blue})`
    return final
    // console.log(final);
    
    
}
// getColors()