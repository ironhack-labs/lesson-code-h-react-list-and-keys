// 4
const projects = [
  { _id: "127fae", name: "EatBCN", techStack: "Express, Node, React" },
  { _id: "985afw", name: "TravelLite", techStack: "React, Express, Redux" },
  { _id: "347eef", name: "IronClub", techStack: "Express, HBS, Mongo" },
  { _id: "90af21", name: "ChatApp", techStack: "React, Express, SocketIO" },
];

function ProjectList() {
  return (
    <div className="list">
      <h2>ProjectList</h2>
      {projects.map((project) => {
        return (
          <div key={project._id}>
            <h3>{project.name}</h3>
            <p>Tech Stack: {project.techStack}</p>
          </div>
        )
      })}
    </div>
  );
}

export default ProjectList;
