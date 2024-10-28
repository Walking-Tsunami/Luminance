console.log("test");

// LUMINENCE CALCULATOR
document.getElementById("btn").addEventListener("click", btnPress);

function btnPress() {
  // input
  let r = +document.getElementById("r-input").value;
  let g = +document.getElementById("g-input").value;
  let b = +document.getElementById("b-input").value;
  //   process
  let brightness = Math.sqrt(0.299 * r ** 2 + 0.587 * g ** 2 + 0.114 * b ** 2);
  let msg = `Lumicance = ${brightness}`;

  //   output

  document.getElementById("output").innerHTML = Math.round(brightness);
  console.log(brightness);
}
