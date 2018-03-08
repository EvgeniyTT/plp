import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  filterColor,
  filterCategory
} from '../../store/actions';

export class _Filter extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }
 

  render() {
    const {
      content,
    } = this.props;

    return (
      <div>
        <label htmlFor="color">color</label>
        <input id="color" type="checkbox" />
      </div>
    );
  }
}

_Filter.propTypes = {
};

_Filter.defaultProps = {
  filters: []
};

export const mapStateToProps = state => ({
  content: state.content
});

export const mapDispatchToProps = dispatch => (
  bindActionCreators({
    filterCategory,
    filterColor
  }, dispatch)
);

const Filter = connect(mapStateToProps, mapDispatchToProps)(_Filter);

export default Filter;
