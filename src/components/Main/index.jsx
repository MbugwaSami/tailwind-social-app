import CardView from "./CardView";
import ProfileCardView from "./ProfileCard";

import img from "../../resources/profile.jpg";

function App() {
  const posts = [
    {
      createdBy: {
        firstName: "John",
        lastName: "Doe",
        imageUrl: img,
      },
      createdOn: "12 Aug, 2021",
      commentText: "A Pretty Cool photo from the snow mountains",
      commentImage:
        "https://images.unsplash.com/photo-1572817519612-d8fadd929b00?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    },
  ];
  return (
    <div className="w-full flex flex-row flex-wrap">
      <link
        rel="stylesheet"
        type="text/css"
        href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <div className="w-full bg-white-100 h-screen flex flex-row flex-wrap justify-center ">
        <div className="bg-white shadow-lg border-t-4 border-indigo-500 absolute bottom-0 w-full md:w-0 md:hidden flex flex-row flex-wrap">
          <div className="w-full text-right">
            <button className="p-2 fa fa-bars text-4xl text-gray-600"></button>
          </div>
        </div>
        <ProfileCardView currentUser="John Doe" />
        <div className="w-full md:w-3/4 lg:w-4/5 p-5 md:px-12 lg:24 h-full overflow-x-scroll antialiased">
          <div className="bg-white w-full shadow rounded-lg p-5">
            <textarea
              className="bg-white-200 w-full rounded-lg shadow border p-2"
              rows="5"
              placeholder="Share your capture"
            ></textarea>

            <div className="w-full flex flex-row flex-wrap mt-3">
              <div className="w-1/3">
                <select className="w-full p-2 rounded-lg shadow border float-left">
                  <option>Public</option>
                  <option>Private</option>
                </select>
              </div>
              <div className="w-2/3">
                <button
                  type="button"
                  className="float-right bg-blue-600 hover:bg-blue-500 text-white p-2 rounded-lg"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>

          <div className="mt-3 flex flex-col">
            {posts.map((post) => {
              return (
                <CardView
                  createdBy={post.createdBy}
                  createdOn={post.createdOn}
                  commentText={post.commentText}
                  commentImage={post.commentImage}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
