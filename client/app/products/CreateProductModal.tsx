import React, { ChangeEvent, FormEvent, useState } from 'react'
import { v4 } from 'uuid';
import Header from '../(components)/Header';

type ProductFormData = {
    name: string;
    price: number;
    stockQuantity: number; 
    rating: number;
}

type CreateProductModalProps = {
    isOpen: boolean;
    onClose: () => void;
    onCreate: (FormData: ProductFormData) => void;
}

const CreateProductModal = ({isOpen, onClose, onCreate}: CreateProductModalProps) => {
    const [formData, setFormData] = useState({
        productId: v4(),
        name: "",
        price: 0,
        stockQuantity: 0,
        rating: 0,
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const {name, value} = e.target;
      setFormData({
        ...formData,
        [name]: 
        name === 'price' || name === 'stockQuantity' || name === 'rating' ? parseFloat(value) : value,
      })
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      onCreate(formData);
      onClose();
    }

    if (!isOpen) return null;

    const labelCssStyles = "block text-sm font-medium text-gray-700";
    const inputCssStyles = "block w-full mb-2 p-2 border-gray-500 border-2 rounded-md";


  return (
    <div className='fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-20'>
      <div className='relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white'>
        <Header name="Create New Product"/>
        <form onSubmit={handleSubmit}>
          {/* Product name */}
            <label htmlFor="productName" className={labelCssStyles}>
                Product Name
            </label>
            <input type="text" name="name" placeholder='Name' onChange={handleChange}
            value={formData.name}
            className={inputCssStyles}
            />
          {/* Price */}
            <label htmlFor="productPrice" className={labelCssStyles}>
                Price
            </label>
            <input type="text" name="price" placeholder='Price' onChange={handleChange}
            value={formData.price}
            className={inputCssStyles}
            />
          {/* Stock Quantity */}
            <label htmlFor="stockQuantity" className={labelCssStyles}>
                Stock Quantity
            </label>
            <input type="text" name="stockQuantity" placeholder='Stock Quantity' onChange={handleChange}
            value={formData.name}
            className={inputCssStyles}
            />
         {/* Rating */}
         <label htmlFor="rating" className={labelCssStyles}>
                Stock Quantity
            </label>
            <input type="number" name="rating" placeholder='Rating' onChange={handleChange}
            value={formData.name}
            className={inputCssStyles}
            />

            {/* create actions */}
            <button type="submit" className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700'>
              Create
            </button>
        </form>
      </div>
    </div>
  )
}

export default CreateProductModal
