                let h3 = document.querySelector("h3");
let color1 = document.getElementById("color1");
let color2 = document.getElementById("color2");
let body = document.querySelector("body");

body.style.background = `linear-gradient(to right,${color1.value},${color2.value})`;

color1.style.backgroundColor = color1.value;
color2.style.backgroundColor = color2.value;

// get style of element in css file by using javascript [getComputedStyle(body))]
// !computed Style is read-only ( cannot be changed or updated)
let bodyBackground = getComputedStyle(body).backgroundImage;
document.querySelector("h3").textContent = bodyBackground;

// add an input event listener to the first input element
color1.addEventListener("input", setGradient);

// add an input event listener to the second input element
color2.addEventListener("input", setGradient);

// callback function
function setGradient() {
  body.style.background = `linear-gradient(to right,${color1.value},${color2.value})`;
  document.querySelector("h3").textContent = body.style.background;

  color1.style.backgroundColor = color1.value;
  color2.style.backgroundColor = color2.value;
}

