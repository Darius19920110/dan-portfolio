import ActiveSection from "../activeSection";
const Badge = ({ children, animationIn, animationOut }) => {
  return (
    <div
      className={ActiveSection("badges", animationIn, animationOut)}
      id="badges"
    >
      <div className="card-wrap">{children}</div>
    </div>
  );
};
export default Badge;
