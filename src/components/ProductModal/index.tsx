import React from 'react';
import './ProductModal.css';

interface ProductModalProps {
  product: {
    title: string;
    images: string[];
    description: string;
    price: number;
  };
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  console.log('ProductModal received product:', product);

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{product.title}</h2>
        <img src={product.images[0]} alt={product.title} />
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ProductModal;
