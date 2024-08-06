import React from 'react';
import PropTypes from 'prop-types';
import styles from './DataList.module.less';
import Avatar from '@/components/Avatar/Index';

import { formatDate } from '@/utils';

export interface CommentItem{
    id: string
    nickname: string
    content: string
    createDate: string
    avatar: string
}

function DataList({ list = [] }: {list: CommentItem[]}) {
    return (
        <ul className={styles.container}>
            {list.map((item) => (
                <li key={item.id}>
                    <Avatar url={item.avatar} size={44} />
                    <div className={styles.data}>
                        <div className={styles.nickname}>{item.nickname}</div>
                        <div className={styles.content}>{item.content}</div>
                        <div className={styles.time}>
                            {formatDate(item.createDate, true)}
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    );
}

DataList.propTypes = {
    list: PropTypes.array,
};

export default DataList;
