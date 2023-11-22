import LoggedLayout from "../layouts/LoggedLayout";
const HomePage = () => {
  return (
    <LoggedLayout>
      <div className="imagen-home">
        <div className="main-home">
          <div className="content-home">
            <div className="subtitulo-home">
              <h3>Welcome</h3>
            </div>
            <div className="titulo-home">
              <h1>
                Encuentra
                <br />
                tu pokémon
                <br />
                <span className="favorito-home">favorito</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </LoggedLayout>
  );
};

export default HomePage;
