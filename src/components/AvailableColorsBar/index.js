import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './style.css';
import AvailableColor from '../AvailableColor';

const _AvailableColorsBar = props => {
  const { colors, filters, selectedColorId, onColorClick } = props;
  const colorFilter =  filters.find(filter => filter.name === 'color');

  return (
    <div className="colors-bar">
      {colors.map(color => {
        const colorItem = colorFilter.options.find(clr => clr.id === color.colorId);
        return <AvailableColor
                  key={colorItem.id}
                  colorItem={colorItem}
                  isSelected={color.colorId === selectedColorId}
                  onColorClick={onColorClick}
                />
      }
      )}
    </div>
  );
}

_AvailableColorsBar.propTypes = {
  colors: PropTypes.arrayOf(
    PropTypes.shape({
      colorId: PropTypes.number,
      isAvailable: PropTypes.bool,
      isBestSeller: PropTypes.bool,
      isPersonalize: PropTypes.bool,
      image: PropTypes.string
    })
  ),
  selectedColorId: PropTypes.number
};

export const mapStateToProps = state => ({
  filters: state.filters
});

const AvailableColorsBar = connect(mapStateToProps)(_AvailableColorsBar);

export default AvailableColorsBar;