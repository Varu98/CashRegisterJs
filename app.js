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

  const numBillAmt = Number(billAmt.value);
  const numCashAmt = Number(cashAmt.value);

  if (numBillAmt <= 0) {
    showError("Enter a valid bill amount.");
  }
  if (numBillAmt > numCashAmt) {
    showError(
      "If you can not pay the bill, you may do the dishes and your debt will  be paid"
    );
  } else {
    sum = numBillAmt - numCashAmt;
    sum = -sum;
    calculateChange(sum);
  }
});

function calculateChange(total) {
  for (let i = 0; i < notesArray.length; i++) {
    const notes = Math.trunc(total / notesArray[i]);
    total = total % notesArray[i];

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
