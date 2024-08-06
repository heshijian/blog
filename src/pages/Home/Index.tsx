import { useEffect, useMemo, useRef, useState } from 'react';
import useApi from '@/hooks/useApi';
import styles from './Index.module.less';
import { getBanners } from '@/api/banner';
import CarouselItem from './CarouselItem';
import Icon from '@/components/Icon/Index';
import Loading from '@/components/Loading/Index';

export type BannerItem = {
    id: number;
    midImg: string;
    bigImg: string;
    title: string;
    description: string;
    loaded: boolean;
};

export default function Index() {
    const [banners, setBanners] = useState<BannerItem[]>([]);
    // 当前第几张
    const [index, setIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const [containerHeight, setContainerHeight] = useState(0);
    const [switching, setSwitching] = useState(false);
    const [loading, getApi] = useApi(getBanners);
    const marginTop = useMemo(() => {
        return -index * containerHeight;
    }, [index, containerHeight]);

    useEffect(() => {
        containerRef.current &&
            setContainerHeight(containerRef.current.clientHeight);

        async function fetData() {
            const { data } = await getApi();
            if (data.length > 0) {
                (data as BannerItem[]).forEach((item, idx) => {
                    if (idx === 0) {
                        item.loaded = true;
                    } else {
                        item.loaded = false;
                    }
                });
            }
            setBanners(data);
        }
        fetData();

        // 窗口resize 重新计算
        const resizeHandler = function () {
            containerRef.current &&
                setContainerHeight(containerRef.current.clientHeight);
        };
        window.addEventListener('resize', resizeHandler);
        return () => {
            window.removeEventListener('resize', resizeHandler);
        };
    }, []);

    function changeIndex(idx: number) {
        if (!banners[idx].loaded) {
            const newData = [...banners];
            newData[idx].loaded = true;
            setBanners(newData);
        }
        setIndex(idx);
    }

    function onWheel(e: any) {
        if (switching) return;

        if (e.deltaY < -5 && index > 0) {
            setSwitching(true);
            changeIndex(index - 1);
        } else if (e.deltaY > 5 && index < banners.length - 1) {
            setSwitching(true);
            changeIndex(index + 1);
        }
    }

    function ulTransitionEnd() {
        setSwitching(false);
    }

    return (
        <Loading loading={loading}>
            <div
                className={styles.container}
                ref={containerRef}
                onWheel={onWheel}
            >
                <ul
                    className={styles.carouselContainer}
                    style={{
                        marginTop: marginTop + 'px',
                    }}
                    onTransitionEnd={ulTransitionEnd}
                >
                    {banners.map((item) => {
                        return (
                            item.loaded && (
                                <CarouselItem info={item} key={item.id} />
                            )
                        );
                    })}
                </ul>
                {index > 0 && (
                    <div
                        className={`${styles.icon} ${styles.iconUp}`}
                        onClick={() => changeIndex(index - 1)}
                    >
                        <Icon type="arrowup" />
                    </div>
                )}
                {index < banners.length - 1 && (
                    <div
                        className={`${styles.icon} ${styles.iconDown}`}
                        onClick={() => changeIndex(index + 1)}
                    >
                        <Icon type="arrowdown" />
                    </div>
                )}

                <ul className={styles.indicator}>
                    {banners.map((item, idx) => (
                        <li
                            key={item.id}
                            className={index === idx ? styles.active : ''}
                            onClick={() => changeIndex(idx)}
                        ></li>
                    ))}
                </ul>
            </div>
        </Loading>
    );
}
