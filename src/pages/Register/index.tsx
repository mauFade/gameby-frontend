import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

import api from "../../services/api";

import { login } from "../../services/authentication";

const Register = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [gamertag, setGamertag] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [cellphone, setCellphone] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [avatar, setAvatar] = useState<string>("");

  const navigate = useNavigate();

  const handleChangeName = (event: any) => {
    event.preventDefault();

    setName(event.target.value);
  };

  const handleChangeEmail = (event: any) => {
    event.preventDefault();

    setEmail(event.target.value);
  };

  const handleChangeGamertag = (event: any) => {
    event.preventDefault();

    setGamertag(event.target.value);
  };

  const handleChangePassword = (event: any) => {
    event.preventDefault();

    setPassword(event.target.value);
  };

  const handleChangeCellphone = (event: any) => {
    event.preventDefault();

    setCellphone(event.target.value);
  };

  const handleChangeCity = (event: any) => {
    event.preventDefault();

    setCity(event.target.value);
  };

  const handleChangeCountry = (event: any) => {
    event.preventDefault();

    setCountry(event.target.value);
  };

  const handleChangeAvatar = (event: any) => {
    event.preventDefault();

    setAvatar(event.target.value);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    await api
      .post("/users", {
        name,
        email,
        gamertag,
        password,
        cellphone,
        city,
        country,
      })
      .then((res: any) => {
        login(res.data.data.token);

        navigate("/feed");
      });
  };

  return (
    <div className="h-full flex flex-col justify-center items-center space-y-8">
      <h1 className="font-semibold mb-4 text-lg">Crie seu usuário :)</h1>
      <form className="flex flex-col space-y-8 justify-center items-center md:w-3/4" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:w-full">
          <input
            name="name"
            value={name}
            onChange={handleChangeName}
            placeholder="Nome"
            className="p-4 outline-none hover:bg-lighterblack border-b border-b-lighterblack focus:border-grey text-lightgrey bg-transparent text-center"
          />
          <input
            name="email"
            value={email}
            onChange={handleChangeEmail}
            placeholder="E-mail"
            className="p-4 outline-none hover:bg-lighterblack border-b border-b-lighterblack focus:border-grey text-lightgrey bg-transparent text-center"
          />
          <input
            name="gamertag"
            value={gamertag}
            onChange={handleChangeGamertag}
            placeholder="Gamertag"
            className="p-4 outline-none hover:bg-lighterblack border-b border-b-lighterblack focus:border-grey text-lightgrey bg-transparent text-center"
          />
          <input
            name="cellphone"
            value={cellphone}
            onChange={handleChangeCellphone}
            placeholder="Celular (XX XXXXXXXXX)"
            className="p-4 outline-none hover:bg-lighterblack border-b border-b-lighterblack focus:border-grey text-lightgrey bg-transparent text-center"
          />
          <input
            name="password"
            type="password"
            value={password}
            onChange={handleChangePassword}
            placeholder="Senha"
            className="p-4 outline-none hover:bg-lighterblack border-b border-b-lighterblack focus:border-grey text-lightgrey bg-transparent text-center"
          />
          <input
            name="city"
            value={city}
            onChange={handleChangeCity}
            placeholder="Cidade"
            className="p-4 outline-none hover:bg-lighterblack border-b border-b-lighterblack focus:border-grey text-lightgrey bg-transparent text-center"
          />
          <input
            name="country"
            value={country}
            onChange={handleChangeCountry}
            placeholder="País"
            className="p-4 outline-none hover:bg-lighterblack border-b border-b-lighterblack focus:border-grey text-lightgrey bg-transparent text-center"
          />
          <input
            name="avatar"
            type="file"
            value={avatar}
            onChange={handleChangeAvatar}
            className="p-4 outline-none hover:bg-lighterblack border-b border-b-lighterblack focus:border-grey text-lightgrey bg-transparent text-center"
          />
        </div>

        <button type="submit" className="bg-lightgrey font-medium rounded-md py-4 px-8 hover:bg-grey text-darkerblack">
          Registrar
        </button>
      </form>

      <div className="text-s text-platinum text-center mt-3">
        Já tem uma conta?{" "}
        <Link to="/login" className="text-lightgrey hover:text-silver">
          Acesse
        </Link>
      </div>
    </div>
  );
};

export default Register;
