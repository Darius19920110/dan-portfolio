import ActiveSection from "../activeSection";
const Certification = ({ children, animationIn, animationOut }) => {
  return (
    <div
      className={ActiveSection("certifications", animationIn, animationOut)}
      id="certifications"
    >
      <div className="card-wrap">{children}</div>
    </div>
  );
};
export default Certification;
