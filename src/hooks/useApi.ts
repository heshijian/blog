import { useState } from 'react';
import type { AxiosResponse } from 'axios';
import type { Res } from '@/api/request';

function useApi(
    apiFun: (...args: any[]) => Promise<AxiosResponse>
): [boolean, (...args: any[]) => Promise<Res>] {
    const [loading, setLoading] = useState(true);

    async function get(...args: any[]) {
        setLoading(true)
        const result = await apiFun(...args);
        setLoading(false);
        return result as unknown as Promise<Res>;
    }

    return [loading, get];
}
export default useApi;
