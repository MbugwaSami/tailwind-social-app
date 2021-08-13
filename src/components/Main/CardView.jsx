function CardView(props) {
  const {
    createdBy: { firstName, lastName, imageUrl },
    createdOn,
    commentText,
    commentImage,
  } = props;
  return (
    <div className="bg-white mt-3">
      <div className="bg-white border-4 bg-gray-300 border-white rounded-b-lg shadow p-5 text-xl text-gray-700 content-center font-semibold flex flex-row flex-wrap">
        <div className="flex w-full">
          <img className="border h-20 w-20 rounded-full" src={imageUrl} />
          <div>
            <div className="text-xl font-medium text-black">{`${firstName} ${lastName}`}</div>
            <p className="text-gray-500">{createdOn}</p>
          </div>
        </div>
      </div>
      <img className="border h-44 w-full " src={commentImage} />
      <div className="bg-white border shadow p-5 text-xl text-gray-700 font-semibold">
        {commentText}
      </div>
      <div className="bg-white p-1 border shadow flex flex-row flex-wrap">
        <div className="w-1/3 hover:bg-gray-200 text-center text-xl text-gray-700 font-semibold">
          Like
        </div>
        <div className="w-1/3 hover:bg-gray-200 border-l-4 border-r- text-center text-xl text-gray-700 font-semibold">
          Share
        </div>
        <div className="w-1/3 hover:bg-gray-200 border-l-4 text-center text-xl text-gray-700 font-semibold">
          Comment
        </div>
      </div>
    </div>
  );
}

export default CardView;
