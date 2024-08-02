import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@/components/Avatar/Index';
import Contact from '@/components/SiteAside/Contact/Index';
import Menu from '@/components/SiteAside/Menu/Index';

import styles from './Index.module.less';

function Index(props) {
    return (
        <div className={styles.container}>
            <div className={styles.avatar}>
                <Avatar
                    url="https://wx2.sinaimg.cn/mw690/bb955ac4gy1hqc0gc4vewj20u00u077l.jpg"
                    size={150}
                />
            </div>
            <h1 className={styles.title}>何成旭的地下组织</h1>

            <Menu />
            <Contact />
            <p className={styles.footer}>豫ICP备2024052625号</p>
        </div>
    );
}

Index.propTypes = {};

export default Index;
