import React from 'react';
import PropTypes from 'prop-types';
import VBNumberInput from './VBNumberInput';
import VBLabeledValue from './VBLabeledValue';
import SelectorView from './SelectorView';
import VBCheckbox from './VBCheckbox';
import TextConstants from '../constants/TextConstants';
import Styles from '../styles';

const CharacterAttributesView = (props) => {
  return (
    <div style={Styles.CharacterAttributesView}>
        <VBNumberInput
          inputName="Level"
          inputValue={props.characterAttributes.level}
          handleChange={props.handleLevelChange}
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
        <VBNumberInput
          inputName="Strength"
          inputValue={props.characterAttributes.strength}
          handleChange={props.handleStrengthChange}
          maxlabeledValue={props.characterAttributes.level + 7}
          position={"strength"}/>
        <VBNumberInput
          inputName="Agility"
          inputValue={props.characterAttributes.agility}
          handleChange={props.handleAgilityChange}
          maxlabeledValue={props.characterAttributes.level + 7}
          position={"agility"}/>
        <VBNumberInput
          inputName="Spirit"
          inputValue={props.characterAttributes.spirit}
          handleChange={props.handleSpiritChange}
          maxlabeledValue={props.characterAttributes.level + 7}
          position={"spirit"}/>
        <VBNumberInput
          inputName="Mind"
          inputValue={props.characterAttributes.mind}
          handleChange={props.handleMindChange}
          maxlabeledValue={props.characterAttributes.level + 7}
          position={"mind"}/>
        <VBNumberInput
          inputName="Guts"
          inputValue={props.characterAttributes.guts}
          handleChange={props.handleGutsChange}
          maxlabeledValue={props.characterAttributes.level + 7}
          position={"guts"}/>
        <VBLabeledValue
          labeledName="Muscle"
          labeledValue={props.characterAttributes.muscle}
          position="muscle"/>
        <VBLabeledValue
          labeledName="Dexterity"
          labeledValue={props.characterAttributes.dexterity}
          position="dexterity"/>
        <VBLabeledValue
          labeledName="Aura"
          labeledValue={props.characterAttributes.aura}
          position="aura"/>
        <VBLabeledValue
          labeledName="Intuition"
          labeledValue={props.characterAttributes.intuition}
          position="intuition"/>
        <VBLabeledValue
          labeledName="Resolve"
          labeledValue={props.characterAttributes.resolve}
          position="resolve"/>
        <VBLabeledValue
          labeledName="Strength Attack"
          labeledValue={props.characterAttributes.strengthAttack}
          position="strength_attack"/>
        <VBLabeledValue
          labeledName="Agility Attack"
          labeledValue={props.characterAttributes.agilityAttack}
          position="agility_attack"/>
        <VBLabeledValue
          labeledName="Spirit Attack"
          labeledValue={props.characterAttributes.spiritAttack}
          position="spirit_attack"/>
        <VBLabeledValue
          labeledName="Mind Attack"
          labeledValue={props.characterAttributes.mindAttack}
          position="mind_attack"/>
        <VBLabeledValue
          labeledName="Damage Increment"
          labeledValue={props.characterAttributes.damageIncrement}
          position="damage_increment"/>
        <VBLabeledValue
          labeledName="Max Health"
          labeledValue={props.characterAttributes.maxHealth}
          position="maxhp"/>
        <VBLabeledValue
          labeledName="Health Increment"
          labeledValue={props.characterAttributes.healthIncrement}
          position="hpincrement"/>
        <VBLabeledValue
          labeledName="Critical Health"
          labeledValue={props.characterAttributes.criticalHealth}
          position="criticalhp"/>
        <VBLabeledValue
          labeledName="Defense"
          labeledValue={props.characterAttributes.defense}
          position="defense"/>
        <VBLabeledValue
          labeledName="Resistance"
          labeledValue={props.characterAttributes.resistance}
          position="resistance"/>
        <VBLabeledValue
          labeledName="Max Stamina"
          labeledValue={props.characterAttributes.maxStamina}
          position="maxst"/>
        <VBLabeledValue
          labeledName="Stamina Increment"
          labeledValue={props.characterAttributes.staminaIncrement}
          position="stincrement"/>
        <VBLabeledValue
          labeledName="Movement"
          labeledValue={props.characterAttributes.move}
          position="movement"/>
        <VBLabeledValue
          labeledName="Max Skill Points"
          labeledValue={props.characterAttributes.skillPoints}
          position="maxsp"/>
        <VBLabeledValue
          labeledName="Max Technique Points"
          labeledValue={props.tp}
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
    skillPoints: PropTypes.number.isRequired
  }),
  tp: PropTypes.number.isRequired,
  is_npc: PropTypes.bool.isRequired,
  handleLevelChange: PropTypes.func.isRequired,
  handleTypeChange: PropTypes.func.isRequired,
  handleNPCChange: PropTypes.func.isRequired,
  handleStrengthChange: PropTypes.func.isRequired,
  handleAgilityChange: PropTypes.func.isRequired,
  handleSpiritChange: PropTypes.func.isRequired,
  handleMindChange: PropTypes.func.isRequired,
  handleGutsChange: PropTypes.func.isRequired
};

export default CharacterAttributesView;
