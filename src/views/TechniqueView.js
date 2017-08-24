import React from 'react';
import PropTypes from 'prop-types';
import VBButton from './VBButton';
import VBTextfield from './VBTextfield';
import VBNumberInput from './VBNumberInput';
import SelectorView from './SelectorView';
import SkillsContainer from '../SkillsContainer';

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
          selectorOptions={props.coreOptions}
          handleChange={props.changeCore}/>
        <VBNumberInput
          inputName="Core Power"
          inputValue={props.technique.core.power}
          handleChange={props.changePower}/>
        {props.chooseSkills ?
          <SkillsContainer
            skills={props.technique.skills}
            excludes={['Challenge', 'Character']}
            is_npc={props.is_npc}
            season={props.season}/> : null}
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
  coreOptions: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
  })).isRequired,
  chooseSkills: PropTypes.bool.isRequired,
  is_npc: PropTypes.bool.isRequired,
  season: PropTypes.number.isRequired
}

export default TechniqueView;
