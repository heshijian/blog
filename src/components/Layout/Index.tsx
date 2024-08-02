import React from 'react';
import PropTypes from 'prop-types';
import styles from './Index.module.less';

function Index({ children }) {
    return (
        <div className={styles.container}>
            <div className={styles.left}>{children.left}</div>
            <div className={styles.main}>{children.main}</div>
            <div className={styles.right}>{children.right}</div>
        </div>
    );
}

Index.propTypes = {};

export default Index;
