const coupons = [
  {
    name: "c1",
    discount: 30,
  },
  {
    name: "c2",
    discount: 10,
  },
];
const calculateDiscountPrice = (price, discount) =>
  (price * (100 - discount)) / 100;

function calculateInputDiscountPrice() {
  const price = document.getElementById("priceInput").value;
  const discount = document.getElementById("discountInput").value;
  const discountPrice = calculateDiscountPrice(price, discount);
  const message = "Your price with discount is $" + discountPrice;
  document.getElementById("showDiscountPrice").innerText = message;
}

function calculateCouponDiscountPrice() {
  const price = document.getElementById("priceInput").value;
  const couponName = document.getElementById("couponNameInput").value;
  console.log(couponName);
  const isCouponValid = (coupon) => coupon.name === couponName;
  const userCoupon = coupons.find(isCouponValid);
  let message;
  if (!userCoupon) {
    message = "Invalid coupon name!";
  } else {
    const discount = userCoupon.discount;
    const discountPrice = calculateDiscountPrice(price, discount);
    message = "Your price with discount is $" + discountPrice;
  }
  document.getElementById("showDiscountPrice").innerText = message;
}
