import React from 'react';
import PropTypes from 'prop-types';
import '@/assets/css/iconfont.css';

function Icon({ type, style={} }: { type: string, style: React.CSSProperties }) {
    return (
        <i
            className={`iconfont icon-${type}`}
            style={style}
        ></i>
    );
}

Icon.propTypes = {
    type: PropTypes.string.isRequired,
};

export default Icon;
