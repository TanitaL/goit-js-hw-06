const input = document.querySelector("#validation-input");
const symbolLength = document.querySelector('input[data-length="6"]');
console.log(symbolLength.dataset.length)

input.addEventListener('blur', newInput);

function newInput(event) {
const inputNew = event.currentTarget;
const inputValue = event.currentTarget.value;
    if (inputValue.length === Number(symbolLength.dataset.length)) {
        inputNew.classList.remove("invalid");
        inputNew.classList.add("valid");
    }
    else {
    inputNew.classList.remove("valid");
    inputNew.classList.add("invalid");
  }
}