var wrapper = document.querySelector(".mobile-wrapper")
var myBars = document.querySelector(".my-bars")
var exit = document.querySelector("#close")



myBars.addEventListener("click", ()=>{
    // console.log("click")
    wrapper.classList.toggle("show-menu")
})

exit.addEventListener("click", ()=>{
    wrapper.classList.toggle("show-menu")
})



var changeColors = document.querySelectorAll("#like-change")
var increaseLike = document.querySelectorAll("#increase-like")
var newSpan = document.createElement("span")


changeColors.forEach(changeColor =>{
    changeColor.addEventListener("click",(e)=>{
        changeColor.classList.toggle("change")
        

    })
})



var values = [
    "Astronomy Binoculars A Great Alternative",
    "Atiku Abubakar departs Nigeria for Europe",
    "Governor to hold Emergency meeting today on minimum wage",
    "Ex CBN Governor, Emefiele's $1.4 Milion Forfeited to FG",
    "We must Protect, Preserve Traditional Institutions - Atiku",
    "VP Shettima Loses Mother In Law",
]

var changing = document.getElementById("changing")
var para = document.createElement("p")
var news = document.querySelector(".news")
var index = 0

setInterval(()=>{
    index = (index + 1) % values.length
    para.innerText = values[index]
    para.classList.add("changing")
    para.classList.add("transition-interval")
    news.appendChild(para)

},4000)

