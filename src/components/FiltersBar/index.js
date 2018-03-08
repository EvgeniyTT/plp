import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchFilters } from '../../store/actions'
import Filter from '../Filter';


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
      <div>
        { filters.map(filter => <Filter key={filter.id} filter={filter} />) }
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
