import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import loadingSvg from '@/assets/image/loading.svg';

function Index({ loading = true, children }) {
    const ref = useRef(null);
    useEffect(() => {
        console.log(children);
        if (
            loading &&
            getComputedStyle(ref.current.parentNode).position === 'static'
        ) {
            ref.current.parentNode.style.position = 'relative';
        }
    }, [loading]);
    return (
        <>
            {children && { ...children }}
            {loading && (
                <div
                    ref={ref}
                    style={{
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        width: '100%',
                        height: '100%',
                        background: 'rgba(255,255,255,.8)',
                    }}
                >
                    <img
                        src={loadingSvg}
                        alt=""
                        ref={ref}
                        style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                        }}
                    />
                </div>
            )}
        </>
    );
}

Index.propTypes = {};

export default Index;
