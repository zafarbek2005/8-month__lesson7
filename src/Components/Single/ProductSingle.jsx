import React from 'react';
import { useParams } from 'react-router-dom';
import './single.scss'; 
import { useGetDetailProductsQuery } from '../redux/UserApi';

const ProductSingle = () => {
    let { id } = useParams();
    const { data: product, isLoading: isLoadingProduct } = useGetDetailProductsQuery(id);

    if (isLoadingProduct) {
        return <div>Loading...</div>;
    }
    console.log(product?.data);

    return (
        <div className="product-single-container container">
            {product ? (
                <div key={product.id} className="product-single-item">
                    <img src={product?.data?.urls} alt={product.name} className="product-single-image" />
                    <div className="product-single-details">
                        <h2 className="product-single-name">{product?.data?.name}</h2>
                        <p className="product-single-description">{product?.data?.description}</p>
                        <p className="product-single-price">${product?.data?.price}</p>
                        <button className="add-to-cart-button">Add to Cart</button>
                    </div>
                </div>
            ) : (
                <p>Product not found</p>
            )}
        </div>
    );
};

export default ProductSingle;
