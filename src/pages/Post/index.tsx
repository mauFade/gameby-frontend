import { MagnifyingGlass, UserCircle, SkipBack, Coffee } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../../services/api";

const Post = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [game, setGame] = useState<string>("");

  const [search, setSearch] = useState<string>("");

  const handleTitle = (event: any) => {
    event.preventDefault();

    setTitle(event.target.value);
  };

  const handleDescription = (event: any) => {
    event.preventDefault();

    setDescription(event.target.value);
  };

  const handleGame = (event: any) => {
    event.preventDefault();

    setGame(event.target.value);
  };

  const handleSubmitForm = (event: any) => {
    event.preventDefault();

    api
      .post("/post", {
        title,
        content: description,
        game,
      })
      .then(() => {
        navigate("/feed");
      });
  };

  const handleSubmitSearch = (event: any) => {
    event.preventDefault();

    api.get(`/users?gamertag=${search}`).then((res: any) => {
      navigate("/search");
    });
  };

  const handleTypeSearch = (event: any) => {
    event.preventDefault();

    setSearch(event.target.value);
  };

  return (
    <>
      <header className="h-14 flex flex-row border-b border-b-grey w-full py-1">
        <div className="basis-1/4 border-r border-r-darkerblack flex flex-row justify-center items-center space-x-2">
          <Coffee size={23} weight="bold" onClick={() => navigate("/feed")} className="hover:cursor-pointer" />
          <h1 className="text-lg font-medium">Write a Post.</h1>
        </div>
        <div className="basis-7/20 flex items-center justify-center">
          <form className="w-full flex justify-center" onSubmit={handleSubmitSearch}>
            <div className="bg-lighterblack py-1 w-4/5 rounded-md flex items-center justify-center h-11">
              <input
                value={search}
                onChange={handleTypeSearch}
                placeholder="Buscar um usuário"
                className="bg-transparent outline-none border-none w-4/5 text-center"
              />
              <button className="bg-grey py-2 px-2 rounded-md" type="submit">
                {<MagnifyingGlass />}
              </button>
            </div>
          </form>
        </div>
        <div className="basis-1/5 flex justify-center items-center space-x-4">
          <button
            className="bg-lighterblack flex flex-row py-2 px-4 rounded-md sm:h5"
            onClick={() => navigate("/profile")}
          >
            {<UserCircle size={23} weight="bold" className="mr-2" />}Seu perfil
          </button>
          <button
            className="bg-lighterblack flex flex-row py-2 px-4 rounded-md sm:h5"
            onClick={() => navigate("/feed")}
          >
            {<SkipBack size={23} weight="bold" className="mr-2" />}Voltar para o feed
          </button>
        </div>
      </header>
      <div className="flex items-center justify-center h-full">
        <form className="flex flex-col space-y-4 md:w-2/5 w-4/5" onSubmit={handleSubmitForm}>
          <input
            value={title}
            onChange={handleTitle}
            type="text"
            className="p-4 outline-none hover:bg-lighterblack border-b border-b-lighterblack focus:border-grey text-lightgrey bg-transparent text-center"
            placeholder="Título"
          />
          <input
            value={description}
            onChange={handleDescription}
            type="text"
            className="p-4 outline-none hover:bg-lighterblack border-b border-b-lighterblack focus:border-grey text-lightgrey bg-transparent text-center"
            placeholder="O que está acontecendo?"
          />
          <input
            value={game}
            onChange={handleGame}
            type="text"
            className="p-4 outline-none hover:bg-lighterblack border-b border-b-lighterblack focus:border-grey text-lightgrey bg-transparent text-center"
            placeholder="De qual jogo se trata?"
          />

          <button
            type="submit"
            className="bg-lightgrey font-medium rounded-md py-4 px-8 hover:bg-grey text-darkerblack"
          >
            Enviar
          </button>
        </form>
      </div>
    </>
  );
};

export default Post;
