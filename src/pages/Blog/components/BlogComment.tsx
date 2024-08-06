import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MessageArea from '@/components/MessageArea/Index';

import useApi from '@/hooks/useApi';
import { getComments, postComment } from '@/api/blog';

import { useParams } from 'react-router-dom';


import message from '@/components/Message/index'

function BlogComment({ ...rest }) {
    const params = useParams();
    const [loading, _getComments] = useApi(getComments);
    const [postCommentLoading, _postComment] = useApi(postComment);
    const [page, setPage] = useState(1);
    const [data, setData] = useState({ rows: [], total: 0 });
    const limit = 10;

    useEffect(() => {
        _getComments(params.id, page, limit).then((res) => {
            console.log(res);
            setData(res.data);
        });
    }, []);

    const onSubmit = (obj, callback) => {
        _postComment({
            blogId: params.id,
            ...obj,
        }).then((res) => {
            setData({ total: data.total + 1, rows: [res.data, ...data.rows] });
            callback && callback();
            message({message: '提交成功'})
        });
        // console.log(data, callback)
    };
    return (
        <div style={{ margin: '30px 0' }}>
            <MessageArea
                title="评论列表"
                subTitle={`(${data.total})`}
                list={data.rows}
                isListLoading={loading}
                submit={onSubmit}
            ></MessageArea>
        </div>
    );
}

BlogComment.propTypes = {};

export default BlogComment;
