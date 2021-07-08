// 2
const students = ["Marc", "Lucy", "Anna"];

function StudentList() {

  return (
    <div className="list">
      <h2>StudentList</h2>
      { students.map((name) => <p>{name}</p> ) }
    </div>
  );
}

export default StudentList;