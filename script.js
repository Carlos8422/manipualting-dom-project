let p_div = document.getElementById("p-div");
let img_div = document.getElementById("img-div");
let addPButton = document.getElementById("p-button");
let addImgButton = document.getElementById("img-button");

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
}

function addImages(){
    img_div.style.display = "block";
    let newImage = document.createElement("img");
    newImage.style.width = "100px";
    newImage.src = "pikachu.png";
    img_div.appendChild(newImage);
    p_div.style.display = "none";
}


addPButton.addEventListener("click", addP);
addImgButton.addEventListener("click", addImages);