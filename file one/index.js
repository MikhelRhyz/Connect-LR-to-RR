var billAmount = document.querySelector("#billAmount");
var calcTipBtn = document.querySelector("#calculateTipBtn");
var tipPercentage = document.querySelector("#tipPercentage");
var tipAmount = document.querySelector("#tipAmount");
var total = document.querySelector("#totalAmount");

calcTipBtn.addEventListener("click", () => {
  var bill = parseFloat(billAmount.value);
  var tipPercent = parseFloat(tipPercentage.value);

  if (isNaN(bill) || isNaN(tipPercent) || bill < 0 || tip < 0) {
    alert("Please enter valid numbers for bill amount and tip percentage.");
    return;
  }

  var tip = calcTip(bill, tipPercent);
  var totalAmount = calcTotalAmount(bill, tip);
  tipAmount.textContent = "Tip Amount: $" + tip.toFixed(2);
  total.textContent = "Total Amount: $" + totalAmount.toFixed(2);
});

function calcTip(bill, tip) {
  var num1 = parseFloat(bill);
  var num2 = parseFloat(tip) / 100;
  var result = Math.round(num1 * num2 * 100) / 100;
  return result;
}

function calcTotalAmount(bill, tip) {
  var num1 = parseFloat(bill);
  var num2 = parseFloat(tip);
  return num1 + num2;
}
