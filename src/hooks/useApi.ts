import { useState } from 'react';

function useApi(apiFun) {
    const [loading, setLoading] = useState(true);

    async function get() {
        const result = await apiFun()
        setLoading(false)
        return result
    }

    return [loading, get];
}
export default useApi;
