import React from 'react';
import PropTypes from 'prop-types';
import Styles from '../styles';

//An FSC (functional stateless component) that provides an input device.
const AttributeInput = (props) => {
  var style = Object.assign(Styles.AttributeInput, {gridArea: props.position})
  return (
    <div style={style}>
      {props.attributeName}: <input type="number" min="1" max={props.maxValue} value={props.attributeValue}
        onChange={props.changeAttribute}
        style={{width: '50px'}}/>
    </div>
  )
}

AttributeInput.propTypes = {
  attributeName: PropTypes.string.isRequired,
  attributeValue: PropTypes.number.isRequired,
  changeAttribute: PropTypes.func.isRequired,
  maxValue: PropTypes.number
};

export default AttributeInput;
