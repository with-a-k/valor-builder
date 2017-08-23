import React from 'react';
import PropTypes from 'prop-types';
import VBButton from './VBButton';
import VBTextfield from './VBTextfield';
import VBNumberInput from './VBNumberInput';
import SelectorView from './SelectorView';
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
        <SelectorView
          selectorName="Technique Core"
          selectorOptions={props.coreNames}
          handleChange={props.changeCore}/>
        <VBNumberInput
          inputName="Core Power"
          inputValue={props.technique.core.power}
          handleChange={props.changePower}/>
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
  changeName: PropTypes.func.isRequired,
  changeCore: PropTypes.func.isRequired,
  changePower: PropTypes.func.isRequired,
  coreNames: PropTypes.arrayOf(PropTypes.string).isRequired,
  power: PropTypes.number.isRequired
}

export default TechniqueView;
