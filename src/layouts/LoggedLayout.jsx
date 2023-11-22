import Nav from "../components/Nav.jsx";

const LoggedLayout = ({ children }) => {
  return (
    <div>
      <Nav />
      {children}
    </div>
  );
};

export default LoggedLayout;
