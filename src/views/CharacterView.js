import React from 'react';
import PropTypes from 'prop-types';
import VBTextfield from './VBTextfield';
import CharacterAttributesContainer from '../CharacterAttributesContainer';
import SkillsContainer from '../SkillsContainer';

const CharacterView = (props) => {
  return (
    <div>
      <p>This (CharacterView) is still being built out.</p>
      <VBTextfield
        fieldName = "Name"
        fieldValue = {props.character.attributes.name}
        handleChange = {props.handleRename}/>
      <CharacterAttributesContainer
        level = {props.character.attributes.level}
        strength = {props.character.attributes.strength}
        agility = {props.character.attributes.agility}
        spirit = {props.character.attributes.spirit}
        mind = {props.character.attributes.mind}
        guts = {props.character.attributes.guts}
        skill_bonuses = {props.character.attributes.skill_bonuses}
        character_type = {props.character_type}
        is_npc = {props.character.is_npc}
        maxSp = {props.maxSp}
        handleStrengthChange = {props.handleStrengthChange}
        handleAgilityChange = {props.handleAgilityChange}
        handleSpiritChange = {props.handleSpiritChange}
        handleMindChange = {props.handleMindChange}
        handleGutsChange = {props.handleGutsChange}
        handleLevelChange = {props.handleLevelChange}
        handleTypeChange = {props.handleTypeChange}
        handleNPCChange = {props.handleNPCChange}/>
      <SkillsContainer
        skills = {props.skills}
        addSkill = {props.addSkill}
        updateSkill = {props.updateSkill}
        removeSkill = {props.removeSkill}
        is_npc = {props.character.is_npc}
        season = {Math.floor(props.character.attributes.level - 1 / 5) + 1}
        freeSkillPoints = {props.freeSkillPoints}/>
    </div>
  )
}

//<SkillsContainer/>
//<TechniquesContainer/>

CharacterView.propTypes = {
  character_type: PropTypes.string.isRequired,
  character: PropTypes.shape({
    attributes: PropTypes.shape({
      name: PropTypes.string.isRequired,
      level: PropTypes.number.isRequired,
      strength: PropTypes.number.isRequired,
      agility: PropTypes.number.isRequired,
      spirit: PropTypes.number.isRequired,
      mind: PropTypes.number.isRequired,
      guts: PropTypes.number.isRequired
    })
  })
};

export default CharacterView;
