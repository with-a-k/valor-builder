import React from 'react';
import PropTypes from 'prop-types';
import VBButton from './VBButton';
import VBTextfield from './VBTextfield';
import VBNumberInput from './VBNumberInput';
import SkillSelector from '../SkillSelector';

const TechniqueView = (props) => {
  return (
    <div>
      <div>
        <VBTextfield
          fieldName="Name"
          fieldValue={props.technique.name}
          handleChange={props.changeName}/>
      </div>
      <div>
        <VBButton
          buttonAction={props.remove}
          buttonName="Remove this Technique"/>
      </div>
    </div>
  )
};

TechniqueView.propTypes = {
  technique: PropTypes.object,
  remove: PropTypes.func.isRequired,
  changeName: PropTypes.func.isRequired
}

export default TechniqueView;
