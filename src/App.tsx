import { useState } from 'react';
import styles from './App.module.less';
// import Avatar from '@/components/Avatar/Index.tsx'
// import Icon from '@/components/Icon/Index.tsx'
// import Pager from '@/components/Pager/Index'
// import Empty from '@/components/Empty/Index'
// import ImageLoader from '@/components/ImageLoader/Index';
// import Contact from '@/components/SiteAside/Contact/Index';
// import Menu from '@/components/SiteAside/Menu/Index';
import SiteAside from '@/components/SiteAside/Index';
import Layout from '@/components/Layout/Index';

import RouterConfig from '@/router/index';

function App() {
    const [total, setTotal] = useState(300);
    const [current, setCurrent] = useState(10);
    function onPageChange(num: number) {
        console.log(num);
        setCurrent(num);
    }

    function loaded() {}
    return (
        <>
            {/* <Avatar url='https://wx2.sinaimg.cn/mw690/bb955ac4gy1hqc0gc4vewj20u00u077l.jpg'></Avatar> */}
            {/* <Icon type='cuowu' style={{fontSize: '40px'}}/> */}
            {/* <Pager total={total} current={current} visibleNumber={15} onPageChange={onPageChange}/> */}
            {/* <div
                style={{
                    width: '500px',
                    height: '400px',
                    border: '1px solid',
                    margin: '0 auto',
                    position: 'relative'
                }}
            >
                <Empty />
            </div> */}
            {/* <div
                style={{
                    width: '500px',
                    height: '400px',
                    border: '1px solid ',
                }}
            >
                <ImageLoader
                    src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304"
                    placeholder="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100"
                    loaded={loaded}
                />
            </div> */}
            {/* <div
                style={{
                    width: '400px',
                    height: '600px',
                    border: '1px solid',
                    background: '#000',
                    margin: '0 auto',
                    paddingTop: '100px'
                }}
            >   
                <Menu />
                <Contact />
            </div> */}
            {/* <div
                style={{
                    width: '250px',
                    height: '600px',
                    border: '1px solid',
                    margin: '0 auto',
                }}
            >
                <SiteAside />
            </div> */}
            {/* <div
                style={{
                    width: '60%',
                    height: '600px',
                    border: '1px solid',
                }}
            >
                <Layout>
                    {{
                        left: <div className={styles.left}>左边栏区域</div>,
                        main: (
                            <div className={styles.main}>
                                主区域主区域主区域主区域主区域主区域主区域主区域主区域主区域主区域主区域主区域主区域主区域主区域主区域主区域主区域主区域主区域主区域主区域主区域主区域主区域主区域主区域主区域主区域主区域主区域主区域主区域主区域主区域主区域主区域主区域主区域主区域主区域主区域主区域主区域主区域主区域主区域主区域主区域主区域主区域主区域主区域主区域主区域主区域主区域主区域主区域主区域主区域主区域
                            </div>
                        ),
                        // right: <div className={styles.right}>右边栏区域</div>,
                    }}
                </Layout>
            </div> */}
            <div className={styles.container}>
                <Layout>
                    {{
                        left: (
                            <div className={styles.left}>
                                <SiteAside />
                            </div>
                        ),
                        main: <RouterConfig />,
                        // right: <div className={styles.right}>右边栏区域</div>,
                    }}
                </Layout>
            </div>
        </>
    );
}

export default App;
