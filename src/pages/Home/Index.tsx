import React, { useRef } from 'react';
import message from '@/components/Message/index';

export default function Index() {
    const ref = useRef();
    return (
        <div style={{ height: '300px' }} id="test" ref={ref}>
            home
            <button
                onClick={() =>
                    message({
                        message: '评论成功',
                        type: 'success',
                        duration: 3000,
                        container: ref.current,
                        callback() {
                            console.log(333);
                        },
                    })
                }
            >
                btn
            </button>
        </div>
    );
}
