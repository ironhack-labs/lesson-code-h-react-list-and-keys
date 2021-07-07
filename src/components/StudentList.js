// 2
function StudentList() {
  const students = ["Marc", "Lucy", "Anna"];

  return (
    <div className="list">
      <h2>StudentList</h2>
      { students.map((name) => <p>{name}</p> ) }
    </div>
  );
}

export default StudentList;
