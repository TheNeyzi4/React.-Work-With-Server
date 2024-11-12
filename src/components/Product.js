import React from 'react';

const Product = ({ product, onDelete, onUpdate }) => {
	return (
		<div>
			<h3>{product.name}</h3>
			<p>Бренд: {product.brand}</p>
			<p>Цена: {product.price}</p>
			<button onClick={() => onDelete(product.id)}>Удалить</button>
			<button onClick={() => onUpdate(product)}>Редактировать</button>
		</div>
	);
}

export default Product;