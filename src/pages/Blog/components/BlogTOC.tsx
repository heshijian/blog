import React from 'react';
import PropTypes from 'prop-types';
import styles from './BlogTOC.module.less';
import Categorize from './Categorize';


function BlogTOC({ blog }) {
    const onSelect = (item) => {
        location.hash = '#'+item.anchor
    };
    return (
        <div className={styles.container}>
            <h2>目录</h2>
            <Categorize list={blog.toc} onSelect={onSelect} />
        </div>
    );
}

BlogTOC.propTypes = {
    blog: PropTypes.object.isRequired,
};

export default BlogTOC;
