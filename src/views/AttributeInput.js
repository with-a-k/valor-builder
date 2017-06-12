import React from 'react';
import PropTypes from 'prop-types';

//An FSC (functional stateless component) that provides an input device.
const AttributeInput = (props) => {
  return (
    <div>
      <p>{props.attributeName}:</p> <input type="number" min="1" max={props.maxValue} value={props.attributeValue}
        onChange={props.changeAttribute}/>
    </div>
  )
}

AttributeInput.propTypes = {
  attributeName: PropTypes.string.isRequired,
  attributeValue: PropTypes.number.isRequired,
  changeAttribute: PropTypes.func.isRequired,
  maxValue: PropTypes.number.isRequired
};

export default AttributeInput;
