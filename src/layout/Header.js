import { useContext, useEffect } from "react";
import Context from "../context/context";
import { useRouter } from "next/router";
import axios from "axios";

const headerMenus = [
  { title: "About", link: "about", icon: "icon fa fa-user-o" },
  { title: "Resume", link: "resume", icon: "icon fa fa-list-alt" },
  { title: "Projects", link: "projects", icon: "icon fa fa-object-ungroup" },
  {
    title: "Assignments",
    link: "assignments",
    icon: "icon fa fa-pencil-square-o",
  },
  {
    title: "Certs",
    link: "certifications",
    icon: "icon fa fa-file-text-o",
  },
  {
    title: "Badges",
    link: "badges",
    icon: "icon fa fa-certificate",
  },
  { title: "Contact", link: "contacts", icon: "icon fa fa-envelope-o" },
  { title: "Exit", link: "exit", icon: "icon fa fa-sign-out" },
];

const Header = () => {
  const router = useRouter();
  const { changeNav, nav } = useContext(Context);
  useEffect(() => {
    const sctionScroll = () => {};
    window.addEventListener("scroll", sctionScroll);
  }, []);

  const navHandler = async (link) => {
    if (link === "exit") {
      const user = await axios.get("/api/auth/logout");
      router.push("/");
    } else {
      changeNav(link);
    }
  };

  return (
    <header className="header custom">
      {/* <div className="profile">
        <div className="title">Daniel Meszaros</div>
        <div className="subtitle subtitle-typed">Data Analyst</div>
      </div> */}
      {/* menu */}
      <div className="top-menu menu-minimal">
        <ul>
          {headerMenus.map((menu, i) => (
            <li className={`${nav === menu.link ? "active" : ""}`} key={i}>
              <a href={`#${menu.link}`} onClick={() => navHandler(menu.link)}>
                <span className={menu.icon} />
                <span className="link">{menu.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};
export default Header;
