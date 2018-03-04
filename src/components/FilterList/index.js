import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  filterColor,
  filterCategory
} from '../../store/actions';

export class _FilterList extends React.Component {

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
        
      </div>
    );
  }
}

_FilterList.propTypes = {
  addProvider: PropTypes.func,
  content: PropTypes.object,
  closePreferencesMessage: PropTypes.func,
  demographicsZip: PropTypes.string,
  fitBounds: PropTypes.func,
  handleFilterSubmit: PropTypes.func,
  handleRemoveProvider: PropTypes.func,
  handleMapChange: PropTypes.func,
  handleMemberSelectDone: PropTypes.func,
  handlePageChange: PropTypes.func,
  isMessageShown: PropTypes.bool,
  initIfNeededAndFetchDemographics: PropTypes.func,
  isSelectMembers: PropTypes.bool,
  members: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string
  })),
  providerSearch: PropTypes.shape({
    searchCriteria: PropTypes.string,
    pageNumber: PropTypes.number,
    pageSize: PropTypes.number,
    network: PropTypes.shape({
      aggregations: PropTypes.object,
      providers: PropTypes.array,
      totalCount: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
      ])
    }),
    locationCenter: PropTypes.shape({
      lat: PropTypes.number,
      lng: PropTypes.number
    })
  }),
  providerSearchConfig: PropTypes.object,
  removeProvider: PropTypes.func,
  selectedProviders: PropTypes.arrayOf(PropTypes.shape({
    facilityName: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    degree: PropTypes.string
  }))
};

_FilterList.defaultProps = {
  providerSearch: {
    pageNumber: 1,
    pageSize: 10,
    searchCriteria: ''
  },
  members: [],
  selectedProviders: []
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

const FilterList = connect(mapStateToProps, mapDispatchToProps)(_FilterList);

export default FilterList;
