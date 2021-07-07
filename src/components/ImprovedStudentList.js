// 3
function ImprovedStudentList() {
  const students = ["Marc", "Lucy", "Anna"];

  return (
    <div className="list">
      <h2>ImprovedStudentList</h2>
      { students.map((name, i) => <p key={i}> {name} </p> ) }
    </div>
  );
}

export default ImprovedStudentList;
