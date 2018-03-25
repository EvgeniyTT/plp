import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchFilters } from '../../store/actions'
import Filter from '../Filter';
import './style.css';

export class _FiltersBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    this.props.dispatch(fetchFilters());
  }
 
  render() {
    const {
      filters,
    } = this.props;

    return (
      <div className='filters-bar'>
        <span>Filter:</span>
        { filters.map(filter => (
          <div key={filter.id} className="action-list__item sub-list-arrow">
            <div tabIndex="1" className="filters-bar__filter-link arrow">{filter.name.toUpperCase()}</div>
            <ul className="sub-action-list">
              <li><Filter key={filter.id} filter={filter} /></li>
            </ul>
          </div>
        ))}
      </div>
    );
  }
}

_FiltersBar.propTypes = {
};

_FiltersBar.defaultProps = {
  filters: []
};

export const mapStateToProps = state => ({
  filters: state.filters
});

const FiltersBar = connect(mapStateToProps)(_FiltersBar);

export default FiltersBar;
