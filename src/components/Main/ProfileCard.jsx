import img from "../../resources/profile.jpg";

function ProfileCardView(props) {
  const { currentUser } = props;

  const renderMenuItem = (labelText, icon) => {
    return (
      <a
        className="hover:bg-gray-300 bg-gray-200 border-t-2 p-3 w-full text-xl text-left text-gray-600 "
        href=""
      >
        <i
          className={`fa ${icon} text-gray-600 text-2xl pr-1 pt-1 float-right`}
        ></i>
        {labelText}
      </a>
    );
  };
  return (
    <div className="w-0 md:w-1/4 lg:w-1/5 h-0 md:h-screen overflow-y-hidden bg-white shadow-lg">
      <div className="p-5 bg-white sticky top-0">
        <img className="border  h-72 w-72 shadow-lg rounded-full" src={img} />
        <div class="text-black text-2xl text-center">{currentUser}</div>
        <div className="pt-2 border-t mt-5 w-full flex flex-row flex-wrap justify-between">
          <div>
            <p className="text-gray-500">200</p>
            <div className="font-medium text-black">Posts</div>
          </div>
          <div>
            <p className="text-gray-500">400</p>
            <div className="font-medium text-black">Following</div>
          </div>
          <div>
            <p className="text-gray-500">200</p>
            <div className="font-medium text-black">Followers</div>
          </div>
        </div>
      </div>
      <div className="w-full h-screen  flex flex-col hover:cursor-pointer">
        {renderMenuItem("Messages", "fa-comment")}
        {renderMenuItem("Settings", "fa-cog")}
        {renderMenuItem("Log out", "fa-arrow-left")}
      </div>
    </div>
  );
}

export default ProfileCardView;
