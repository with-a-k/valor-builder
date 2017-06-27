import React from 'react';
import PropTypes from 'prop-types';

//An FSC (functional stateless component) that provides a checkbox.
const VBButton = (props) => {
  return (
    <button onClick={props.buttonAction}>{props.buttonName}</button>
  )
}

VBButton.propTypes = {
  buttonName: PropTypes.string.isRequired,
  buttonAction: PropTypes.func.isRequired
};

export default VBButton;
