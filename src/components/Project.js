import ActiveSection from "../activeSection";

const Project = ({ children, animationIn, animationOut }) => {
  return (
    <div
      className={ActiveSection("projects", animationIn, animationOut)}
      id="projects"
    >
      <div className="card-wrap">{children}</div>
    </div>
  );
};
export default Project;
