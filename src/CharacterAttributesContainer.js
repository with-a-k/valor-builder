import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CharacterAttributesView from './views/CharacterAttributesView';
import AttributeConstants from './constants/AttributeConstants';

class CharacterAttributesContainer extends Component {
  naturalActiveAttribute(baseAttributeValue) {
    return Math.ceil((baseAttributeValue + this.props.level) / 2) + AttributeConstants.ACTIVE_ATTRIBUTE_ADJUSTMENT[this.props.character_type];
  }

  naturalAttackScore(baseAttributeValue) {
    return ((AttributeConstants.MIDCALC_ATTACK_MULTIPLIERS[this.props.character_type] * baseAttributeValue) + (2 * this.props.level)) *
      AttributeConstants.FINAL_ATTACK_MULTIPLIERS[this.props.character_type];
  }

  naturalDamageIncrement() {
    return (this.props.level + 5) * AttributeConstants.DAMAGE_INCREMENT_MULTIPLIERS[this.props.character_type];
  }

  naturalMaxHealth() {
    if (this.props.character_type === "Flunky") {
      return 1;
    }
    return Math.ceil(AttributeConstants.HEALTH_MULTIPLIERS[this.props.character_type] * 5 * (10 + this.props.level * 2 + this.props.strength + this.props.guts * 2));
  }

  naturalMaxStamina() {
    return Math.ceil(AttributeConstants.STAMINA_MULTIPLIERS[this.props.character_type] * 2 * (4 + this.props.level * 2 + this.props.spirit + this.props.mind));
  }

  naturalMovement() {
    return 3 + Math.floor((this.props.agility - 1)/4);
  }

  naturalDefense() {
    return this.props.level * 2 + this.props.strength + this.props.guts;
  }

  naturalResistance() {
    return this.props.level * 2 + this.props.spirit + this.props.mind;
  }

  highestActiveAttribute() {
    return Math.max(...arguments);
  }

  balanceBonus(active, highActive) {
    if (active < highActive) {
      //0 or 1
      return this.props.skillBonuses.balancedFighter;
    }
    return 0;
  }

  objectify() {
    var maxHealth = this.naturalMaxHealth() + this.props.skillBonuses.maxHealth;
    var maxStamina = this.naturalMaxStamina() + this.props.skillBonuses.maxStamina;
    var muscle = this.naturalActiveAttribute(this.props.strength);
    var dexterity = this.naturalActiveAttribute(this.props.agility);
    var aura = this.naturalActiveAttribute(this.props.spirit);
    var intuition = this.naturalActiveAttribute(this.props.mind);
    var resolve = this.naturalActiveAttribute(this.props.guts);
    var highActive = this.highestActiveAttribute(muscle, dexterity, aura, intuition, resolve);
    return {
      name : this.props.name,
      level : this.props.level,
      strength : this.props.strength,
      agility : this.props.agility,
      spirit : this.props.spirit,
      mind : this.props.mind,
      guts : this.props.guts,
      unused : this.unusedBaseAttributePoints,
      muscle : muscle + this.balanceBonus(muscle, highActive),
      dexterity : dexterity + this.balanceBonus(dexterity, highActive),
      aura : aura + this.balanceBonus(aura, highActive),
      intuition : intuition + this.balanceBonus(intuition, highActive),
      resolve : resolve + this.balanceBonus(resolve, highActive),
      strengthAttack : this.naturalAttackScore(this.props.strength) + this.props.skillBonuses.physicalAttack,
      agilityAttack : this.naturalAttackScore(this.props.agility) + this.props.skillBonuses.physicalAttack,
      spiritAttack : this.naturalAttackScore(this.props.spirit) + this.props.skillBonuses.energyAttack,
      mindAttack : this.naturalAttackScore(this.props.mind) + this.props.skillBonuses.energyAttack,
      maxHealth : maxHealth,
      healthIncrement : Math.ceil(maxHealth / 5),
      criticalHealth : Math.ceil(maxHealth * 2 / 5),
      damageIncrement : this.naturalDamageIncrement() + this.props.skillBonuses.damageIncrement,
      maxStamina : maxStamina,
      staminaIncrement : (Math.ceil(maxStamina / 5)),
      move : this.naturalMovement() + this.props.skillBonuses.movement,
      defense : this.naturalDefense() + this.props.skillBonuses.defense,
      resistance : this.naturalResistance() + this.props.skillBonuses.resistance,
      skillPoints : this.props.maxSp
    }
  }

  render() {
    return <CharacterAttributesView
              characterAttributes = {this.objectify()}
              is_npc = {this.props.is_npc}
              handleStrengthChange = {this.props.handleStrengthChange}
              handleAgilityChange = {this.props.handleAgilityChange}
              handleSpiritChange = {this.props.handleSpiritChange}
              handleMindChange = {this.props.handleMindChange}
              handleGutsChange = {this.props.handleGutsChange}
              handleLevelChange = {this.props.handleLevelChange}
              handleTypeChange = {this.props.handleTypeChange}
              handleNPCChange = {this.props.handleNPCChange}
              tp = {this.props.tp}/>;
  }
}

CharacterAttributesContainer.propTypes = {
  name: PropTypes.string,
  character_type: PropTypes.string.isRequired,
  handleNPCChange: PropTypes.func.isRequired,
  handleStrengthChange: PropTypes.func.isRequired,
  handleAgilityChange: PropTypes.func.isRequired,
  handleSpiritChange: PropTypes.func.isRequired,
  handleMindChange: PropTypes.func.isRequired,
  handleGutsChange: PropTypes.func.isRequired,
  handleLevelChange: PropTypes.func.isRequired,
  handleTypeChange: PropTypes.func.isRequired,
  level: PropTypes.number.isRequired,
  strength: PropTypes.number.isRequired,
  agility: PropTypes.number.isRequired,
  spirit: PropTypes.number.isRequired,
  mind: PropTypes.number.isRequired,
  guts: PropTypes.number.isRequired,
  is_npc: PropTypes.bool.isRequired,
  maxSp: PropTypes.number.isRequired,
  tp: PropTypes.number.isRequired,
  skillBonuses: PropTypes.shape({
    balancedFighter: PropTypes.number,
    maxHealth: PropTypes.number,
    maxStamina: PropTypes.number,
    physicalAttack: PropTypes.number,
    energyAttack: PropTypes.number,
    damageIncrement: PropTypes.number,
    defense: PropTypes.number,
    resistance: PropTypes.number,
    movement: PropTypes.number,
    techniquePoints: PropTypes.number
  })
}

export default CharacterAttributesContainer;
