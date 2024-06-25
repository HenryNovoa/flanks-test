import { fetchTypeInvestmentDistribution } from '../services/api';
import { useFetch } from './useFetch';

export const useTypeInvestmentDistribution = () => {
    const { data, loading, error } = useFetch(fetchTypeInvestmentDistribution);
    return { typeInvestmentDistribution: data, loading, error };
};
