import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import styles from './Index.module.less';

function Pager({
    current = 1,
    total = 0,
    limit = 10,
    visibleNumber = 10,
    onPageChange = (_: number) => {
        _;
    },
}) {
    const pageNumber = useMemo(() => {
        return Math.ceil(total / limit);
    }, [total, limit]);

    const visibleMin = useMemo(() => {
        const min = current - Math.floor(visibleNumber / 2);
        return min < 1 ? 1 : min;
    }, [current, visibleNumber]);

    const visibleMax = useMemo(() => {
        const max = visibleMin + visibleNumber - 1;
        return max > pageNumber ? pageNumber : max;
    }, [visibleMin, visibleNumber, pageNumber]);

    const numbers = useMemo(() => {
        const nums = [];
        for (let i = visibleMin; i <= visibleMax; i++) {
            nums.push(i);
        }
        return nums;
    }, [visibleMin, visibleMax]);

    function clickHandle(p: number) {
        let n = 0;
        if (p < 1) {
            n = 1;
        }
        if (p > pageNumber) {
            n = pageNumber;
        }

        if (p === current) {
            return;
        }

        n = p;

        onPageChange(n);
    }

    return pageNumber > 1 ? (
        <div className={styles.container}>
            <a
                onClick={() => clickHandle(1)}
                className={current === 1 ? styles.disabled : undefined}
            >
                |&lt;&lt;
            </a>
            <a
                onClick={() => clickHandle(current - 1)}
                className={current === 1 ? styles.disabled : undefined}
            >
                &lt;&lt;
            </a>
            {numbers.map((n) => {
                return (
                    <a
                        onClick={() => clickHandle(n)}
                        key={n}
                        className={n === current ? styles.active : undefined}
                    >
                        {n}
                    </a>
                );
            })}
            <a
                onClick={() => clickHandle(current + 1)}
                className={current === pageNumber ? styles.disabled : undefined}
            >
                &gt;&gt;
            </a>
            <a
                onClick={() => clickHandle(pageNumber)}
                className={current === pageNumber ? styles.disabled : undefined}
            >
                &gt;&gt;|
            </a>
        </div>
    ) : null;
}

Pager.propTypes = {
    current: PropTypes.number,
    total: PropTypes.number,
    limit: PropTypes.number,
    visibleNumber: PropTypes.number,
    onPageChange: PropTypes.func,
};

export default React.memo(Pager);
