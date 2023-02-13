import React from 'react';
import {FooterProps} from "./Footer.props";
import styles from './Footer.module.css'

const Footer = ({...props}: FooterProps): JSX.Element => {
    return (
        <div {...props}>
            footer
        </div>
    )
};

export default Footer;