import React from 'react';
import SideBarLink from './SideBarLink';
import './SideBar.css';

import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import { Button } from '@material-ui/core';

const SideBar = () => {
  return (
    <div className="sidebar">
      <SideBarLink text="Home" Icon={HomeIcon} />
      <SideBarLink text="Explore" Icon={SearchIcon} />
      <SideBarLink text="Notifications" Icon={NotificationsNoneIcon} />
      <SideBarLink text="Messages" Icon={MailOutlineIcon} />
      <SideBarLink text="Bookmarks" Icon={BookmarkBorderIcon} />
      <SideBarLink text="Lists" Icon={ListAltIcon} />
      <SideBarLink text="Profile" Icon={PermIdentityIcon} />
      <SideBarLink text="More" Icon={MoreHorizIcon} />
      <Button id="tweet">Tweet</Button>
    </div>
  );
};

export default SideBar;
