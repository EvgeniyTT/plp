import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { filterProducts } from '../../store/actions';
import './style.css';

import {
  filterColor,
  filterCategory
} from '../../store/actions';

export class _Filter extends React.Component {

  constructor(props) {
    super(props);
    this.filter = props.filter;
    this.state = {
      [props.filter.name]: []
    };
  }

  toggleChange = event => {
    if (event.target.checked) {
      this.state[this.filter.name].push(event.target.id)
      this.setState({ [this.filter.name]: this.state[this.filter.name]})
    } else {
      this.setState({ [this.filter.name]: this.state[this.filter.name].filter(id => id !== event.target.id) })
    }
    this.props.dispatch(filterProducts(this.state));
  }

  render() {
    const {
      filter,
    } = this.props;

    return (
      <div className={`filter ${filter.name}`}>
        {filter.options.map(option => (
          <div className={option.name} key={option.id}>
            <label htmlFor={option.id}>{option.label}</label>
            <input id={option.id} type="checkbox" onChange={this.toggleChange} />
          </div>
        ))}
      </div>
    );
  }
}

_Filter.propTypes = {
  filter: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      label: PropTypes.string,
      name: PropTypes.string,
    }))
  }).isRequired
};

// export const mapDispatchToProps = dispatch => (
//   bindActionCreators({
//     filterProducts
//   }, dispatch)
// );

const Filter = connect(null, null)(_Filter);

export default Filter;
