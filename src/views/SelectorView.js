import React from 'react';
import PropTypes from 'prop-types';

//An FSC (functional stateless component) that provides a dropdown select.
//This will primarily be used to set Technique attributes and for the
//entity type selector, since the options for those are limited
//and not likely to grow (unlike Skills, which are already too numerous
//for a select element to be practical).
const SelectorView = (props) => {
  var options = props.selectorOptions.map(function(option, index) {
    return <option key={index}>{option}</option>
  });
  return (
    <div>
      <p>{props.selectorName}:</p> <select name={props.selectorName}
        onChange={props.handleChange}>
        { options }
      </select>
    </div>
  )
}

AttributeInput.propTypes = {
  selectorName: PropTypes.string.isRequired,
  selectorOptions: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleChange: PropTypes.func.isRequired
};

export default SelectorView;
