import React, { useEffect, useRef, useState } from 'react';
import Loading from '@/components/Loading/Index';

export default function Index() {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 10000);
    }, []);
    return (
        <div>
            <Loading loading={loading} >
                <div>123</div>
            </Loading>
        </div>
    );
}
