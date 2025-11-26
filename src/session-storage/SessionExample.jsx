import React, { useEffect, useState } from 'react';
import './sessionExample.css';

const SessionExample = () => {

    const [formData, setFormData] = useState({
        id: '',
        productName: '',
        quantity: '',
        price: ''
    });

    const [products, setProducts] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [errors, setErrors] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);

    // Load from sessionStorage on mount
    useEffect(() => {
        const stored = sessionStorage.getItem("products");
        if (stored) {
            try {
                setProducts(JSON.parse(stored));
            } catch (error) {
                console.error("Error parsing data", error);
                sessionStorage.removeItem("products");
            }
        }
        setIsLoaded(true);
    }, []);

    // Save to sessionStorage when products change
    useEffect(() => {
        if (isLoaded) {
            sessionStorage.setItem("products", JSON.stringify(products));
        }
    }, [products, isLoaded]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const validate = () => {
        const newErrors = {};
        const { productName, quantity, price } = formData;

        if (!productName.trim()) {
            newErrors.productName = "Product Name is required!";
        } else if (!/^[A-Za-z\s]*$/.test(productName)) {
            newErrors.productName = "Product Name should only contain alphabets";
        }

        if (!quantity) newErrors.quantity = "Quantity is required!";
        else if (isNaN(quantity) || Number(quantity) < 1) {
            newErrors.quantity = "Quantity must be a positive number";
        }

        if (!price) newErrors.price = "Price is required!";
        else if (isNaN(price) || Number(price) <= 0) {
            newErrors.price = "Price must be a positive number";
        }

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        if (editMode) {
            setProducts(prev =>
                prev.map(product =>
                    product.id === formData.id ? {
                        ...formData,
                        quantity: Number(formData.quantity),
                        price: Number(formData.price)
                    } : product
                )
            );
            setEditMode(false);
        } else {
            const newProduct = {
                ...formData,
                id: Date.now().toString(),
                quantity: Number(formData.quantity),
                price: Number(formData.price)
            };
            setProducts([...products, newProduct]);
        }

        setFormData({ id: '', productName: '', quantity: '', price: '' });
        setErrors({});
    };

    const handleEdit = (product) => {
        setFormData(product);
        setEditMode(true);
        setErrors({});
    };

    const handleCancel = () => {
        setFormData({ id: '', productName: '', quantity: '', price: '' });
        setErrors({});
        setEditMode(false);
    };

    const handleClearAll = () => {
        if (window.confirm("Are you sure you want to clear all products?")) {
            setProducts([]);
            sessionStorage.removeItem("products");
            handleCancel();
        }
    };

    const handleDelete = (id) => {
        setProducts(products.filter(product => product.id !== id));
    };

    return (
        <div className="formnew">
            <h1>Product Details</h1>

            <form onSubmit={handleSubmit}>

                {/* Product Name */}
                <div>
                    <input
                        type="text"
                        name="productName"
                        value={formData.productName}
                        placeholder="Product Name"
                        onChange={handleChange}
                    />
                    {errors.productName && <p className="error">{errors.productName}</p>}
                </div>

                {/* Quantity */}
                <div>
                    <input
                        type="number"
                        name="quantity"
                        value={formData.quantity}
                        placeholder="Product Quantity"
                        onChange={handleChange}
                    />
                    {errors.quantity && <p className="error">{errors.quantity}</p>}
                </div>

                {/* Price */}
                <div>
                    <input
                        type="number"
                        name="price"
                        value={formData.price}
                        placeholder="Product Price"
                        onChange={handleChange}
                    />
                    {errors.price && <p className="error">{errors.price}</p>}
                </div>

                <button type="submit">
                    {editMode ? "Update Product" : "Add Product"}
                </button>

                {editMode && (
                    <button type="button" onClick={handleCancel} style={{ marginLeft: '10px' }}>
                        Cancel
                    </button>
                )}
            </form>

            {/* Product List Header */}
            <div className="list-header">
                <h2>Product List</h2>
                {products.length > 0 && (
                    <button className="clear-btn" onClick={handleClearAll}>
                        Clear All
                    </button>
                )}
            </div>

            {/* Table */}
            {products.length > 0 ? (
                <table>
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(product => (
                            <tr key={product.id}>
                                <td>{product.productName}</td>
                                <td>{product.quantity}</td>
                                <td>{product.price}</td>
                                <td>
                                    <button onClick={() => handleEdit(product)}>Edit</button>
                                    <button onClick={() => handleDelete(product.id)} style={{ marginLeft: '10px' }}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No Product Added Yet</p>
            )}
        </div>
    );
};

export default SessionExample;
