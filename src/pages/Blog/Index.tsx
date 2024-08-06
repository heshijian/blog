import { useEffect, useState } from 'react';
import Loading from '@/components/Loading/Index';
import Categorize from './components/Categorize';
import type { Item } from './components/Categorize';
import Layout from '@/components/Layout/Index';
import BlogCate from './components/BlogCate'
import BlogList from './components/BlogList'

import { useParams, useSearchParams } from 'react-router-dom';

import useApi from '@/hooks/useApi';
import { getBlogs, getTypes } from '@/api/blog';

export default function Index() {
    // const [typeLoading, _getTypes] = useApi(getTypes);
    // const [blogsLoading, _getBlogs] = useApi(getBlogs);
    // const [types, setTypes] = useState([]);
    // const [blogs, setBolgs] = useState([]);
    // const [loading, setLoading] = useState(true);
    // const params = useParams();
    // console.log(params);
    // const [search, setSearch] = useSearchParams();

    // useEffect(() => {
    //     _getTypes().then(({ data }) => {
    //         setTypes(data);
    //     });

    //     _getBlogs().then(({ data }) => {
    //         setBolgs(data.rows);
    //     });
    // }, []);
    // const onSelect = (item: Item) => {
    //     console.log(item);
    // };

    // function click() {
    //     setSearch(() => '?a=4');
    //     console.log(search.get('a'));
    // }
    return (
        <div style={{height: '100%'}}>
            <Layout>
                {{
                    main: <BlogList />,
                    right: <BlogCate />,
                }}
            </Layout>
        </div>
    );
}
