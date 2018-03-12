import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const ProductCard = props => {
  const { product } = props;

  return (
    <div className="product-card">
      {product.isBestSeller
        ? <img src={`${process.env.PUBLIC_URL}/assets/img/BestSeller1.png`} className="best-seller" />
        : null
      }
      {!product.isBestSeller && product.isNew
        ? <img src={`${process.env.PUBLIC_URL}/assets/img/New1.png`} className="new" />
        : null
      }
      {product.isNew}
      <img className="image" src={`${process.env.PUBLIC_URL}/assets/img/${product.image}`} />
      <a href="#">{product.label}</a>
      <a href="#">{product.description}</a>
      <a href="#">{product.price}</a>
      <div className="buttons">
        <button>QUICK ADD</button>
        <button>PERSONALIZE</button>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    category: PropTypes.number,
    color: PropTypes.number,
    description: PropTypes.string,
    id: PropTypes.number,
    isBestSeller: PropTypes.bool,
    isNew: PropTypes.bool,
    image: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
  }),
};

export default ProductCard;