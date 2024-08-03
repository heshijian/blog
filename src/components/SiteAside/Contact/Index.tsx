import React from 'react';
import PropTypes from 'prop-types';
import styles from './Index.module.less';
import Icon from '@/components/Icon/Index';

function Index(props) {
    return (
        <ul className={styles.container}>
            <li>
                <a>
                    <div className={styles.icon}>
                        <Icon type="github"/>
                    </div>
                    <span>hechengxu</span>
                </a>
            </li>
            <li>
                <a href='mailto:m18303667987@163.com'>
                    <div className={styles.icon}>
                        <Icon type="email"/>
                    </div>
                    <span>m18303667987@163.com</span>
                </a>
            </li>
            <li>
                <a>
                    <div className={styles.icon}>
                        <Icon type="QQ"/>
                    </div>
                    <span>1452369310</span>
                </a>
            </li>
            <li>
                <a>
                    <div className={styles.icon}>
                        <Icon type="weixin"/>
                    </div>
                    <span>hechengxu</span>
                </a>
                <div className={styles.pop}>
                    <img src="https://fastly.picsum.photos/id/386/300/300.jpg?hmac=d6FbS5fber4u6kKm85UMyvPMNGXhkx3_gjHz7pkIMug" alt="" />
                </div>
            </li>
        </ul>
    );
}

Index.propTypes = {};

export default Index;
