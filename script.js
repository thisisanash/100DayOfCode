let colors = ["blue", "orange", "#F25F5C", "rgba(22, 66, 91, 1)"];
let color = document.getElementById("color");
let btn = document.getElementById("btn");

let randomNumber = () => {
    let random = Math.floor(Math.random() * colors.length);
    return random;
}

let addColor = () => {
    let randomOpt = randomNumber();

    document.body.style.backgroundColor = colors[randomOpt];
    color.innerHTML = colors[randomOpt];
}

btn.addEventListener("click", addColor);