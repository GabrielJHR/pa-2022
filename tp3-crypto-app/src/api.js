import axios from 'axios';

export const getAllData = async (crypto, currency) => {
    const API = axios.create({
        baseURL: `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${currency}`,
    });

    const response = await API.get();
    return response.data;
};