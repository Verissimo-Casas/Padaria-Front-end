let FormArry = [];

// function getSelectsValues () {
//   document.getElementById("delivery-place").onchange ('local', event => {this.value})
// }
// getSelectsValues();

// document.getElementById("delivery-place").onchange = function () {
//   let local = this.value

//   console.log(local);
// }

// console.log(local);

let checkboxs = document.querySelectorAll(".checkbox");

for (let checkbox of checkboxs) {
  checkbox.addEventListener('click', function () {
    if (this.checked == true) {
      FormArry.push(this.id);
    } else {
      FormArry = FormArry.filter(e => e != this.id)
    }
  })
}


console.log(checkboxs);

document.querySelector("form").addEventListener("submit", event => {
  console.log("ta funcionando");

  event.preventDefault()
})