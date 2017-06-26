import React from 'react';
import PropTypes from 'prop-types';

//An FSC (functional stateless component) that provides a checkbox.
const VBCheckbox = (props) => {
  return (
    <div style={{gridArea: props.position}}>
      {props.toggleName}: <input type="checkbox"
        checked={props.toggleState}
        onChange={props.toggleChange}/>
    </div>
  )
}

VBCheckbox.propTypes = {
  toggleName: PropTypes.string.isRequired,
  toggleState: PropTypes.bool.isRequired,
  toggleChange: PropTypes.func.isRequired
};

export default VBCheckbox;
