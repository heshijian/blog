import React from 'react'
import PropTypes from 'prop-types'
import styles from './BlogDetail.module.less'
import {formatDate} from '@/utils/'
import '@/assets/css/markdown.css'
import 'highlight.js/styles/github.css'

function BlogDetail({blog}) {
  return (
    <div className={styles.container}>
        <h1>{blog.title}</h1>
        <div className={styles.aside}>
            <span>日期：{formatDate(blog.createDate)}</span>
            <span>浏览量：{blog.scanNumber}</span>
            <a href='#data-form-container'>评论：{blog.commentNumber}</a>
            <a>分类：{blog.category.name}</a>
        </div>
        <div className='markdown-body' dangerouslySetInnerHTML={{__html: blog.htmlContent}}></div>
    </div>
  )
}

BlogDetail.propTypes = {
    blog: PropTypes.object.isRequired
}

export default BlogDetail
