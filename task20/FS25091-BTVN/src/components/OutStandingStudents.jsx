import React from "react";
import { students } from "../../data";

const OutStandingStudents = () => {
  const maxScore = Math.max(...students.map((s) => s.score));

  const topStudent = students.filter((s) => s.score === maxScore);
  const name = topStudent.map((s) => s.fullName).join(", ");
  return (
    <div>
      <p
        id="result"
        style={{ fontWeight: "bold", marginBottom: "10px", color: "gray" }}
      >
        Sinh viên tiêu biểu là: {name}
      </p>
    </div>
  );
};

export default OutStandingStudents;
