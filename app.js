const billAmt = document.querySelector(".billAmt");
const cashAmt = document.querySelector(".cashAmt");

const billDiv = document.querySelector(".bill-div");
const cashDiv = document.querySelector(".cash-div");

const nxtBtn = document.querySelector(".nextBtn");
const calcBtn = document.querySelector(".calcBtn");

const returnDiv = document.querySelector(".return");

const noOfNotes = document.querySelector(".noOfNotes");
const amount = document.querySelector(".amount");

const table = document.querySelector(".table");

const arrNotes = [1, 5, 10, 20, 100, 500, 2000];

hideReturn();

function nxtOnClick() {
  if (Number(billAmt.value) > 0) {
    billDiv.style.display = "none";
    cashDiv.style.display = "block";
  } else {
    showReturn("Enter A Valid Bill Amount");
    billDiv.style.display = "none";
    table.style.display = "none";
    cashDiv.style.display = "none";
  }
}

function processCash(bill, cash) {
  let change = cash - bill;

  returnDiv.innerHTML = `cash to return ${change}`;

  for (let i = 0; i < arrNotes.length; i++) {
    change = compare(change, arrNotes[i], i);
  }
}

function compare(finalChange, arrNote, i) {
  let notesPosition = noOfNotes[i];
  let amountPosition = amount[i];

  if (finalChange >= arrNote) {
    let notes = Math.floor(finalChange / arrNote);
    finalChange = finalChange - notes * arrNote;

    notesPosition.innerHTML = `${notes}`;
    notesPosition.style.fontWeight = "bold";
    amountPosition.style.fontWeight = "bold";
  }
}

function calcOnClick() {
  let bill = Number(billAmt.value);
  let cash = Number(cashAmt.value);
  processCash(bill, cash);
}

function showReturn(text) {
  returnDiv.style.display = "block";
  returnDiv.innerHTML = text;
  table.style.display = "none";
}

function hideReturn() {
  returnDiv.style.display = "none";
  table.style.display = "none";
  cashDiv.style.display = "none";
}

calcBtn.addEventListener("click", calcOnClick);
