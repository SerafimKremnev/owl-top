import React, {useContext} from 'react';
import {AppContext} from "../../context/app.context";
import {FirstLevelMenuItem, PageItem} from "../../interfaces/menu.interface";
import {TopLevelCategory} from "../../interfaces/page.interface";
import CourseIcon from './icons/courses.svg';
import ServiceIcon from './icons/services.svg';
import BookIcon from './icons/books.svg';
import ProductIcon from './icons/products.svg';
import styles from './Menu.module.css';
import cn from "classnames";
import Link from "next/link";
import {useRouter} from "next/router";

const firstLevelMenu: FirstLevelMenuItem[] = [
    { route: 'courses', name: 'Курсы', id: TopLevelCategory.Courses, icon: <CourseIcon/>},
    { route: 'services', name: 'Сервисы', id: TopLevelCategory.Services, icon: <ServiceIcon/>},
    { route: 'books', name: 'Книги', id: TopLevelCategory.Books, icon: <BookIcon/>},
    { route: 'products', name: 'Товары', id: TopLevelCategory.Products, icon: <ProductIcon/>}
];

const Menu = (): JSX.Element => {
    const { menu, setMenu, firstCategory} = useContext(AppContext);

    const openSecondLevel = (secondCategory: string) => {
        setMenu && setMenu(menu.map(m => {
            if (m._id.secondCategory == secondCategory)
                m.isOpened = !m.isOpened;
            return m
        }))
    }
    const router = useRouter();

    const buildFirstLevel = (): JSX.Element => {
        return(
            <>
                {firstLevelMenu.map(m => (
                    <div key={m.route}>
                        <Link href={`/${m.route}`}>
                                <div className={cn(styles.firstLevel, {
                                    [styles.firstLevelActive]: m.id == firstCategory
                                })}>
                                    {m.icon}
                                    <span>{m.name}</span>
                                </div>
                        </Link>
                        {m.id == firstCategory && buildSecondLevel(m)}
                    </div>
                ))}
            </>
        );
    };

    const buildSecondLevel = (menuItem: FirstLevelMenuItem): JSX.Element => {
        return(
            <div className={styles.secondBlock}>
                {menu.map(m => {
                    if(m.pages.map(p => p.alias).includes(router.asPath.split('/')[2])) {
                        m.isOpened = true
                    }
                    return (
                    <div key={m._id.secondCategory}>
                        <div onClick={() => openSecondLevel(m._id.secondCategory)} className={styles.secondLevel}>{m._id.secondCategory}</div>
                        <div className={cn(styles.secondLevelBlock, {
                            [styles.secondLevelBlockOpened]: m.isOpened
                        })}>{buildThirdLevel(m.pages, menuItem.route)}</div>
                    </div>);
                }
                )}
            </div>
        );
    };

    const buildThirdLevel = (pages: PageItem[], route: string): JSX.Element => {
        return(
            <>
                {
                pages.map(p => (
                    <Link className={cn(styles.thirdLevel, {
                        [styles.thirdLevelActive]: `/${route}/${p.alias}` === router.asPath
                    })} href={`/${route}/${p.alias}`}>
                        {p.category}
                    </Link>
                ))
                }
            </>
        );
    };


    return (
        <div className={styles.menu}>
            {buildFirstLevel()}
        </div>
    )
};

export default Menu;