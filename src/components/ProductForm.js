import React from 'react';
import { useForm } from 'react-hook-form';

const ProductForm = ({ onSubmit, initialData = {} }) => {
	const { register, handleSubmit, formState: { errors, isValid }, reset } = useForm({
		defaultValues: initialData,
		mode: 'onChange'
	});

	const submitHandler = (data) => {
		onSubmit(data);
		reset();
	};

	return (
		<form onSubmit={handleSubmit(submitHandler)}>
			<input
				{...register('name', { required: 'Введите название товара' })}
				placeholder="Название"
			/>
			{errors.name && <p style={{ color: 'red' }}>{errors.name.message}</p>}

			<input
				{...register('brand', { required: 'Введите бренд товара' })}
				placeholder="Бренд"
			/>
			{errors.brand && <p style={{ color: 'red' }}>{errors.brand.message}</p>}

			<input
				type="number"
				{...register('price', {
					required: 'Введите цену товара',
					min: { value: 1, message: 'Цена должна быть больше 0' }
				})}
				placeholder="Цена"
			/>
			{errors.price && <p style={{ color: 'red' }}>{errors.price.message}</p>}

			<button type="submit" disabled={!isValid}>Сохранить</button>
		</form>
	);
}

export default ProductForm;