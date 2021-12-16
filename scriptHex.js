let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let color = document.getElementById("color");
let btn = document.getElementById("btn");


let randomNumber = () => {
    let random = Math.floor(Math.random() * hex.length);
    return random;
}

let addColor = () => {
    let hexColor = "#";
    for(i=0; i<6; i++){
        hexColor += hex[randomNumber()];
    }

    document.body.style.backgroundColor = hexColor;
    color.innerHTML = hexColor;
}

btn.addEventListener("click", addColor);