const products = [
  { id: 1, name: "Áo thun", price: 120000 },
  { id: 2, name: "Quần jean", price: 350000 },
  { id: 3, name: "Giày sneaker", price: 650000 },
  { id: 4, name: "Túi xách", price: 420000 },
];

const cart = {};
const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);
const vnd = (n) => n.toLocaleString("vi-VN") + " đ";
const qty = (v) => Math.max(1, parseInt(v, 10) || 1);

function renderProduct() {
  const tb = $("#product_table tbody");
  tb.innerHTML = products
    .map(
      (p, i) =>
        `<tr>
      <td>${i + 1}</td>
      <td>${p.name}</td>
      <td>${vnd(p.price)}</td>
      <td>
        <div class="add-to-cart-container">
          <input class="quantity-input" type="number" min="1" value="1" data-qty="${
            p.id
          }">
          <button class="add-to-cart" data-act="add" data-id="${
            p.id
          }">Thêm</button>
        </div>
      </td>
    </tr>`
    )
    .join("");
}
renderProduct();

function renderCart() {
  const box = $("#cart_data");
  const items = Object.values(cart);

  if (!items.length) return (box.innerHTML = "");

  const total = items.reduce((s, it) => s + it.price * it.qty, 0);

  box.innerHTML = `
    <table class="cart-table" width="100%">
      <thead>
        <tr>
          <th>STT</th><th>Tên</th><th>Giá</th><th>Số lượng</th><th>Thành tiền</th><th>Xóa</th>
        </tr>
      </thead>
      <tbody>
        ${items
          .map(
            (it, i) => `
          <tr>
            <td>${i + 1}</td>
            <td>${it.name}</td>
            <td>${vnd(it.price)}</td>
            <td>
              <button class="quantity-btn" data-act="dec" data-id="${
                it.id
              }">-</button>
              <input class="quantity-input" style="margin:0 8px;width:70px"
                     type="number" min="1" value="${
                       it.qty
                     }" data-act="set" data-id="${it.id}">
              <button class="quantity-btn" data-act="inc" data-id="${
                it.id
              }">+</button>
            </td>
            <td>${vnd(it.price * it.qty)}</td>
            <td><button class="remove-from-cart" data-act="rm" data-id="${
              it.id
            }">Xóa</button></td>
          </tr>`
          )
          .join("")}
      </tbody>
    </table>
    <div class="cart-total">Tổng tiền: ${vnd(total)}</div>
  `;
}

function add(id, q) {
  const p = products.find((x) => x.id === id);
  if (!p) return;
  cart[id] ??= { ...p, qty: 0 };
  cart[id].qty += q;
}
function inc(id) {
  if (cart[id]) cart[id].qty++;
}
function dec(id) {
  if (!cart[id]) return;
  if (--cart[id].qty <= 0) delete cart[id];
}
function setQty(id, q) {
  if (cart[id]) cart[id].qty = qty(q);
}
function rm(id) {
  delete cart[id];
}

document.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-act]");
  if (!btn) return;

  const act = btn.dataset.act;
  const id = Number(btn.dataset.id);

  if (act === "add") add(id, qty($(`[data-qty="${id}"]`)?.value));
  if (act === "inc") inc(id);
  if (act === "dec") dec(id);
  if (act === "rm") rm(id);

  renderCart();
});

document.addEventListener("input", (e) => {
  const ip = e.target.closest('input[data-act="set"]');
  if (!ip) return;
  setQty(Number(ip.dataset.id), ip.value);
  renderCart();
});

renderProducts();
renderCart();
