const color = document.querySelector("#color")
const body = document.querySelector("body")


const setBg = () => {
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  body.style.backgroundColor = "#" + randomColor;
  color.innerHTML = "#" + randomColor;
}

button.addEventListener("click", setBg);
