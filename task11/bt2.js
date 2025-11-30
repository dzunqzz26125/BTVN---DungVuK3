/**
 * *Yêu cầu xây dựng ba hàm:

* *addToCart(cart, product)

* *Nếu sản phẩm chưa tồn tại trong cart, thêm mới với quantity = 1.
* *Nếu đã tồn tại, tăng quantity lên 1.
* *removeFromCart(cart, id)

* *Nếu quantity > 1, giảm quantity.
* *Nếu quantity = 1, xoá sản phẩm khỏi giỏ hàng.
* *getTotal(cart)

* *Tính tổng tiền (price * quantity).
* *Không sử dụng find hoặc filter. Chỉ sử dụng vòng lặp cơ bản và các thao tác mảng như push, splice.
 */

const cart = [
  { id: 1, title: "Pro A", price: 600, quantity: 1 },
  { id: 2, title: "Pro B", price: 200, quantity: 1 },
];

function addToCart(cart, product) {
  let foundIndex = -1;

  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id === product.id) {
      foundIndex = i;
      break;
    }
  }

  if (foundIndex === -1) {
    const newItem = {
      id: product.id,
      title: product.title,
      price: product.price,
      quantity: 1,
    };
    cart.push(newItem);
    console.log("Đã thêm mới:", newItem);
  } else {
    cart[foundIndex].quantity++;
    console.log("Đã tăng quantity cho:", cart[foundIndex]);
  }
}

function removeFromCart(cart, id) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id === id) {
      if (cart[i].quantity > 1) {
        cart[i].quantity--;
      } else {
        cart.splice(i, 1);
      }
      break;
    }
  }
}

function getTotal(cart) {
  let total = 0;

  for (let i = 0; i < cart.length; i++) {
    total += cart[i].price * cart[i].quantity;
  }

  return total;
}

console.log("Giỏ ban đầu:", cart);

const product = { id: 2, title: "Pro B", price: 200 };
const product2 = { id: 3, title: "Pro C", price: 300 };

addToCart(cart, product);
addToCart(cart, product2);
addToCart(cart, product2);

console.log("Giỏ sau khi add:", cart);
console.log("Tổng tiền:", getTotal(cart));

removeFromCart(cart, 3);
removeFromCart(cart, 1);

console.log("Giỏ sau khi remove:", cart);
console.log("Tổng tiền sau remove:", getTotal(cart));

// log vẫn ra đúng giá nhưng bị xếp chồng thêm hàm remove nên
// dòng log ở cart sau khi thêm không hiển thị pro đã thêm
