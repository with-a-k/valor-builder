import React from 'react';
import PropTypes from 'prop-types';

//An FSC (functional stateless component) that provides a checkbox.
const VBCheckbox = (props) => {
  return (
    <div>
      <p>{props.toggleName}:</p> <input type="checkbox"
        value={props.toggleState}
        onChange={props.toggle}/>
    </div>
  )
}

AttributeInput.propTypes = {
  toggleName: PropTypes.string.isRequired,
  toggleState: PropTypes.bool.isRequired,
  toggleOverride: PropTypes.func.isRequired
};

export default VBCheckbox;
