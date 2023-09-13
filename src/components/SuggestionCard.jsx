const Suggestioncard = () => {
  return (
    <>
        <div className="flex p-2 my-2">
          <img src="#" alt="image" className="w-5/12 border rounded-lg " />
          <div className="w-7/12 border px-2 py-1">
            <p className="text-md font-semibold break-words">title</p>
            <p className=" text-gray-700 text-sm my-1">channel name</p>
            <div className="flex">
              <p className="text-gray-700 text-sm">views</p>
              <span className="mx-2 text-black">&#8226;</span>
              <span className="text-sm text-gray-700"> ago</span>
            </div>
          </div>
        </div>
    </>
  );
};

export default Suggestioncard;
