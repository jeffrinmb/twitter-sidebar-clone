import React from 'react';
import './SideBarLink.css';

const SideBarLink = props => {
  return (
    <div className="link">
      <props.Icon />
      <h2>{props.text}</h2>
    </div>
  );
};

export default SideBarLink;
