import React, { useEffect, useState } from 'react';
import Loading from '@/components/Loading/Index';
import useApi from '@/hooks/useApi';
import { getBlog } from '@/api/blog';
import { useParams } from 'react-router-dom';
import Layout from '@/components/Layout/Index';

import BlogDetail from './components/BlogDetail';
import BlogTOC from './components/BlogTOC';
import BlogComment from './components/BlogComment';

import styles from './Detail.module.less';

export default function Detail() {
    const params = useParams();
    const [loading, _getBlog] = useApi(getBlog);
    const [data, setData] = useState({});

    useEffect(() => {
        _getBlog(params.id).then((res) => {
            setData(res.data);
        });
    }, [params.id]);
    return (
        <div className={styles.container}>
            <Layout>
                {{
                    main: (
                        <div
                            style={{
                                height: '100%',
                                overflowY: 'scroll',
                                scrollBehavior: 'smooth',
                            }}
                        >
                            <Loading loading={loading}>
                                {data.id ? (
                                    <BlogDetail blog={data}></BlogDetail>
                                ) : null}
                            </Loading>
                            {!loading ? <BlogComment></BlogComment> : null}
                        </div>
                    ),
                    right: (
                        // <div>
                        <Loading loading={loading}>
                            {data.id ? <BlogTOC blog={data}></BlogTOC> : null}
                        </Loading>
                        // </div>
                    ),
                }}
            </Layout>
        </div>
    );
}
