import { MdNotificationsActive, MdOutlineSort } from "react-icons/md";
import { BiDislike, BiLike } from "react-icons/bi";
import { PiShareFatThin } from "react-icons/pi";
import { BsThreeDots, BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineDown } from "react-icons/ai";

const VideoDetails = ({id}) => {
  


  return (
    <div className="p-4 border w-8/12">
      {/* video*/}
      <div className="border">
        <iframe
          width="800"
          height="600"
          src={"https://www.youtube.com/embed/"+id }
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>

      {/*title*/}
      <div className="my-2 font-bold text-lg">Title</div>

      {/*account details*/}
      <div className="border flex justify-between py-1">
        <div className="flex ">
          <img
            src="#"
            alt="image"
            className="border w-10 h-10 my-auto rounded-full"
          />
          <div className="ml-2 my-auto">
            <h2 className="font-bold">Chaneel name</h2>
            <p className="text-sm text-gray-600">Subscribers</p>
          </div>
          <div className="flex ml-6 border p-1 rounded-3xl bg-gray-100 hover:bg-gray-200">
            <MdNotificationsActive size="25px" className="my-auto" />
            <p className="my-auto mx-2 text-sm font-bold">Subscribe</p>
            <AiOutlineDown size="18px" className="my-auto" />
          </div>
        </div>
        <div className="flex">
          <div className="flex bg-gray-100 rounded-full px-2">
            <BiLike size="25px" className="my-auto" />
            <p className="my-auto mx-2">like count </p>
            <span className="text-gray-400 my-auto">|</span>
            <BiDislike size="25px" className="mx-2 my-auto" />
          </div>
          <div className="flex bg-gray-100 rounded-3xl mx-2">
            <PiShareFatThin size="25px" className="my-auto mx-3" />
            <p className="my-auto mx-3">share</p>
          </div>
          <div className="ml-1 border rounded-full bg-gray-100">
            <BsThreeDots size="25px" className="my-2 mx-2" />
          </div>
        </div>
      </div>

      {/*description*/}
      <div className="my-2 bg-gray-100 w-full rounded-xl p-3">
        <div className="flex ">
          <p className="mx-2">Viwes</p>
          <p className="mx-2">date</p>
        </div>
        <div className="mx-2 my-2">descriptoin</div>
      </div>

      {/**comments section */}
      <div className="my-4">
        <div>
          <div className="flex">
            <p>No. fo commets</p>
            <div className="ml-5 flex">
              <MdOutlineSort size="25px" className="my-auto" />
              <p className="ml-4 text-sm font-bold my-auto">Sort by</p>
            </div>
          </div>
          <div className="flex my-4">
            <img
              src="#"
              alt="image"
              className="border w-10 h-10 my-auto rounded-full"
            />
            <div className="mx-3 w-full">
              <input
                type="text "
                placeholder="Add a Comment"
                className="w-full pb-1 outline-none border-b"
              />
            </div>
          </div>
        </div>

        {/** comments */}
        <div>
          <div className="flex my-4">
            <img
              src="#"
              alt="image"
              className="border w-10 h-10  rounded-full"
            />
            <div className="mx-3 w-full">
              <div className="flex ">
                <p className="text-sm font-bold ">atsumit</p>
                <p className="text-xs text-gray-700 ml-3 my-auto">
                  2 years ago
                </p>
              </div>
              <p className="my-2 py-2">Description of comment</p>
              <div className="flex">
                <div className="flex">
                  <BiLike size="25px" className="my-auto" />
                  <p className="text-xs text-gray-600 my-auto ml-1">43</p>
                </div>
                <BiDislike size="25px" className="mx-2 my-auto" />

                <p className="my-auto ml-4 text-sm">Reply</p>
              </div>
            </div>
            <div className="h-10 border rounded-full bg-gray-100">
              <BsThreeDotsVertical size="25px" className="my-2 mx-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoDetails;
