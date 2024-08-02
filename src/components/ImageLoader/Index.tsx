import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Index.module.less';

function Index({
    src,
    placeholder,
    duration = 500,
    loaded = () => {},
}: {
    src: string;
    placeholder: string;
    duration?: number;
}) {
    const [opacity, setOpacity] = useState(0);
    const [showPlaceholder, setShowPlaceholder] = useState(true);
    function imgLoad() {
        setTimeout(() => {
            setShowPlaceholder(false);
            loaded();
        }, duration);
        setOpacity(1);
        
    }
    return (
        <div className={styles.container}>
            {showPlaceholder && (
                <img src={placeholder} className={styles.placeholder} alt="" />
            )}
            <img
                src={src}
                className={styles.origin}
                onLoad={imgLoad}
                style={{ opacity, transition: `${duration}ms` }}
                alt=""
            />
        </div>
    );
}

Index.propTypes = {
    src: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    duration: PropTypes.number,
};

export default Index;
