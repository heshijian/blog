import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import loadingSvg from '@/assets/image/loading.svg';

interface Props {
    loading: boolean;
    children?: React.ReactNode;
}

const Index: React.FC<Props> = function ({ loading = true, children }) {
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (
            loading &&
            ref.current &&
            ref.current.parentNode &&
            getComputedStyle(ref.current.parentNode as HTMLElement).position ===
                'static'
        ) {
            (ref.current.parentNode as HTMLElement).style.position = 'relative';
        }
    }, [loading]);
    return (
        <>
            {children && children}
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
};

Index.propTypes = {
    loading: PropTypes.bool.isRequired,
};

export default Index;
