import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './style.css';

const AvailableColor = props => {
  const { color } = props;

  return (
    <div className={`color ${color.name} ${isSelected ? 'selected' : null}`}>
      <img src={`${process.env.PUBLIC_URL}/assets/img/${color.image}`} />
    </div>
  );
}

AvailableColor.propTypes = {
  color: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string
  }).isRequired
};

export default AvailableColor;
