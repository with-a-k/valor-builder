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
            excludes={props.exclude}
            level={props.characterLevel}
            is_npc={props.is_npc}
            //Boost Techniques have access to skills from the next season.
            //Transformation Techniques have access to all skills regardless of season.
            season={props.technique.core.name === "Boost Core" ? props.season + 1 :
              props.technique.core.name === "Transformation Core" ? 4 : props.season}
            //Non-Weaken Techniques should not take Flaws under any circumstance.
            flawCap={props.technique.core.name === "Weaken Core" ? props.technique.core.power : 0}
            flawPoints={props.flawPoints}
            freeSkillPoints={props.freeSp}
            addSkill={props.addSkill}
            updateSkill={props.updateSkill}
            removeSkill={props.removeSkill}/>
          : null}
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
  season: PropTypes.number.isRequired,
  characterLevel: PropTypes.number.isRequired,
  exclude: PropTypes.arrayOf(PropTypes.string),
  freeSp: PropTypes.number.isRequired,
  flawPoints: PropTypes.number.isRequired,
  addSkill: PropTypes.func.isRequired,
  updateSkill: PropTypes.func.isRequired,
  removeSkill: PropTypes.func.isRequired
}

export default TechniqueView;
