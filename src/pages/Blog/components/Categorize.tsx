import React from 'react';
import PropTypes from 'prop-types';
import styles from './Categorize.module.less';
export interface Item {
    name: string;
    isSelect?: boolean;
    children?: Item[];
    id?: number;
    aside: any;
}

function Categorize({
    list,
    onSelect,
}: {
    list: Item[];
    onSelect: (item: Item) => void;
}) {
    const handleClick = (item: Item) => {
        if (item.isSelect) return;
        onSelect(item);
    };
    return (
        <ul className={styles.container}>
            {list.map((item, idx) => (
                <li className={styles.item} key={idx}>
                    <span
                        className={item.isSelect ? styles.selected : ''}
                        onClick={() => handleClick(item)}
                    >
                        {item.name}
                    </span>
                    {item.aside ? (
                        <span className={item.isSelect ? styles.selected : ''}>
                            {item.aside}
                        </span>
                    ) : null}
                    {item.children && item.children.length > 0 && (
                        <Categorize
                            list={item.children}
                            onSelect={handleClick}
                        />
                    )}
                </li>
            ))}
        </ul>
    );
}

Categorize.propTypes = {
    list: PropTypes.array.isRequired,
    select: PropTypes.func,
};

export default Categorize;
