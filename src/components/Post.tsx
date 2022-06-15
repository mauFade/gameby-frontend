interface IPropsPost {
  avatar?: string;
  name: string;
  gamertag: string;
  city: string;
  country: string;
  date: string;
  title: string;
  game?: string;
  content: string;
  userimg?: string;
}

const Post = (Props: IPropsPost) => {
  return (
    <div className="bg-lighterblack w-96 md:w-1/3 flex flex-col items-center py-8 mt-7 rounded-xl">
      <div className="flex flex-row border-b border-b-grey w-4/5 space-x-3 pl-3 pb-3 mb-3">
        <div>
          <img src={Props.avatar} alt="avatar" />
        </div>
        <div className="flex flex-col text-xs text-lightgrey">
          <h1>{Props.name}</h1>
          <h2>{Props.gamertag}</h2>
          <h4>
            {Props.city}, {Props.country}, {Props.date}
          </h4>
        </div>
      </div>
      <div className="flex flex-col items-start text-lightgrey w-4/5 mb-4">
        <h2 className="font-semibold">{Props.title}</h2>
        <h3 className="font-semibold text-silver mb-2">{Props.game}</h3>
        <h4 className="text-sm">{Props.content}</h4>
      </div>
      <div className="w-full">
        <img src={Props.userimg} alt="game" className="w-full" />
      </div>
    </div>
  );
};

export default Post;
