import React from 'react';
import PropTypes from 'prop-types';
import '@/assets/css/iconfont.css';

function Icon({
    type
}: {
    type: string;
}) {
    return <i className={`iconfont icon-${type}`} style={{color: 'inherit', fontSize: 'inherit'}}></i>;
}

Icon.propTypes = {
    type: PropTypes.string.isRequired,
};

export default Icon;
