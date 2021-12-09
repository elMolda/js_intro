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

let discount_percentage = 0;
let tax_percentage = 0;

function writeDiscount() {
  const discountValue = document.getElementById("discountInput").value;
  discount_percentage = discountValue;
}

function writeTax() {
  const taxValue = document.getElementById("taxInput").value;
  tax_percentage = taxValue;
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
  const taxValue = subTotal * (tax_percentage / 100);
  const discountValue = subTotal * (discount_percentage / 100);
  const calculateDiscountPrice = (price, discount) =>
    (price * (100 - discount)) / 100;
  subTotal = subTotal + taxValue;
  const total = calculateDiscountPrice(subTotal, discount_percentage);
  var billTitle = document.getElementById("billTitle");
  billTitle.innerHTML = "Bill";
  insertTableRow("totalTable", ["Tax Value", taxValue]);
  insertTableRow("totalTable", ["Discount Value", discountValue]);
  insertTableRow("totalTable", ["Grand Total", total]);
}

