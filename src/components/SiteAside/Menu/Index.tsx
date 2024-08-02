import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Index.module.less';
import Icon from '@/components/Icon/Index';
type MenuItem = {
    path: string;
    title: string;
    icon: string;
    startsWith?: boolean;
};

function Index(props) {
    const [items, setItems] = useState<MenuItem[]>([
        {
            path: '/',
            title: '首页',
            icon: 'zhuye',
        },
        {
            path: '/blog',
            title: '文章',
            icon: 'blog',
            startsWith: true,
        },
        {
            path: '/about',
            title: '关于我',
            icon: 'about',
        },
        {
            path: '/project',
            title: '项目&效果',
            icon: 'code',
        },
        {
            path: '/message',
            title: '留言板',
            icon: 'liuyan',
        },
    ]);

    const location = useLocation()

    function isMatch(item: MenuItem) {
        if (item.startsWith) {
            return location.pathname.toLowerCase().startsWith(item.path);
        }
        return item.path === location.pathname.toLowerCase();
    }

    return (
        <nav className={styles.container}>
            {items.map((item) => {
                return (
                    <NavLink
                        to={item.path}
                        className={isMatch(item) ? styles.active : undefined}
                        key={item.path}
                    >
                        <div className={styles.icon}>
                            <Icon type={item.icon}></Icon>
                        </div>
                        <span>{item.title}</span>
                    </NavLink>
                );
            })}
        </nav>
    );
}

Index.propTypes = {};

export default Index;
