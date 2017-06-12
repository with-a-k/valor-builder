import React from 'react';
import PropTypes from 'prop-types';
import AttributeInput from './AttributeInput';
import AttributeView from './AttributeView';

const CharacterAttributesView = (props) => {
  return (
    <div>
      <p>This (CharacterAttributesView) is still being built out.</p>
      <div className="baseControls">
        Attribute Inputs for Strength, Agility, Spirit, Mind, and Guts.
        <AttributeInput
          attributeName="strength"
          attributeValue={props.characterAttributes.strength}
          changeAttribute={props.handleStrengthChange}
          maxValue={props.level + 7}/>
        <AttributeInput
          attributeName="agility"
          attributeValue={props.characterAttributes.agility}
          changeAttribute={props.handleAgilityChange}
          maxValue={props.level + 7}/>
        <AttributeInput
          attributeName="spirit"
          attributeValue={props.characterAttributes.spirit}
          changeAttribute={props.handleSpiritChange}
          maxValue={props.level + 7}/>
        <AttributeInput
          attributeName="mind"
          attributeValue={props.characterAttributes.mind}
          changeAttribute={props.handleMindChange}
          maxValue={props.level + 7}/>
        <AttributeInput
          attributeName="guts"
          attributeValue={props.characterAttributes.guts}
          changeAttribute={props.handleGutsChange}
          maxValue={props.level + 7}/>
      </div>
      <div className="activeAttributes">
        Attribute Views for Muscle, Dexterity, Aura, Intuition, and Resolve.
      </div>
      <div className="attackScores">
        Attribute Views for Strength Attack, etc. and Damage Increment.
      </div>
      <div className="healthAttributes">
        Attribute Views for Max Health, Health Increment, Critical Health, Defense, and Resistance.
      </div>
      <div className="staminaAndMetaAttributes">
        Attribute Views for Max Stamina, Stamina Increment, Movement, Max SP, and Max TP.
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
