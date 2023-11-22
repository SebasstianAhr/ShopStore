import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
const FormLogin = () => {
  const navigate = useNavigate();
  const { handleSubmit, handleChange } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    onSubmit: () => {
      navigate("/");
    },
  });

  return (
    <div className="image-form">
      <div className="cont-main">
        <form className="main-form" onSubmit={handleSubmit}>
          <h1 className="tittle-form">Iniciar sesión</h1>
          <input
            className="input-main-form"
            type="email"
            placeholder="email"
            name="email"
            onChange={handleChange}
          />
          <input
            className="input-main-form input-main-form-button"
            type="password"
            placeholder="password"
            name="password"
            onChange={handleChange}
          />
          <button className="button-form" type="submit">
            iniciar sesión
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormLogin;
