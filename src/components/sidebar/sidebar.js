import "./sidebar.css";
import logo from "../../assets/logo.jpg";

const Sidebar = ({ sidebarOpen, openSidebar, closeSidebar }) => {
  return (
    <div className={sidebarOpen ? "sidebar-responsive" : ""} id="sidebar">
      <div className="sidebar__title">
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
        <div className="sidebar__link">
          <i className="fa fa-building"></i>
          <a href="/#">Lojas</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-archive"></i>
          <a href="/#">Produtos</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-bars"></i>
          <a href="/#">Categorias</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-cutlery"></i>
          <a href="/#">Pedidos</a>
        </div>
        <h2>PESSOAS</h2>
        <div className="sidebar__link">
          <i className="fa fa-male"></i>
          <a href="/#">Administradores</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-user-circle"></i>
          <a href="/#">Usuarios</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-money"></i>
          <a href="/#">Pagamentos e custos</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-tasks" />
          <a href="/#">A plataforma</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-file-text"></i>
          <a href="/#">Politica de privacidade</a>
        </div>
        <div className="sidebar__logout">
          <i class="fa fa-power-off" aria-hidden="true"></i>
          <a href="/#">Sair</a>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
