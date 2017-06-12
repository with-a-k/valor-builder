import React from 'react';
import PropTypes from 'prop-types';

//An FSC (functional stateless component) that provides a label and value for a single character attribute.
const AttributeView = (props) => {
  return (
    <div>
      <p>{props.attributeName}:</p> <p>{props.attributeValue}</p>
    </div>
  )
}

AttributeView.propTypes = {
  attributeName: PropTypes.string.isRequired,
  attributeValue: PropTypes.number.isRequired
};

export default AttributeView;
