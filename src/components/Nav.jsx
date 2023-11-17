import imagenNav from "../../public/imagen-nav.png";
const Nav = () => {
  return (
    <nav className="nav-bar">
      <div className="nav-menu">
        <a href="#">
          <img
            className="imagen-navbar"
            src={imagenNav}
            alt="imagen de charmander"
          />
        </a>
        <div className="bar-menu">
          <ul className="cont-menu">
            <li className="acc-menu">
              <a href="#">Home</a>
            </li>
            <li className="acc-menu">
              <a href="#">Perfil</a>
            </li>
            <li className="acc-menu">
              <a href="#">Usuarios</a>
            </li>
            <li className="acc-menu">
              <a href="#">Productos</a>
            </li>
            <li className="acc-menu">
              <a href="#">Disabled</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
