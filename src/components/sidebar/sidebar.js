import "./sidebar.css";
import logo from "../../assets/logo.jpg";

const Sidebar = ({ sidebarOpen, openSidebar, closeSidebar }) => {
  return (
    <div className={sidebarOpen ? "sidebar-responsive" : ""} id="sidebar">
      <div className="sidebar__tutle">
        <div className="sidebar__img">
          <img src={logo} alt="logo" />
          <h1>Wallyzada Solução</h1>
        </div>
        <i
          onClick={() => closeSidebar()}
          className="fa fa-times"
          id="sidebarIcon"
          aria-hidden="true"
        ></i>
      </div>
      <div className="sidebar__menu">
        <div className="sidebar__link active_menu_link">
          <i className="fa fa-minus-square"></i>
          <a href="/#">Home</a>
        </div>
        <h2>Admin</h2>
        <div className="sidebar__link">
          <i className="fa fa-tachometer"></i>
          <a href="/#">Area administrativa</a>
        </div>
      </div>
    </div>
  );
};
