import React, { useState } from 'react';
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

import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import OfflineBoltOutlinedIcon from '@material-ui/icons/OfflineBoltOutlined';
import PostAddOutlinedIcon from '@material-ui/icons/PostAddOutlined';
import CallMadeOutlinedIcon from '@material-ui/icons/CallMadeOutlined';
import BarChartOutlinedIcon from '@material-ui/icons/BarChartOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import BrushOutlinedIcon from '@material-ui/icons/BrushOutlined';
import AccessibilityNewOutlinedIcon from '@material-ui/icons/AccessibilityNewOutlined';

import { Button } from '@material-ui/core';
import { Menu } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';

const SideBar = () => {
  const options = [
    { link: 'Bookmarks', icon: <BookmarkBorderOutlinedIcon /> },
    { link: 'List', icon: <ListAltOutlinedIcon /> },
    { link: 'Topic', icon: <ChatOutlinedIcon /> },
    { link: 'Moments', icon: <OfflineBoltOutlinedIcon /> },
    { link: 'Newsletters', icon: <PostAddOutlinedIcon /> },
    { link: 'Twitter Ads', icon: <CallMadeOutlinedIcon /> },
    { link: 'Analytics', icon: <BarChartOutlinedIcon /> },
    { link: 'Settings', icon: <SettingsOutlinedIcon /> },
    { link: 'Help Center', icon: <HelpOutlineOutlinedIcon /> },
    { link: 'Display', icon: <BrushOutlinedIcon /> },
    { link: 'Keyboard Shortcuts', icon: <AccessibilityNewOutlinedIcon /> },
  ];

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = event => {
    setOpen(true);
  };

  return (
    <div className="sidebar">
      <SideBarLink text="Home" Icon={HomeIcon} />
      <SideBarLink text="Explore" Icon={SearchIcon} />
      <SideBarLink text="Notifications" Icon={NotificationsNoneIcon} />
      <SideBarLink text="Messages" Icon={MailOutlineIcon} />
      <SideBarLink text="Bookmarks" Icon={BookmarkBorderIcon} />
      <SideBarLink text="Lists" Icon={ListAltIcon} />
      <SideBarLink text="Profile" Icon={PermIdentityIcon} />
      <Button onClick={handleClick} id="moreLinks">
        <MoreHorizIcon /> More
      </Button>
      <Button id="tweet">Tweet</Button>
      <Menu id="long-menu" open={open} onClose={handleClose}>
        {options.map(option => (
          <MenuItem key={option.link} onClick={handleClose}>
            {option.icon} {option.link}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default SideBar;
