import React from 'react';
import { NavLink } from 'react-router-dom';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import './NavItem.css';

const NavItem = (props) => {
    return (
        <li className="NavItem">
            <NavLink to={props.link} exact>
                <ListItem button>
                    <ListItemIcon>{props.icon}</ListItemIcon>
                    <ListItemText primary={props.caption} />
                </ListItem>
            </NavLink>
        </li>
    );
}

export default NavItem;