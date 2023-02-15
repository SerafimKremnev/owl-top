import React from 'react';
import {FooterProps} from "./Footer.props";
import styles from './Footer.module.css'
import cn from "classnames";
import { format } from 'date-fns'

const Footer = ({...props}: FooterProps): JSX.Element => {
    return (
        <footer {...props} className={cn(styles.footer, props.className)}>
            <div>OwlTop © 2020 - {format(new Date(), 'yyyy')} Все права защищены</div>
            <a href={'#'}>Пользовательское соглашение</a>
            <a href={'#'}>Политика конфидециальности</a>
        </footer>
    )
};

export default Footer;