import React from 'react';

interface ProductProps {
    title: string;
    description: string;
    images: string[];
    price: number;
}

const Product: React.FC<ProductProps> = ({ title, description, images, price }) => {
    return (
        <div className="product">
            <h1>{title}</h1>
            <p>{description}</p>
            <div className="product-images">
                {images.map((image, index) => (
                    <img key={index} src={image} alt={title} />
                ))}
            </div>
            <h2>${price.toFixed(2)}</h2>
        </div>
    );
};

export default Product;