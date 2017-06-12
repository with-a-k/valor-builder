import React from 'react';
import PropTypes from 'prop-types';
import AttributeInput from './AttributeInput';
import AttributeView from './AttributeView';

const CharacterAttributesView = (props) => {
  return (
    <div>
      <p>This (CharacterAttributesView) is still being built out.</p>
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
          attributeValue={props.muscle}/>
        <AttributeView
          attributeName="Dexterity"
          attributeValue={props.dexterity}/>
        <AttributeView
          attributeName="Aura"
          attributeValue={props.aura}/>
        <AttributeView
          attributeName="Intuition"
          attributeValue={props.intuition}/>
        <AttributeView
          attributeName="Resolve"
          attributeValue={props.resolve}/>
      </div>
      <div className="attackScores">
      <AttributeView
        attributeName="Strength Attack"
        attributeValue={props.strengthAttack}/>
      <AttributeView
        attributeName="Agility Attack"
        attributeValue={props.agilityAttack}/>
      <AttributeView
        attributeName="Spirit Attack"
        attributeValue={props.spiritAttack}/>
      <AttributeView
        attributeName="Mind Attack"
        attributeValue={props.mindAttack}/>
      <AttributeView
        attributeName="Damage Increment"
        attributeValue={props.damageIncrement}/>
      </div>
      <div className="healthAttributes">
        <AttributeView
          attributeName="Max Health"
          attributeValue={props.maxHealth}/>
        <AttributeView
          attributeName="Health Increment"
          attributeValue={props.healthIncrement}/>
        <AttributeView
          attributeName="Critical Health"
          attributeValue={props.criticalHealth}/>
        <AttributeView
          attributeName="Defense"
          attributeValue={props.defense}/>
        <AttributeView
          attributeName="Resistance"
          attributeValue={props.resistance}/>
      </div>
      <div className="staminaAndMetaAttributes">
        <AttributeView
          attributeName="Max Stamina"
          attributeValue={props.maxStamina}/>
        <AttributeView
          attributeName="Stamina Increment"
          attributeValue={props.staminaIncrement}/>
        <AttributeView
          attributeName="Movement"
          attributeValue={props.movement}/>
        <AttributeView
          attributeName="Max Skill Points"
          attributeValue={props.skillPoints}/>
        <AttributeView
          attributeName="Max Technique Points"
          attributeValue={props.techPoints}/>
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
    guts: PropTypes.number.isRequired
  })
};

export default CharacterAttributesView;
