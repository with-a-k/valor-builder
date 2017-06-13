import React from 'react';
import PropTypes from 'prop-types';

//An FSC (functional stateless component) that provides an checkbox for overrides.
const OverrideCheckbox = (props) => {
  return (
    <div>
      <p>{props.overrideName}:</p> <input type="checkbox"
        value={props.overrideState}
        onChange={props.toggleOverride}/>
    </div>
  )
}

AttributeInput.propTypes = {
  overrideName: PropTypes.string.isRequired,
  overrideState: PropTypes.bool.isRequired,
  toggleOverride: PropTypes.func.isRequired
};

export default OverrideCheckbox;
