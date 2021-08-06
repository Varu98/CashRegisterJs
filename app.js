const billAmt = document.querySelector("#bill-Amt");
const cashAmt = document.querySelector("#cash-Amt");

const cashAmtDiv = document.querySelector(".cashAmt");
const errorDiv = document.querySelector(".errorDiv");

const btn = document.querySelector(".btn");
const form = document.querySelector("#form");
const table = document.querySelectorAll(".table");

const notesArray = [2000, 500, 100, 20, 10, 5, 1];

let sum;

form.addEventListener("submit", function onSubmit(e) {
  e.preventDefault();

  if (Number(billAmt.value) < 0) {
    showError("Enter a valid bill amount.");
  }
  if (Number(cashAmt.value < billAmt.value)) {
    showError(
      "If you can not pay the bill, you may do the dishes and your debt will  be paid"
    );
  } else {
    sum = Number(billAmt.value - cashAmt.value);
    calculateChange(sum);
  }
});

function calculateChange(total) {
  for (let i = 0; i < notesArray.length; i++) {
    const notes = Math.trunc(total / notesArray[i]);
    Math.trunc((total %= notesArray[i]));
    table[i].innerHTML = `${notes}`;
    console.log(total, notes);
  }
}

function showError(message) {
  errorDiv.style.display = "block";
  errorDiv.innerHTML = message;
}

function hideError() {
  errorDiv.style.display = "none";
}
