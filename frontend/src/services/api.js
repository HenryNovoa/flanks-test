const API_URL = 'http://localhost:3000/api';

export const fetchPositions = async () => {
    const response = await fetch(`${API_URL}/positions`);
    return response.json();
};

export const fetchPositionById = async (id) => {
    const response = await fetch(`${API_URL}/positions/${id}`);
    return response.json();
};

export const uploadFile = async (file) => {
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch(`${API_URL}/upload`, {
        method: 'POST',
        body: formData,
    });

    return response;
};
