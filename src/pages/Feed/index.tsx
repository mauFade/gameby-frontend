import api from "../../services/api";

import Post from "../../components/Post";

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { Coffee, MagnifyingGlass, NotePencil, UserCircle, SignOut } from "phosphor-react";
import avatar from "../../assets/avatar.svg";
import examplegame from "../../assets/examplegame.png";

const Feed = () => {
  const [post, setPost] = useState<any>([]);

  const [search, setSearch] = useState<string>("");

  const navigate = useNavigate();

  useEffect(() => {
    api.get("/post").then((res: any) => {
      setPost(res.data.data);
    });
  }, []);

  const handleLogout = (e: any) => {
    e.preventDefault();

    localStorage.removeItem("@gameby-token");
    navigate("/login");
  };

  const renderPost = (post: any) => {
    return (
      <Post
        key={post.id}
        avatar={post.user.avatar === null ? avatar : post.user.avatar}
        name={post.user.name}
        gamertag={post.user.gamertag}
        city={post.user.city}
        country={post.user.country}
        date={post.createdAt}
        title={post.title}
        game={post.game}
        content={post.content}
        userimg={post.photo === null ? examplegame : post.photo}
      />
    );
  };

  const handleSubmitSearch = (event: any) => {
    event.preventDefault();

    api.get(`/users?gamertag=${search}`).then((res: any) => {
      console.log(res.data.data);
      navigate("/search");
    });
  };

  const handleTypeSearch = (event: any) => {
    event.preventDefault();

    setSearch(event.target.value);
  };

  return (
    <div className="h-full w-full flex justify-center">
      <div className="w-full flex flex-col items-center">
        <header className="h-14 flex flex-row border-b border-b-grey w-full py-1">
          <div className="basis-1/4 border-r border-r-darkerblack flex flex-row justify-center items-center space-x-2">
            <Coffee size={23} weight="bold" onClick={() => navigate("/feed")} className="hover:cursor-pointer" />
            <h1 className="text-lg font-medium">The Feed.</h1>
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
                <button className="bg-grey py-2 px-2 rounded-md hover:bg-lightgrey" type="submit">
                  {<MagnifyingGlass />}
                </button>
              </div>
            </form>
          </div>
          <div className="basis-1/5 flex justify-center items-center space-x-4">
            <button
              className="bg-lighterblack flex flex-row py-2 px-4 rounded-md sm:h5 hover:bg-grey"
              onClick={() => navigate("/profile")}
            >
              {<UserCircle size={23} weight="bold" className="mr-2" />}Seu perfil
            </button>
            <button
              className="bg-lighterblack flex flex-row py-2 px-4 rounded-md sm:h5 hover:bg-grey"
              onClick={handleLogout}
            >
              {<SignOut size={23} weight="bold" className="mr-2" />}Fazer Logout
            </button>
          </div>

          <div className="basis-1/5 flex justify-center items-center">
            <button
              className="bg-lighterblack flex flex-row py-2 px-4 rounded-md sm:h5 hover:bg-grey"
              onClick={() => navigate("/post")}
            >
              {<NotePencil size={23} weight="bold" className="mr-2" />}Fazer um post
            </button>
          </div>
        </header>
        {post.map(renderPost)}
      </div>
    </div>
  );
};

export default Feed;
