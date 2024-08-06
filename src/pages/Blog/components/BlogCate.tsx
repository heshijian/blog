import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './BlogCate.module.less';
import Categorize from './Categorize';
import type { Item } from './Categorize';
import Loading from '@/components/Loading/Index';
import { useParams, useNavigate } from 'react-router-dom';

import useApi from '@/hooks/useApi';
import { getTypes } from '@/api/blog';

function BlogCate(props) {
    const [types, setTypes] = useState<Item []>([]);
    const [loading, _getBlogs] = useApi(getTypes);
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        _getBlogs().then((res) => {
            setTypes(res.data);
        });
    }, []);

    const list = useMemo(() => {
        let total = 0;
        types.forEach((item) => {
            total += (item as any).articleCount;
        });
        const res = [
            {
                name: '全部',
                id: -1,
                articleCount: total
            },
            ...types,
        ];
        
        return res.map((item) => ({
            ...item,
            aside: (item as any).articleCount + '篇',
            isSelect:
                item.id ===
                (params.categoryId === undefined
                    ? -1
                    : +(params.categoryId as string)),
        }));
    }, [types, params.categoryId]);

    function onSelect(item: Item) {
        navigate(
            item.id === -1 ? '/blog' : `/blog/cate/${item.id}?page=1&limit=10`
        );
    }
    return (
        <div className={styles.container}>
            <Loading loading={loading}>
                <h2>文章分类</h2>
                <Categorize list={list} onSelect={onSelect} />
            </Loading>
        </div>
    );
}

BlogCate.propTypes = {};

export default BlogCate;
