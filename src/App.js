import "./App.css";
import SimpleList from "./components/SimpleList";
import StudentList from "./components/StudentList";
import ImprovedStudentList from "./components/ImprovedStudentList";
import ProjectList from "./components/ProjectList";
import MovieList from "./components/MovieList";


function App() {
  return (
    <div className="App">
      <SimpleList />
      {/* <StudentList /> */}
      {/* <ImprovedStudentList /> */}
      {/* <ProjectList /> */}
      <MovieList />
    </div>
  );
}

export default App;
