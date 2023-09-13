import { RxHamburgerMenu } from "react-icons/rx";
import { BiSearchAlt2 } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { VscAccount } from "react-icons/vsc";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { Link } from "react-router-dom";

const Header = () => {

  const dispatch = useDispatch();

  const toggleMenuHandler = ()=>{
    dispatch(toggleMenu())
  }

  return (
    <div className="grid grid-flow-col h-14 sticky top-0 z-2020 bg-white px-5 border">
      <div className=" flex px-2  ">
        <RxHamburgerMenu size="22px" className="my-auto mx-2 cursor-pointer" onClick={()=>toggleMenuHandler()}/>
        <Link to='/' className="w-20 h-6 mx-2 my-auto"><img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_vnQPUSTmJIsaCVojYDSgNDOFuKLYVArzn_7taaXoqfBnuadrPe1r-ed7KR6E-xYPmg&usqp=CAU"
          alt="logo"
          className="w-20 h-6 mx-2 my-auto"
          
        /></Link>
      </div>
      <div className="flex px-auto text-center ">
        <input
          type="text"
          placeholder="search"
          className="w-10/12 h-10 my-auto outline-none  border border-gray-400 rounded-l-full px-4"
          
        />
        <button className="my-auto border border-gray-400 rounded-r-full h-10 w-14">
          <BiSearchAlt2
            size="25px"
            className="mx-auto"
          />
        </button>
      </div>

      <div className="flex justify-end pr-5 items-center  ">
        <IoMdNotificationsOutline size='25px' className="my-auto mx-2"/>
        <VscAccount size='25px' className="my-auto mx-2"/>
      </div>
    </div>
  );
};

export default Header;
