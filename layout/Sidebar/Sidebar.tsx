import React from 'react';
import {SidebarProps} from "./Sidebar.props";
import styles from './Sidebar.module.css'

const Sidebar = ({...props}: SidebarProps): JSX.Element => {
    return (
        <div {...props}>
            sidebar
        </div>
    )
};

export default Sidebar;