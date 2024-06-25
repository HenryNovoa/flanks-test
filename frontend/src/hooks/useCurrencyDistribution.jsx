import { fetchCurrencyDistribution } from '../services/api';
import { useFetch } from './useFetch';

export const useCurrencyDistribution = () => {
    const { data, loading, error } = useFetch(fetchCurrencyDistribution);
    return { currencyDistribution: data, loading, error };
};
