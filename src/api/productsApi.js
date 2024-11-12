import axios from 'axios';

const API_URL = 'http://localhost:4000/api/products';

export const getProducts = async () => {
	const response = await axios.get(API_URL);
	return response.data;
};

export const addProduct = async (product) => {
	const response = await axios.post(API_URL, product);
	return response.data;
};

export const deleteProduct = async (productId) => {
	await axios.delete(`${API_URL}/${productId}`);
};

export const updateProduct = async (product) => {
	const response = await axios.put(`${API_URL}/${product.id}`, product);
	return response.data;
};