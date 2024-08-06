import { useEffect, useRef, useState } from 'react';
import { formatDate } from '@/utils/index';
import styles from './BlogList.module.less';
import qs from 'qs';

import Loading from '@/components/Loading/Index';
import Pager from '@/components/Pager/Index';

import useApi from '@/hooks/useApi';
import { getBlogs } from '@/api/blog';

import { useParams, useSearchParams, Link } from 'react-router-dom';

interface ListItem {
    id: string;
    title: string;
    description: string;
    category: { id: number; name: string };
    scanNumber: number;
    commentNumber: number;
    thumb: string;
    createDate: string;
}

function BlogList(props) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [loading, _getList] = useApi(getBlogs);
    const [list, setList] = useState<ListItem[]>([]);
    const [total, setTotal] = useState(0);
    const [searchInfo, setSearchInfo] = useState({
        categoryId: -1,
        page: 1,
        limit: 10,
    });

    const params = useParams();
    const [searchParams, setSearchParams] = useSearchParams();

    async function fetchData() {
        const categoryId = params.categoryId! || -1;
        const page = +searchParams.get('page')! || 1;
        const limit = +searchParams.get('limit')! || 10;
        setSearchInfo({
            categoryId: categoryId as number,
            page: page as number,
            limit: limit as number,
        });

        _getList(page, limit, categoryId).then((res) => {
            setList(res.data.rows);
            setTotal(res.data.total);
        });
    }

    useEffect(() => {
        fetchData();
    }, [params.categoryId, searchParams]);

    function handlePageChange(page: number) {
        containerRef.current && (containerRef.current.scrollTop = 0);
        setSearchParams(
            '?' +
                qs.stringify({
                    page,
                    limit: searchInfo.limit,
                })
        );
    }
    return (
        <Loading loading={loading}>
            <div className={styles.container} ref={containerRef}>
                <ul>
                    {list.map((item) => (
                        <li key={item.id}>
                            {item.thumb && (
                                <div className={styles.thumb}>
                                    <Link to={'/blog/'+item.id}>
                                        <img
                                            src={item.thumb}
                                            alt={item.title}
                                            title={item.title}
                                        />
                                    </Link> 
                                </div>
                            )}
                            <div className={styles.main}>
                                <Link to={'/blog/'+item.id}>
                                    <h2>{item.title}</h2>
                                </Link>
                                <div className={styles.aside}>
                                    <span>
                                        日期：{formatDate(item.createDate)}
                                    </span>
                                    <span>浏览：{item.scanNumber}</span>
                                    <span>评论：{item.commentNumber}</span>

                                    <Link to={`/blog/cate/${item.category.id}?page=1&limit=10`}>
                                        {item.category.name}
                                    </Link>
                                </div>
                                <div className="desc">{item.description}</div>
                            </div>
                        </li>
                    ))}
                </ul>
                {total ? (
                    <Pager
                        current={searchInfo.page}
                        total={total}
                        limit={searchInfo.limit}
                        visibleNumber={10}
                        onPageChange={handlePageChange}
                    />
                ) : null}
            </div>
        </Loading>
    );
}

BlogList.propTypes = {};

export default BlogList;
