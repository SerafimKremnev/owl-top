import {FirstLevelMenuItem} from "../interfaces/menu.interface";
import {TopLevelCategory} from "../interfaces/page.interface";
import CourseIcon from "./icons/courses.svg";
import ServiceIcon from "./icons/services.svg";
import BookIcon from "./icons/books.svg";
import ProductIcon from "./icons/products.svg";
import React from "react";

export const firstLevelMenu: FirstLevelMenuItem[] = [
    { route: 'courses', name: 'Курсы', id: TopLevelCategory.Courses, icon: <CourseIcon/>},
    { route: 'services', name: 'Сервисы', id: TopLevelCategory.Services, icon: <ServiceIcon/>},
    { route: 'books', name: 'Книги', id: TopLevelCategory.Books, icon: <BookIcon/>},
    { route: 'products', name: 'Товары', id: TopLevelCategory.Products, icon: <ProductIcon/>}
];