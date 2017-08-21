import React from 'react';
import PropTypes from 'prop-types';

//An FSC (functional stateless component) that provides a label and value.
const VBLabeledValue = (props) => {
  return (
    <div style={{gridArea: props.position}}>
      {props.labeledName}: {props.labeledValue}
    </div>
  )
}

VBLabeledValue.propTypes = {
  labeledName: PropTypes.string.isRequired,
  labeledValue: PropTypes.number.isRequired,
  position: PropTypes.string
};

export default VBLabeledValue;
