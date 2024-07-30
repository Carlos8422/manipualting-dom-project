let p_div = document.getElementById("p-div");
let img_div = document.getElementById("img-div");
let doNothing_div = document.getElementById("donothing-div");
let addPButton = document.getElementById("p-button");
let addImgButton = document.getElementById("img-button");
let doNothingButton = document.getElementById("donothing-button");

let pCount = document.getElementById("pCount");
let pCounter = 0;
let imgCount = document.getElementById("imgCount");
let imgCounter = 0;
let nothingCount = document.getElementById("nothingCount");
let doNothingCounter = 0;

doNothing_div.style.display = "none";

function addP(){
    p_div.style.display = "block";
    let newP = document.createElement("p");
    newP.innerText="Hot chocolate is bad today";
    newP.style.background = "black";
    newP.style.color = "white";
    newP.style.fontSize = "20px";
    newP.style.padding = "10px";
    p_div.appendChild(newP);
    img_div.style.display = "none";
    doNothing_div.style.display = "none";
    pCounter++;
    updateCounter();
}

function addImages(){
    img_div.style.display = "block";
    let newImage = document.createElement("img");
    newImage.style.width = "100px";
    newImage.src = "pikachu.png";
    img_div.appendChild(newImage);
    p_div.style.display = "none";
    doNothing_div.style.display = "none";
    imgCounter++;
    updateCounter();
}

function doNothingF(){
    doNothing_div.style.display = "block";
    p_div.style.display = "none";
    img_div.style.display = "none";
    doNothingCounter++;
    updateCounter();
}

function updateCounter(){
    pCount.innerText = "pCount: " + pCounter;
    imgCount.innerText = "imgCount: " + imgCounter;
    nothingCount.innerText = "nothingCount: " + doNothingCounter;
}

addPButton.addEventListener("click", addP);
addImgButton.addEventListener("click", addImages);
doNothingButton.addEventListener("click", doNothingF);