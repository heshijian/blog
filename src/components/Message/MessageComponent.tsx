import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './MessageComponent.module.less';
import Icon from '@/components/Icon/Index';

function MessageComponent({
    message,
    type = 'success',
    duration = 2000,
    destroy,
}) {
    const [needStartClass, setStartClass] = useState(true);
    const [needEndClass, setEndClass] = useState(false);
    useEffect(() => {
        setStartClass(false);
        setTimeout(() => {
            setEndClass(true);
            destroy();
        }, duration);
    }, [duration]);
    return (
        <div
            className={`${styles.container} ${styles[type]} ${
                needStartClass ? styles.start : ''
            } ${needEndClass ? styles.end : ''}`}
        >
            <div className={styles.icon}>
                <Icon
                    type="xinxi"
                    className="test"
                    style={{ color: '#fff', fontSize: '20px' }}
                />
            </div>
            {message}
        </div>
    );
}

MessageComponent.propTypes = {
    message: PropTypes.string.isRequired,
    type: PropTypes.string,
    duration: PropTypes.number,
};

export default MessageComponent;
