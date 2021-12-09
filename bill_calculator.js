function insertTableRow(tableId, cells) {
  const table = document.getElementById(tableId);
  const row = table.insertRow();
  cells.map(function (cell) {
    var c = row.insertCell();
    c.innerHTML = cell;
  });
}
function insertBillItem() {
  const itemPrice = document.getElementById("priceInput").value;
  const itemName = document.getElementById("nameInput").value;
  insertTableRow("billTable", [itemName, itemPrice]);
}

let discountPercentage = 0;
let taxPercentage = 0;

function addDiscountAndTaxes() {
  discountPercentage = document.getElementById("discountInput").value;
  taxPercentage = document.getElementById("taxInput").value;
}

function calculateBill() {
  const billTable = document.getElementById("billTable");
  var subTotal = 0;
  for (const row of billTable.rows) {
    for (const cell of row.cells) {
      value = parseFloat(cell.innerText);
      if (!isNaN(value)) {
        subTotal += value;
      }
    }
  }
  insertTableRow("totalTable", ["Subtotal", subTotal]);
  const taxValue = subTotal * (taxPercentage / 100);
  const discountValue = subTotal * (discountPercentage / 100);
  const calculateDiscountPrice = (price, discount) =>
    (price * (100 - discount)) / 100;
  subTotal = subTotal + taxValue;
  const total = calculateDiscountPrice(subTotal, discountPercentage);
  var billTitle = document.getElementById("billTitle");
  billTitle.innerHTML = "Here is your Bill";
  insertTableRow("totalTable", ["Tax Value", taxValue]);
  insertTableRow("totalTable", ["Discount Value", discountValue]);
  insertTableRow("totalTable", ["Grand Total", total]);
}

