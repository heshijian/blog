import axios from 'axios';
import message from '@/components/Message/index';
const ins = axios.create();
ins.interceptors.request.use((config) => {
    return config;
});
ins.interceptors.response.use((response) => {
    
    if (response.data.code !== 0) {
        message({
            message: response.data.msg,
            type: 'error',
            duration: 1500
        });

        return null
    }
    return response.data;
});

export default ins
