import { useEffect, useState } from "react";

import Post from "../../components/Post";

import api from "../../services/api";

import avatar from "../../assets/avatar.svg";
import examplegame from "../../assets/examplegame.png";

const Search = () => {
  const [post, setPost] = useState<any>([]);

  useEffect(() => {
    api.get("/post").then((res: any) => {
      setPost(res.data.data);
    });
  }, []);

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

  return (
    <div className="h-full flex flex-col justify-center items-center">
      <div className="bg-lighterblack p-8 rounded-md w-4/5 md:w-4/6">
        <div className="border-b border-b-grey flex flex-row space-x-8 mb-3 pb-3">
          <img className="w-32 h-32" src={avatar} />
          <div className="flex flex-col">
            <h1>
              Nome: <span className="text-lightgrey font-thin">Mauricio</span>
            </h1>
            <h2>
              Gamertag: <span className="text-lightgrey font-thin">n0rse</span>
            </h2>
            <h4 className="font-thin mt-1">Curitiba, Brasil</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
