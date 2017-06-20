import React from 'react';
import PropTypes from 'prop-types';

//An FSC (functional stateless component) that provides a text field.
//Aside from being used for the character name field, this is expected
//to be used for certain Skills such as Companion or Elemental Resistance.
const VBTextfield = (props) => {
  return (
    <div>
      <p>{props.fieldName}:</p> <input type="text"
        value={props.fieldValue}
        onChange={props.handleChange}/>
    </div>
  )
}

VBTextfield.propTypes = {
  fieldName: PropTypes.string.isRequired,
  fieldValue: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default VBTextfield;
