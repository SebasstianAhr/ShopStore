import "./index.css";
import { BrowserRouter, useRoutes } from "react-router-dom";
import FormLogin from "./components/FormLogin.jsx";
import HomePage from "./pages/HomePage.jsx";
import QueEsUnPokemon from "./pages/QueEsUnPokemon.jsx";
import Pokemones from "./pages/Pokemones.jsx";

const App = () => {
  const AppRoutes = () => {
    const routes = useRoutes([
      { path: "/", element: <HomePage /> },
      { path: "/login", element: <FormLogin /> },
      { path: "/queesunpokemon", element: <QueEsUnPokemon /> },
      { path: "/pokemones", element: <Pokemones /> },
    ]);

    return routes;
  };

  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
