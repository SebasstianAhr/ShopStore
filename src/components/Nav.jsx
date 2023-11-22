import imagenNav from "../../public/imagen-nav.png";

const Nav = () => {
  return (
    <nav className="nav-bar">
      <div className="nav-menu">
        <img
          className="imagen-navbar"
          src={imagenNav}
          alt="imagen de charmander"
        />

        <div className="bar-menu">
          <ul className="cont-menu">
            <li className="acc-menu">Home</li>
            <li className="acc-menu">¿Que es un pokémon?</li>
            <li className="acc-menu">pokémones</li>
            <li className="acc-menu">Perfil</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
