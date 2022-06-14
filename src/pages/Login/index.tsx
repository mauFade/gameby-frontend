import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

import api from "../../services/api";
import { login } from "../../services/authentication";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navigate = useNavigate();

  const loginData = async (event: any) => {
    event.preventDefault();

    await api
      .post("/login", {
        email,
        password,
      })
      .then((res) => {
        login(res.data.data.token);
        navigate("/feed");
      });
  };

  const handleChangeEmail = (event: any) => {
    event.preventDefault();

    setEmail(event.target.value);
  };

  const handleChangePassword = (event: any) => {
    event.preventDefault();

    setPassword(event.target.value);
  };

  return (
    <>
      <div className="h-full flex flex-col items-center justify-center space-y-7 p-4">
        <h1 className="font-bold text-3xl">Acesse sua conta</h1>
        <form className="flex flex-col items-center justify-center space-y-6 w-full" onSubmit={loginData}>
          <input
            name="email"
            value={email}
            type="email"
            placeholder="E-mail"
            className="w-full bg-transparent p-4 border-b border-b-lighterblack focus:outline-none focus:border-b-lightgrey text-center md:w-1/3 hover:bg-lighterblack"
            onChange={handleChangeEmail}
          />
          <input
            name="password"
            value={password}
            type="password"
            placeholder="Senha"
            className="w-full bg-transparent p-4 border-b border-b-lighterblack focus:outline-none focus:border-b-lightgrey text-center md:w-1/3 hover:bg-lighterblack"
            onChange={handleChangePassword}
          />
          <button
            type="submit"
            className="bg-lightgrey font-medium rounded-md py-4 px-8 hover:bg-grey text-darkerblack"
          >
            Entrar
          </button>
        </form>
        <div>
          <span className="text-s text-platinum text-center">
            Ainda não tem uma conta?{" "}
            <Link to="/register" className="text-lightgrey hover:text-grey">
              Registre-se
            </Link>
          </span>
        </div>
        <footer className="text-xs text-platinum text-center">
          Feito com 💜 por{" "}
          <a
            className="text-lightgrey hover:text-grey"
            href="https://www.linkedin.com/in/mauricio-cardoso-2283541a4/"
            target="_blank"
          >
            Mauricio Cardoso
          </a>
        </footer>
      </div>
    </>
  );
};

export default Login;
