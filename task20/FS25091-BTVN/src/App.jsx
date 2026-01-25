import { students } from "../data";
import OutStandingStudents from "./components/OutStandingStudents";
import "./App.css";
import Table from "./components/Table";

function App() {
  return (
    <div className="table">
      <OutStandingStudents />
      <h1>Danh sách sinh viên</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Mã sinh viên</th>
            <th>Họ và tên</th>
            <th>Giới tính</th>
            <th>Tuổi</th>
            <th>Chuyên ngành</th>
            <th>Điểm trung bình</th>
            <th>Danh hiệu</th>
          </tr>
        </thead>
        <tbody>
          {students.map((stu) => (
            <Table key={stu.id} student={stu} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
