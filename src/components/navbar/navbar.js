import "./navbar.css";
import avatar from "../../assets/avatar.svg";

const Navbar = ({ sidebarOpen, openSidebar }) => {
  return (
    <nav className="navbar">
      <div className="nav_icon" onClick={() => openSidebar()}>
        <i className="fa fa-bars" aria-hidden="true"></i>
      </div>
      <div className="navbar__left">
        <a href="/#">Produtos</a>
        <a href="/#">Usuarios</a>
        <a href="/#" className="active_link">
          Admin
        </a>
      </div>
      <div className="navbar__right">
        <a href="/#">
          <i className="fa fa-search" />
        </a>
        <a href="/#">
          <i className="fa fa-clock-o" />
        </a>
        <a href="/#">
          <img width={30} height={30} src={avatar} alt="menino lindo" />
        </a>
      </div>
    </nav>
  );
};
export default Navbar;
