import React, { useEffect, useMemo, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './CarouselItem.module.less';
import ImageLoader from '@/components/ImageLoader/Index';

type Size = {
    width: number;
    height: number;
};

type Pos = {
    x: number;
    y: number;
};

function CarouselItem({ info }) {
    const titleRef = useRef(null);
    const descRef = useRef(null);
    const [titleWidth, setTitleWidth] = useState(0);
    const [descWidth, setDescWidth] = useState(0);

    const containerRef = useRef(null);
    const imgRef = useRef(null);
    // 外层容器的尺寸
    const [containerSize, setContainerSize] = useState<Size>({
        width: 0,
        height: 0,
    });
    // 里层图片的尺寸
    const [innerSize, setInnerSize] = useState<Size>({
        width: 0,
        height: 0,
    });

    const [mousePosition, setMousePosition] = useState<Pos>({
        x: 0,
        y: 0,
    });

    useEffect(() => {
        setTitleWidth(titleRef.current.clientWidth);
        setDescWidth(descRef.current.clientWidth);

        setSize();
        moveToCenter()
        showWords();
        window.addEventListener('resize', setSize);
        return () => {
            window.removeEventListener('resize', setSize);
        };
        
    }, []);

    const moveToCenter = () => {
        setMousePosition({
            x: containerRef.current.clientWidth / 2,
            y: containerRef.current.clientHeight / 2
        })

    } 

    const setSize = () => {
        setContainerSize({
            width: containerRef.current.clientWidth,
            height: containerRef.current.clientHeight,
        });

        setInnerSize({
            width: imgRef.current.clientWidth,
            height: imgRef.current.clientHeight,
        });
    };

    const imgPosition = useMemo<React.CSSProperties>(() => {
        if (!innerSize.width || !containerSize.width) {
            return {};
        }
        const extraWidth = innerSize.width - containerSize.width;
        const extraHeigh = innerSize.height - containerSize.height;
        const left = (mousePosition.x / containerSize.width) * extraWidth
        const top = (mousePosition.y / containerSize.height) * extraHeigh
        return {
            transform: `translate(-${left}px, -${top}px)`
        };
    }, [innerSize, containerSize, mousePosition]);

    const onMouseMove = (e) => {
        // console.log(e.clientX, e.clientY);
        const rect = containerRef.current.getBoundingClientRect();
        const pos = {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        };
        setMousePosition(pos);
    };

    const onMouseLeave = () => {
        moveToCenter()
    }

    const showWords = () => {
        // console.log(titleRef.current.clientWidth)
        titleRef.current.style.width = 0;
        titleRef.current.style.opacity = 1;
        titleRef.current.style.transition = '1s';
        titleRef.current.clientWidth;
        titleRef.current.style.width = titleWidth + 'px';

        descRef.current.style.width = 0;
        descRef.current.style.opacity = 1;
        descRef.current.style.transition = '1.5s 1s';
        descRef.current.clientWidth;
        descRef.current.style.width = descWidth + 'px';
    };
    return (
        <li
            className={styles.container}
            ref={containerRef}
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
        >
            <div className={styles.img} style={imgPosition} ref={imgRef}>
                <ImageLoader
                    src={info.bigImg}
                    placeholder={info.midImg}
                    loaded={showWords}
                ></ImageLoader>
            </div>
            <div className={styles.title} ref={titleRef}>
                {info.title}
            </div>
            <div className={styles.desc} ref={descRef}>
                {info.description}
            </div>
        </li>
    );
}

CarouselItem.propTypes = {
    info: PropTypes.object.isRequired,
};

export default CarouselItem;
