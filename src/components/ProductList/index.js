import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchProducts } from '../../store/actions'
import ProductCard from '../ProductCard';


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
      <div>
        { filteredProducts.map(product => <ProductCard key={product.id} product={product} />) }
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
