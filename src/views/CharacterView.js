import React from 'react';
import PropTypes from 'prop-types';
import VBTextfield from './VBTextfield';
import CharacterAttributesContainer from '../CharacterAttributesContainer';
import SkillsContainer from '../SkillsContainer';
import TechniquesContainer from '../TechniquesContainer';

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
        skillBonuses = {props.character.attributes.skillBonuses}
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
        season = {Math.floor((props.character.attributes.level - 1) / 5) + 1}
        flawCap = {-1 * (props.character.attributes.level + 7)}
        freeSkillPoints = {props.freeSkillPoints}
        flawPoints = {props.flawPoints}
        level = {props.character.attributes.level}/>
      <TechniquesContainer
        techniques = {props.techniques}
        addTechnique = {props.addTechnique}
        is_npc = {props.character.is_npc}
        season = {Math.floor((props.character.attributes.level - 1) / 5) + 1}/>
    </div>
  )
}

//<SkillsContainer/>
//<TechniquesContainer/>

CharacterView.propTypes = {
  addSkill: PropTypes.function.isRequired,
  updateSkill: PropTypes.function.isRequired,
  removeSkill: PropTypes.function.isRequired,
  addTechnique: PropTypes.function.isRequired,
  character_type: PropTypes.string.isRequired,
  character: PropTypes.shape({
    attributes: PropTypes.shape({
      name: PropTypes.string.isRequired,
      level: PropTypes.number.isRequired,
      strength: PropTypes.number.isRequired,
      agility: PropTypes.number.isRequired,
      spirit: PropTypes.number.isRequired,
      mind: PropTypes.number.isRequired,
      guts: PropTypes.number.isRequired,
      skillBonuses: PropTypes.object.isRequired
    }),
    is_npc: PropTypes.boolean.isRequired
  }),
  handleRename: PropTypes.function.isRequired,
  handleLevelChange: PropTypes.function.isRequired,
  handleTypeChange: PropTypes.function.isRequired,
  handleNPCChange: PropTypes.function.isRequired,
  handleStrengthChange: PropTypes.function.isRequired,
  handleAgilityChange: PropTypes.function.isRequired,
  handleSpiritChange: PropTypes.function.isRequired,
  handleMindChange: PropTypes.function.isRequired,
  handleGutsChange: PropTypes.function.isRequired,
  maxSp: PropTypes.number.isRequired,
  flawPoints: PropTypes.number.isRequired,
  freeSkillPoints: PropTypes.number.isRequired,
  skills: PropTypes.array,
  techniques: PropTypes.array
};

export default CharacterView;
