import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchProducts } from '../../store/actions'
import ProductCard from '../ProductCard';
import './style.css';


export class _ProductList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    this.props.dispatch(fetchProducts());
  }
 
  render() {
    const {
      filteredProducts,
    } = this.props;

    return (
      <div className="product-list">
        { filteredProducts.map(product =>
          <ProductCard
            key={product.id + (((typeof product.selectedColorId !== 'undefined') && product.selectedColorId.toString()) || '')}
            product={product}
          />)
        }
      </div>
    );
  }
}

_ProductList.propTypes = {
};

_ProductList.defaultProps = {
  filteredProducts: []
};

export const mapStateToProps = state => ({
  filteredProducts: state.filteredProducts
});

const ProductList = connect(mapStateToProps)(_ProductList);

export default ProductList;
