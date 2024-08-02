import React from 'react';
import PropTypes from 'prop-types';
import styles from './Index.module.less';
import Icon from '@/components/Icon/Index';

function Index({ text = '无数据' }) {
    return (
        <div className={styles.container}>
            <Icon type="empty" style={{ fontSize: '72px' }} />
            <p>{text}</p>
        </div>
    );
}

Index.propTypes = {
    text: PropTypes.string,
};

export default Index;
