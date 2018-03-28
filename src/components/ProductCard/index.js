import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './style.css';

import AvailableColorsBar from '../AvailableColorsBar';

export class _ProductCard extends React.Component {

  constructor(props) {
    super(props);
    let selectedColorId = typeof props.product.selectedColorId === 'undefined' ? props.product.colors[0].colorId : props.product.selectedColorId
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
        {selectedColor.isBestSeller
          ? <img src={`${process.env.PUBLIC_URL}/assets/img/best-seller.png`} className="best-seller" />
          : null
        }
        {!selectedColor.isBestSeller && selectedColor.isNew
          ? <img src={`${process.env.PUBLIC_URL}/assets/img/new.png`} className="new" />
          : null
        }
        <img className="image" src={`${process.env.PUBLIC_URL}/assets/img/${selectedColor.image}`} />
        <a href="#">{product.label}</a>
        <a href="#">{product.description}</a>
        <a href="#">${selectedColor.price}</a>

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