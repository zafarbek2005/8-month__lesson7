import React, { useState } from 'react';
import { useGetInputValue } from '../hooks/useGetInpuValue';
import { useCreateProductMutation } from '../redux/UserApi';
import { Form } from 'react-router-dom';
import { TailSpin } from 'react-loader-spinner';
import './Create.scss';

const initialState = {
    title: '',
    price: '',
    oldPrice: '',
    category: '',
    units: '',
    description: '',
    info: '',
};

const CreateProduct = () => {
    const [file, setFile] = useState([]);
    const { state, handleChange } = useGetInputValue(initialState);
    const [createProduct, { isError, isLoading, isSuccess }] = useCreateProductMutation();

    const handleFileChange = (e) => {
        setFile(e.target.files);
    };

    const handleCreateProduct = (e) => {
        e.preventDefault();
        if (!state) return; 

        let form = new FormData();
        form.append('title', state.title);
        form.append('price', state.price);
        form.append('oldPrice', state.oldPrice);
        form.append('category', state.category);
        form.append('units', state.units);
        form.append('description', state.description);
        form.append('info', JSON.stringify({}));

        Array.from(file).forEach(img => {
            form.append('files', img, img.name);
        });

        createProduct(form);
    };

    if (!state) return <div>Loading...</div>; 

    return (
        <div className="create-product-container">
            <h2>Create Product</h2>
            <Form onSubmit={handleCreateProduct}>
                <div className="form-group">
                    <label>Title</label>
                    <input type="text" name="title" value={state.title} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Price</label>
                    <input type="text" name="price" value={state.price} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Old Price</label>
                    <input type="text" name="oldPrice" value={state.oldPrice} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Category</label>
                    <input type="text" name="category" value={state.category} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Units</label>
                    <input type="text" name="units" value={state.units} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea name="description" value={state.description} onChange={handleChange}></textarea>
                </div>
                <div className="form-group">
                    <label>Images</label>
                    <input type="file" name="files" onChange={handleFileChange} multiple />
                </div>
                <button type="submit" disabled={isLoading}>
                    {isLoading ? <TailSpin color="#00BFFF" height={20} width={20} /> : 'Create Product'}
                </button>
                {isError && <p className="error">Error creating product</p>}
                {isSuccess && <p className="success">Product created successfully</p>}
            </Form>
        </div>
    );
};
                        
export default CreateProduct;
