import React from 'react';
import {TagProps} from "./Tag.props";
import cn from "classnames";
import styles from './Tag.module.css';

const Tag = ({children, size='m', color='ghost', href, className, ...props}: TagProps) => {
    return (
        <div {...props} className={cn(styles.tag, className, {
            [styles.m]: size == 'm',
            [styles.l]: size == 'l',
            [styles.ghost]: color == 'ghost',
            [styles.green]: color == 'green',
            [styles.primary]: color == 'primary',
            [styles.red]: color == 'red',
            [styles.gray]: color == 'gray',
        })}> {
            href
            ? <a href={href}>{children}</a>
            : <>{children}</>
        }
        </div>
    );
};

export default Tag;