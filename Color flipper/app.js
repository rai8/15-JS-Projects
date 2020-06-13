const colors = ["green", "black","red","blue" 
,"orange","rgba(133,122,200)", "#f15025"];
const btn=document.getElementById("btn")
const color=document.querySelector(".color")

//add event listener for the button
btn.addEventListener("click",function(){
    //console.log(document.body)
    //get random number between 0-7
    const randomNumber =getRandomNumber()
    console.log(randomNumber)
    document.body.style.backgroundColor=colors[randomNumber]
    color.textContent=colors[randomNumber ]
})

function getRandomNumber(){
    return Math.floor(Math.random()*colors.length)
}