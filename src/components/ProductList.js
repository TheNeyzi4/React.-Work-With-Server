import React, { useState, useEffect } from 'react';
import Product from './Product';
import ProductForm from './ProductForm';
import { getProducts, addProduct, deleteProduct, updateProduct } from '../api/productsApi';

const ProductList = () => {
	const [products, setProducts] = useState([]);
	const [editingProduct, setEditingProduct] = useState(null);

	useEffect(() => {
		const fetchProducts = async () => {
			const productsData = await getProducts();
			setProducts(productsData);
		};
		fetchProducts();
	}, []);

	const handleAddProduct = async (product) => {
		const newProduct = await addProduct(product);
		setProducts([...products, newProduct]);
	};

	const handleDeleteProduct = async (productId) => {
		await deleteProduct(productId);
		setProducts(products.filter((product) => product.id !== productId));
	};

	const handleEditProduct = (product) => {
		setEditingProduct(product);
	};

	const handleUpdateProduct = async (updatedProduct) => {
		const product = await updateProduct(updatedProduct);
		setProducts(
			products.map((p) => (p.id === product.id ? product : p))
		);
		setEditingProduct(null);
	};

	return (
		<div>
			<h2>Список товаров</h2>
			{editingProduct ? (
				<ProductForm
					onSubmit={handleUpdateProduct}
					initialData={editingProduct}
				/>
			) : (
				<ProductForm onSubmit={handleAddProduct} />
			)}
			<div>
				{products.map((product) => (
					<Product
						key={product.id}
						product={product}
						onDelete={handleDeleteProduct}
						onUpdate={handleEditProduct}
					/>
				))}
			</div>
		</div>
	);
}

export default ProductList;