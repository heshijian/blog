import request from './request';
import type { Res } from './request';

export function getTypes() {
    return request({
        url: '/api/blogtype',
        method: 'get',
    });
}

export function getBlogs(page = 1, limit = 10, categoryId = -1) {
    return request({
        url: '/api/blog',
        method: 'get',
        params: {
            page,
            limit,
            categoryId,
        },
    });
}

export function getBlog(id: any) {
    return request.get(`/api/blog/${id}`);
}

/**
 * 提交评论
 */
export function postComment(commentInfo) {
    return request.post(`/api/comment`, commentInfo);
}

export function getComments(blogid, page = 1, limit = 10) {
    return request.get('/api/comment', {
        params: {
            blogid,
            page,
            limit,
        },
    });
}
