import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './style.css';

const AvailableColor = props => {
  const { colorItem, isSelected, onColorClick } = props;

  const divStyle = {
    color: colorItem.color,
    backgroundImage: `url(${colorItem.image})`,
  };
  return (
    <div
      key={colorItem.id}
      className={`color ${colorItem.name}${isSelected ? ' selected' : ''}`}
      onClick={() => { onColorClick(colorItem.id) }}
      style={divStyle}>
    </div>
  )
}

AvailableColor.propTypes = {
  colorItem: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string
  }).isRequired
};

export default AvailableColor;
