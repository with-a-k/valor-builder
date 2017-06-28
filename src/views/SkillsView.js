import React from 'react';
import VBButton from './VBButton';
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
              exclude={props.exclude}/>
  });

  return (
    <div>
      <VBButton
        buttonAction={props.addSkill}
        buttonName="Add Skill"/>
      <VBButton
        buttonAction={function() {console.log('Autosort to be implemented later')}}
        buttonName="Automatic Sort"/>
      {skillsDisplay}
    </div>
  )
}

export default SkillsView;
