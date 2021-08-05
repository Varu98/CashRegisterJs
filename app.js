const billAmt = document.querySelector("#bill-Amt");
const cashAmt = document.querySelector("#cash-Amt");

const cashAmtDiv = document.querySelector(".cashAmt");
const errorDiv = document.querySelector(".errorDiv");

const btn = document.querySelector(".btn");
const form = document.querySelector("#form");

let sum;

form.addEventListener("submit", function onSubmit(e) {
  e.preventDefault();
  hideError();
  if (billAmt.value < 0) {
    showError("Enter A Valid Amount");
  }
  if (cashAmt.value < billAmt.value) {
    showError(
      `Ask The Customer To Pay  ${billAmt.value - cashAmt.value} More `
    );
  } else {
    sum = cashAmt.value - billAmt.value;
    console.log(sum);
  }
});

function showError(message) {
  errorDiv.style.display = "block";
  errorDiv.innerHTML = message;
}

function hideError() {
  errorDiv.style.display = "none";
}
