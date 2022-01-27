import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import "./header.css";
import { Link, NavLink } from "react-router-dom";
import Account from "../../pages/account/Account";

export default function Header() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="header">
      <div className="header_icons">
        {header.map((x, i) => (
          <NavLink to={x.path} key={i} activeClassName="active">
            {x.Icon}
            <p>{x.title}</p>
          </NavLink>
        ))}
        <div className="header_icon">
          <PersonOutlineIcon onClick={handleOpen} />
          <p>Account</p>
          <Account open={open} handleClose={handleClose} />
        </div>
      </div>
      <Link to="/">
        <img
          src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png"
          alt="logo"
        />
      </Link>
    </div>
  );
}
const header = [
  {
    title: "Home",
    path: "/home",
    Icon: <HomeIcon />,
  },
  {
    title: "Trending",
    path: "/trending",
    Icon: <FlashOnIcon />,
  },
  {
    title: "Verified",
    path: "/verified",
    Icon: <LiveTvIcon />,
  },
  {
    title: "Collection",
    path: "/collection",
    Icon: <VideoLibraryIcon />,
  },
  {
    title: "Search",
    path: "/search",
    Icon: <SearchIcon />,
  },
];
