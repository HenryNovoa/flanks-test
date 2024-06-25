const API_URL = 'http://localhost:3000/api';

export const fetchPositions = async ({ page = 1, limit = 10 }) => {
    const response = await fetch(`${API_URL}/positions?page=${page}&limit=${limit}`);
    return response.json();
};

export const fetchPositionById = async (id) => {
    const response = await fetch(`${API_URL}/positions/${id}`);
    return response.json();
};

export const fetchCurrencyDistribution = async () => {
    const response = await fetch(`${API_URL}/positions/currencyDistribution`);
    return response.json();
}


export const fetchEntityDistribution = async () => {
    const response = await fetch(`${API_URL}/positions/entityDistribution`);
    return response.json();
}

export const fetchTypeInvestmentDistribution = async () => {
    const response = await fetch(`${API_URL}/positions/typeInvestmentDistribution`);
    return response.json();
}


export const uploadFile = async (file) => {
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch(`${API_URL}/upload`, {
        method: 'POST',
        body: formData,
    });

    return response;
};
