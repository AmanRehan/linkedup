import React from 'react'
import './HeaderOption.css'
import { Avatar } from "@material-ui/core";
function HeaderOption({ avatar, Icon, title }) {
  return (
    <div className="headerOption">
        {Icon && <Icon className='HeaderOption__icon' />}
        {avatar && (<Avatar className='HeaderOption__icon' src={avatar} />)}
        <h3 className="headerOption__title">{title}</h3>
    </div>
  );
}

export default HeaderOption;