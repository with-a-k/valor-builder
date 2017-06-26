import React from 'react';
import PropTypes from 'prop-types';
import AttributeInput from './AttributeInput';
import AttributeView from './AttributeView';
import SelectorView from './SelectorView';
import VBCheckbox from './VBCheckbox';
import TextConstants from '../constants/TextConstants';
import Styles from '../styles';

const CharacterAttributesView = (props) => {
  return (
    <div style={Styles.CharacterAttributesView}>
        <AttributeInput
          attributeName="Level"
          attributeValue={props.characterAttributes.level}
          changeAttribute={props.handleLevelChange}
          position="level"/>
        <SelectorView
          selectorName="Type"
          selectorOptions={TextConstants.ENTITY_TYPES}
          handleChange={props.handleTypeChange}
          position="type"/>
        <VBCheckbox
          toggleName="Is an NPC?"
          toggleState={props.is_npc}
          toggleChange={props.handleNPCChange}
          position="npc"/>
        <AttributeInput
          attributeName="Strength"
          attributeValue={props.characterAttributes.strength}
          changeAttribute={props.handleStrengthChange}
          maxValue={props.level + 7}
          position={"strength"}/>
        <AttributeInput
          attributeName="Agility"
          attributeValue={props.characterAttributes.agility}
          changeAttribute={props.handleAgilityChange}
          maxValue={props.level + 7}
          position={"agility"}/>
        <AttributeInput
          attributeName="Spirit"
          attributeValue={props.characterAttributes.spirit}
          changeAttribute={props.handleSpiritChange}
          maxValue={props.level + 7}
          position={"spirit"}/>
        <AttributeInput
          attributeName="Mind"
          attributeValue={props.characterAttributes.mind}
          changeAttribute={props.handleMindChange}
          maxValue={props.level + 7}
          position={"mind"}/>
        <AttributeInput
          attributeName="Guts"
          attributeValue={props.characterAttributes.guts}
          changeAttribute={props.handleGutsChange}
          maxValue={props.level + 7}
          position={"guts"}/>
        <AttributeView
          attributeName="Muscle"
          attributeValue={props.characterAttributes.muscle}
          position="muscle"/>
        <AttributeView
          attributeName="Dexterity"
          attributeValue={props.characterAttributes.dexterity}
          position="dexterity"/>
        <AttributeView
          attributeName="Aura"
          attributeValue={props.characterAttributes.aura}
          position="aura"/>
        <AttributeView
          attributeName="Intuition"
          attributeValue={props.characterAttributes.intuition}
          position="intuition"/>
        <AttributeView
          attributeName="Resolve"
          attributeValue={props.characterAttributes.resolve}
          position="resolve"/>
        <AttributeView
          attributeName="Strength Attack"
          attributeValue={props.characterAttributes.strengthAttack}
          position="strength_attack"/>
        <AttributeView
          attributeName="Agility Attack"
          attributeValue={props.characterAttributes.agilityAttack}
          position="agility_attack"/>
        <AttributeView
          attributeName="Spirit Attack"
          attributeValue={props.characterAttributes.spiritAttack}
          position="spirit_attack"/>
        <AttributeView
          attributeName="Mind Attack"
          attributeValue={props.characterAttributes.mindAttack}
          position="mind_attack"/>
        <AttributeView
          attributeName="Damage Increment"
          attributeValue={props.characterAttributes.damageIncrement}
          position="damage_increment"/>
        <AttributeView
          attributeName="Max Health"
          attributeValue={props.characterAttributes.maxHealth}
          position="maxhp"/>
        <AttributeView
          attributeName="Health Increment"
          attributeValue={props.characterAttributes.healthIncrement}
          position="hpincrement"/>
        <AttributeView
          attributeName="Critical Health"
          attributeValue={props.characterAttributes.criticalHealth}
          position="criticalhp"/>
        <AttributeView
          attributeName="Defense"
          attributeValue={props.characterAttributes.defense}
          position="defense"/>
        <AttributeView
          attributeName="Resistance"
          attributeValue={props.characterAttributes.resistance}
          position="resistance"/>
        <AttributeView
          attributeName="Max Stamina"
          attributeValue={props.characterAttributes.maxStamina}
          position="maxst"/>
        <AttributeView
          attributeName="Stamina Increment"
          attributeValue={props.characterAttributes.staminaIncrement}
          position="stincrement"/>
        <AttributeView
          attributeName="Movement"
          attributeValue={props.characterAttributes.move}
          position="movement"/>
        <AttributeView
          attributeName="Max Skill Points"
          attributeValue={props.characterAttributes.skillPoints}
          position="maxsp"/>
        <AttributeView
          attributeName="Max Technique Points"
          attributeValue={props.characterAttributes.techPoints}
          position="maxtp"/>
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
