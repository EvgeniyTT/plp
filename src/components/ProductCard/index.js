import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './style.css';

import AvailableColorsBar from '../AvailableColorsBar';

export class _ProductCard extends React.Component {

  constructor(props) {
    super(props);
    let selectedColorId = props.product.selectedColorId || props.product.colors[0].colorId
    this.state = { selectedColorId };
  }

  onColorClick = colorId => {
    this.setState({ selectedColorId: colorId });
  }

  render() {
    const { product, filters } = this.props;
    const colorFilter = filters.find(filter => filter.name === 'color');
    let selectedColor = product.colors.find(color => color.colorId === this.state.selectedColorId)

    console.log('product.colors: ', product.colors)
    console.log('this.state.selectedColorId: ', this.state.selectedColorId)
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
        <img className="image" src={`${process.env.PUBLIC_URL}/assets/img/${selectedColor.image}`} />
        <a href="#">{product.label}</a>
        <a href="#">{product.description}</a>
        <a href="#">${product.price}</a>

        <AvailableColorsBar colors={product.colors} onColorClick={this.onColorClick} selectedColorId={this.state.selectedColorId} />
   
  
        <div className="buttons">
          <button>QUICK ADD</button>
          <button>PERSONALIZE</button>
        </div>
      </div>
    );
  }
}

_ProductCard.propTypes = {
  product: PropTypes.shape({
    category: PropTypes.number,
    colors: PropTypes.array,
    description: PropTypes.string,
    id: PropTypes.number,
    isBestSeller: PropTypes.bool,
    isNew: PropTypes.bool,
    label: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
  }),
};

export const mapStateToProps = state => ({
  filters: state.filters
});

const ProductCard = connect(mapStateToProps)(_ProductCard);

export default ProductCard;