import React from "react";

function getAppellation(score) {
  if (score < 3) return "Yếu";
  if (score > 3 && score < 6) return "Trung bình";
  if (score > 6 && score < 8) return "Khá";
  if (score > 8 && score < 9.5) return "Giỏi";
  if (score >= 9.5 && score <= 10) return "Xuất sắc";
  return "Không hợp lệ";
}

function getAppellationStyle(appellation) {
  switch (appellation) {
    case "Yếu":
      return { color: "red", fontWeight: 700 };
    case "Trung bình":
      return { color: "orange", fontWeight: 700 };
    case "Khá":
      return { color: "dodgerblue", fontWeight: 700 };
    case "Giỏi":
      return { color: "green", fontWeight: 700 };
    case "Xuất sắc":
      return { color: "purple", fontWeight: 700 };
    default:
      return { color: "black", fontWeight: 700 };
  }
}

const Table = ({ student }) => {
  const appellation = getAppellation(student.score);
  const appellationStyle = getAppellationStyle(appellation);

  return (
    <tr>
      <td>{student.id}</td>
      <td>{student.fullName}</td>
      <td>{student.gender}</td>
      <td>{student.age}</td>
      <td>{student.major}</td>
      <td>{student.score}</td>
      <td style={appellationStyle}>{appellation}</td>
    </tr>
  );
};

export default Table;
