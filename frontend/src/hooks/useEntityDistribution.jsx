import { fetchEntityDistribution } from '../services/api';
import { useFetch } from './useFetch';

export const useEntityDistribution = () => {
    const { data, loading, error } = useFetch(fetchEntityDistribution);
    return { entityDistribution: data, loading, error };
};
