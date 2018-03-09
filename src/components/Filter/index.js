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
    this.state = { ...props.filter, optionsId: [] };
  }

  toggleChange = event => {
    const filterId = parseInt(event.target.id);
    let optionsId = this.state.optionsId;
    if (event.target.checked) {
      optionsId.push(filterId);
    } else {
      optionsId = optionsId.filter(id => id !== filterId);
    }
    this.setState({ ...this.state.filter, optionsId }, () => { this.props.dispatch(filterProducts(this.state)) })
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
            <input id={option.id} name={option.name} type="checkbox" onChange={this.toggleChange} />
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
