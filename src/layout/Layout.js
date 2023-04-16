import { Fragment, useEffect } from "react";
import { createSkillsDot, dotResize } from "../utils.js";
import Background from "./Background.js";
import ContentSidebar from "./ContentSidebar.js";

const Layout = ({
  children,
  noSkin,
  bg,
  containerCls,
  bgImgUrl,
  animationIn,
  animationOut,
}) => {
  useEffect(() => {
    return () => {
      dotResize();
      setTimeout(createSkillsDot, 1000);
    };
  }, []);

  return (
    <Fragment>
      <div className={`page ${!noSkin ? "new-skin" : ""}`}>
        <Background bg={bg} img={bgImgUrl} />
        <div
          className={`${
            containerCls
              ? containerCls
              : "container opened layout-rounded-style minimal-icons-style"
          }`}
          data-animation-in={animationIn ? animationIn : "fadeInLeft"}
          data-animation-out={animationOut ? animationOut : "fadeOutLeft"}
        >
          {children}
        </div>
        <ContentSidebar />
      </div>
    </Fragment>
  );
};
export default Layout;
