import React from "react";
import header from "./Header.module.css";
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton, Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { logout, selectUser } from "store/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../firebase";

const Header: React.FC = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const sightOut = () => {
    alert("サインアウトします");
    auth.signOut().then(() => {
      dispatch(logout());
    });
  };
  return (
    <div className="flex items-center justify-between border-b  my-3 ">
      {/* header left */}
      <div className="flex items-center justify-items-center">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <div className="ml-4">
          <img
            src="https://cdn.icon-icons.com/icons2/272/PNG/512/Gmail_29991.png"
            alt="gmail"
            className="object-contain h-14 ml-2"
          />
        </div>
      </div>
      {/* end header left */}

      {/* header middle */}
      <div className={header.header_middle}>
        <SearchIcon className="text-gray-400" />
        <input
          type="text"
          placeholder="Search mail"
          className="border-none w-full p-1 text-base bg-transparent "
        />
        <ArrowDropDownIcon />
      </div>
      {/* end header middle */}
      {/* header right */}
      <div className="flex pr-1">
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <Avatar
          onClick={sightOut}
          // src={user?.photoURL}
          className="cursor-pointer"
        />
      </div>
      {/* end header right */}
    </div>
  );
};

export default Header;
