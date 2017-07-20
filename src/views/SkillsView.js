import React from 'react';
import VBButton from './VBButton';
import VBLabeledValue from './VBLabeledValue';
import SkillContainer from '../SkillContainer';

//An FSC that views all Skills. This is a "high-level" FSC which
//has a number of children.
const SkillsView = (props) => {
  var skillsDisplay = props.skills.map(function(skillObject) {
    return <SkillContainer
              key={skillObject.id}
              id={skillObject.id}
              skill={skillObject}
              removeSkill={props.removeSkill}
              updateSkill={props.updateSkill}
              is_npc={props.is_npc}
              season={props.season}
              exclude={props.exclude}
              flawCap={props.flawCap}
              freeSkillPoints={props.freeSkillPoints}
              flawPoints={props.flawPoints}
              skillNames={props.skillNames}/>
  });

  return (
    <div>
      <VBButton
        buttonAction={props.addSkill}
        buttonName="Add Skill"/>
      <VBLabeledValue
        labeledName="Available SP"
        labeledValue={props.freeSkillPoints}/>
      {skillsDisplay}
    </div>
  )
}

export default SkillsView;
