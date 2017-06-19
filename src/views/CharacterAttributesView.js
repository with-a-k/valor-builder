import React from 'react';
import PropTypes from 'prop-types';
import AttributeInput from './AttributeInput';
import AttributeView from './AttributeView';
import SelectorView from './SelectorView';
import TextConstants from '../constants/TextConstants';

const CharacterAttributesView = (props) => {
  return (
    <div>
      <div className="masterControls">
        <AttributeInput
          attributeName="Level"
          attributeValue={props.characterAttributes.level}
          changeAttribute={props.handleLevelChange}/>
        <SelectorView
          selectorName="Type"
          selectorOptions={TextConstants.ENTITY_TYPES}
          handleChange={props.handleTypeChange}/>
      </div>
      <div className="baseControls">
        <AttributeInput
          attributeName="Strength"
          attributeValue={props.characterAttributes.strength}
          changeAttribute={props.handleStrengthChange}
          maxValue={props.level + 7}/>
        <AttributeInput
          attributeName="Agility"
          attributeValue={props.characterAttributes.agility}
          changeAttribute={props.handleAgilityChange}
          maxValue={props.level + 7}/>
        <AttributeInput
          attributeName="Spirit"
          attributeValue={props.characterAttributes.spirit}
          changeAttribute={props.handleSpiritChange}
          maxValue={props.level + 7}/>
        <AttributeInput
          attributeName="Mind"
          attributeValue={props.characterAttributes.mind}
          changeAttribute={props.handleMindChange}
          maxValue={props.level + 7}/>
        <AttributeInput
          attributeName="Guts"
          attributeValue={props.characterAttributes.guts}
          changeAttribute={props.handleGutsChange}
          maxValue={props.level + 7}/>
      </div>
      <div className="activeAttributes">
        <AttributeView
          attributeName="Muscle"
          attributeValue={props.characterAttributes.muscle}/>
        <AttributeView
          attributeName="Dexterity"
          attributeValue={props.characterAttributes.dexterity}/>
        <AttributeView
          attributeName="Aura"
          attributeValue={props.characterAttributes.aura}/>
        <AttributeView
          attributeName="Intuition"
          attributeValue={props.characterAttributes.intuition}/>
        <AttributeView
          attributeName="Resolve"
          attributeValue={props.characterAttributes.resolve}/>
      </div>
      <div className="attackScores">
        <AttributeView
          attributeName="Strength Attack"
          attributeValue={props.characterAttributes.strengthAttack}/>
        <AttributeView
          attributeName="Agility Attack"
          attributeValue={props.characterAttributes.agilityAttack}/>
        <AttributeView
          attributeName="Spirit Attack"
          attributeValue={props.characterAttributes.spiritAttack}/>
        <AttributeView
          attributeName="Mind Attack"
          attributeValue={props.characterAttributes.mindAttack}/>
        <AttributeView
          attributeName="Damage Increment"
          attributeValue={props.characterAttributes.damageIncrement}/>
      </div>
      <div className="healthAttributes">
        <AttributeView
          attributeName="Max Health"
          attributeValue={props.characterAttributes.maxHealth}/>
        <AttributeView
          attributeName="Health Increment"
          attributeValue={props.characterAttributes.healthIncrement}/>
        <AttributeView
          attributeName="Critical Health"
          attributeValue={props.characterAttributes.criticalHealth}/>
        <AttributeView
          attributeName="Defense"
          attributeValue={props.characterAttributes.defense}/>
        <AttributeView
          attributeName="Resistance"
          attributeValue={props.characterAttributes.resistance}/>
      </div>
      <div className="staminaAndMetaAttributes">
        <AttributeView
          attributeName="Max Stamina"
          attributeValue={props.characterAttributes.maxStamina}/>
        <AttributeView
          attributeName="Stamina Increment"
          attributeValue={props.characterAttributes.staminaIncrement}/>
        <AttributeView
          attributeName="Movement"
          attributeValue={props.characterAttributes.move}/>
        <AttributeView
          attributeName="Max Skill Points"
          attributeValue={props.characterAttributes.skillPoints}/>
        <AttributeView
          attributeName="Max Technique Points"
          attributeValue={props.characterAttributes.techPoints}/>
      </div>
    </div>
  )
}

CharacterAttributesView.propTypes = {
  characterAttributes: PropTypes.shape({
    level: PropTypes.number.isRequired,
    strength: PropTypes.number.isRequired,
    agility: PropTypes.number.isRequired,
    spirit: PropTypes.number.isRequired,
    mind: PropTypes.number.isRequired,
    guts: PropTypes.number.isRequired,
    muscle: PropTypes.number.isRequired,
    dexterity: PropTypes.number.isRequired,
    aura: PropTypes.number.isRequired,
    intuition: PropTypes.number.isRequired,
    resolve: PropTypes.number.isRequired,
    strengthAttack: PropTypes.number.isRequired,
    agilityAttack: PropTypes.number.isRequired,
    spiritAttack: PropTypes.number.isRequired,
    mindAttack: PropTypes.number.isRequired,
    damageIncrement: PropTypes.number.isRequired,
    maxHealth: PropTypes.number.isRequired,
    healthIncrement: PropTypes.number.isRequired,
    criticalHealth: PropTypes.number.isRequired,
    defense: PropTypes.number.isRequired,
    resistance: PropTypes.number.isRequired,
    maxStamina: PropTypes.number.isRequired,
    staminaIncrement: PropTypes.number.isRequired,
    move: PropTypes.number.isRequired,
    skillPoints: PropTypes.number.isRequired,
    techPoints: PropTypes.number.isRequired
  })
};

export default CharacterAttributesView;
