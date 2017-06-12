import React from 'react';
import PropTypes from 'prop-types';
import CharacterAttributesContainer from '../CharacterAttributesContainer';

const CharacterView = (props) => {
  return (
    <div>
      <p>This (CharacterView) is still being built out.</p>
      <CharacterAttributesContainer
        level = {props.character.attributes.level}
        strength = {props.character.attributes.strength}
        agility = {props.character.attributes.agility}
        spirit = {props.character.attributes.spirit}
        mind = {props.character.attributes.mind}
        guts = {props.character.attributes.guts}
        skill_bonuses = {props.character.attributes.skill_bonuses}
        handleStrengthChange = {props.handleStrengthChange}
        handleAgilityChange = {props.handleAgilityChange}
        handleSpiritChange = {props.handleSpiritChange}
        handleMindChange = {props.handleMindChange}
        handleGutsChange = {props.handleGutsChange}
        handleLevelChange = {props.handleLevelChange}/>
    </div>
  )
}

//<SkillsContainer/>
//<TechniquesContainer/>

CharacterView.propTypes = {
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
