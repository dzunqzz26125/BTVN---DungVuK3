/**
 * Bài 1 — thống kê & tổng hợp
Cho mảng log:

const logs = [
  { user: "A", action: "login" },
  { user: "B", action: "login" },
  { user: "A", action: "purchase" },
  { user: "A", action: "logout" },
  { user: "B", action: "purchase" },
  { user: "C", action: "login" },
];
Yêu cầu:

Dùng forEach để đếm xem mỗi user thực hiện bao nhiêu hành động.
Dùng forEach để tạo object dạng:
{
  A: ["login", "purchase", "logout"],
  B: ["login", "purchase"],
  C: ["login"]
}
 */

const logs = [
  { user: "A", action: "login" },
  { user: "B", action: "login" },
  { user: "A", action: "purchase" },
  { user: "A", action: "logout" },
  { user: "B", action: "purchase" },
  { user: "C", action: "login" },
];

let userCount = {};
const yc1 = logs.forEach((log) => {
  if (!userCount[log.user]) {
    userCount[log.user] = 0;
  }
  userCount[log.user]++;
});
console.log(userCount);

let userDetail = {};
const yc2 = logs.forEach((log) => {
  if (!userDetail[log.user]) {
    userDetail[log.user] = [];
  }
  userDetail[log.user].push(log.action);
});
console.log(userDetail);
