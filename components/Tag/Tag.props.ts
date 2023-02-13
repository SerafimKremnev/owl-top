import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export interface TagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: ReactNode,
    size?: 'm' | 'l',
    color?: 'ghost' | 'green' | 'primary' | 'gray' | 'red',
    href?: string;
}