import ActiveSection from "../activeSection";
const Assignment = ({ children, animationIn, animationOut }) => {
  return (
    <div
      className={ActiveSection("assignments", animationIn, animationOut)}
      id="assignments"
    >
      <div className="card-wrap">{children}</div>
    </div>
  );
};
export default Assignment;
