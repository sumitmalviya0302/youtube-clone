import { BiSolidHome, BiLike } from "react-icons/bi";
import { RiVideoLine } from "react-icons/ri";
import { MdOutlineSubscriptions } from "react-icons/md";
import {LuLibrary} from 'react-icons/lu'
import {VscHistory } from 'react-icons/vsc'
import {AiOutlinePlaySquare} from 'react-icons/ai'
import {MdOutlineWatchLater} from 'react-icons/md'

import { useSelector } from "react-redux";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen)
    return (
      <div>
        <div className=" py-2 ">
          <BiSolidHome size="20px" className="mx-auto my-1" />
          <h2 className=" my-1 text-xs text-center">Home</h2>
        </div>
        <div className="px-1 py-2 ">
          <RiVideoLine size="20px" className="mx-auto my-1" />
          <h2 className=" my-1 mx-auto text-xs px-1 text-center">Shorts</h2>
        </div>
        <div className="px-1 py-2 ">
          <MdOutlineSubscriptions size="20px" className="mx-auto my-1" />
          <h2 className=" my-1 mx-auto text-xs px-1 text-center">
            Subscriptions
          </h2>
        </div>
        <div className="px-1 py-2 ">
          <LuLibrary size="20px" className="mx-auto my-1" />
          <h2 className=" my-1 mx-auto text-xs px-1 text-center">Library</h2>
        </div>
        <div className="px-1 py-2 ">
          <VscHistory size="20px" className="mx-auto my-1" />
          <h2 className=" my-1 mx-auto text-xs px-1 text-center">History</h2>
        </div>
      </div>
    );

  return (
    <div className="w-52 px-5 bg-white h-auto">
      <div className="py-2 border-b">
        <div className="flex px-1 py-2 hover:bg-gray-100 rounded-md ">
          <BiSolidHome size="22px" className="my-auto mx-2" />
          <h2 className="h-6 mx-2 my-auto text-sm py-1">Home</h2>
        </div>
        <div className="flex px-1 py-2 hover:bg-gray-100 rounded-md ">
          <RiVideoLine size="22px" className="my-auto mx-2" />
          <h2 className="h-6 mx-2 my-auto text-sm py-1">Shorts</h2>
        </div>
        <div className="flex px-1 py-2 hover:bg-gray-100 rounded-md ">
          <MdOutlineSubscriptions size="22px" className="my-auto mx-2" />
          <h2 className="h-6 mx-2 my-auto text-sm py-1">Subscriptions</h2>
        </div>
      </div>
      <div className="py-2 border-b">
        <div className="flex px-1 py-2 hover:bg-gray-100 rounded-md ">
          <LuLibrary size="22px" className="my-auto mx-2" />
          <h2 className="h-6 mx-2 my-auto text-sm py-1">Library</h2>
        </div>
        <div className="flex px-1 py-2 hover:bg-gray-100 rounded-md ">
          <VscHistory size="22px" className="my-auto mx-2" />
          <h2 className="h-6 mx-2 my-auto text-sm py-1">History</h2>
        </div>
        <div className="flex px-1 py-2 hover:bg-gray-100 rounded-md ">
          <AiOutlinePlaySquare size="22px" className="my-auto mx-2" />
          <h2 className="h-6 mx-2 my-auto text-sm py-1">Your Videos</h2>
        </div>
        <div className="flex px-1 py-2 hover:bg-gray-100 rounded-md ">
          <MdOutlineWatchLater size="22px" className="my-auto mx-2" />
          <h2 className="h-6 mx-2 my-auto text-sm py-1">Watch later</h2>
        </div>
        <div className="flex px-1 py-2 hover:bg-gray-100 rounded-md ">
          <BiLike size="22px" className="my-auto mx-2" />
          <h2 className="h-6 mx-2 my-auto text-sm py-1">Liked Videos</h2>
        </div>
      </div>
      
    </div>
  );
};

export default SideBar;
