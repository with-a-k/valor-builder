import React from 'react';
import PropTypes from 'prop-types';
import VBButton from './VBButton';
import VBNumberInput from './VBNumberInput';
import SkillSelector from '../SkillSelector';

//An FSC that views a single Skill. This is a "high-level" FSC which
//has a number of children.
const SkillView = (props) => {
  return (
    <div>
      <div>
        <SkillSelector
          changeSkill={props.changeSkill}
          includeTags={props.includeTags}
          excludeTags={props.excludeTags}
          value={props.skillSelectValue}
          is_npc={props.is_npc}
          season={props.season}
          retrainSkillPoints={props.retrainSkillPoints}
          flawCap={props.flawCap}
          flawPoints={props.flawPoints}
          ownedSkillNames={props.skillNames}/>
      </div>
      <div>
        <VBNumberInput
          inputName={"Skill Level"}
          inputValue={props.skillLevel}
          handleChange={props.changeSkillLevel}
          maxValue={props.maxLevel}/>
        <VBButton
          buttonAction={props.remove}
          buttonName="Remove this Skill"/>
      </div>
    </div>
  )
}

SkillView.propTypes = {
  changeSkill: PropTypes.func.isRequired,
  changeSkillLevel: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  includeTags: PropTypes.array.isRequired,
  excludeTags: PropTypes.array.isRequired,
  season: PropTypes.number.isRequired,
  skillSelectValue: PropTypes.object,
  is_npc: PropTypes.bool.isRequired,
  retrainSkillPoints: PropTypes.number.isRequired,
  flawCap: PropTypes.number.isRequired,
  flawPoints: PropTypes.number.isRequired,
  skillNames: PropTypes.arrayOf(PropTypes.string),
  skillLevel: PropTypes.number.isRequired,
  maxLevel: PropTypes.number
};

export default SkillView;
