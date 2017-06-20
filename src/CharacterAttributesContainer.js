import React, {Component} from 'react';
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

  //SP can't be obtained in any way other than leveling up or Flaws.
  baseSkillPoints() {
    return ((14 + AttributeConstants.BASE_SP_ADJUSTMENT[this.props.character_type] +
      this.props.level * (6 + AttributeConstants.SP_GAIN_ADJUSTMENT[this.props.character_type])) *
      AttributeConstants.SP_MULTIPLIERS[this.props.character_type]);
  }

  naturalTechniquePoints(level = 1) {
    if (level === 1) {
      return Math.ceil((12 + AttributeConstants.BASE_TP_ADJUSTMENT[this.props.character_type]) *
        AttributeConstants.TP_MULTIPLIERS[this.props.character_type]);
    }
    //Ultimate Techniques "don't use any TP when gained", but...
    //how about we just add extra TP instead?
    var ultimateAdjustment = 0;
    //Every level multiple of 5, add level+3, but only if the character type
    //is allowed to have Ultimate Techniques.
    if (level % 5 === 0 && AttributeConstants.INCLUDE_ULTIMATES[this.props.character_type]) {
      ultimateAdjustment = level + 3;
    }
    return Math.ceil(this.naturalTechniquePoints(level - 1) + AttributeConstants.TP_MULTIPLIERS[this.props.character_type] *
      (4 + Math.floor((level - 1) / 5) + ultimateAdjustment + AttributeConstants.TP_GAIN_ADJUSTMENT[this.props.character_type]));
  }

  objectify() {
    var maxHealth = this.naturalMaxHealth();
    var maxStamina = this.naturalMaxStamina();
    return {
      name : this.props.name,
      level : this.props.level,
      strength : this.props.strength,
      agility : this.props.agility,
      spirit : this.props.spirit,
      mind : this.props.mind,
      guts : this.props.guts,
      unused : this.unusedBaseAttributePoints,
      muscle : this.naturalActiveAttribute(this.props.strength),
      dexterity : this.naturalActiveAttribute(this.props.agility),
      aura : this.naturalActiveAttribute(this.props.spirit),
      intuition : this.naturalActiveAttribute(this.props.mind),
      resolve : this.naturalActiveAttribute(this.props.guts),
      strengthAttack : this.naturalAttackScore(this.props.strength),
      agilityAttack : this.naturalAttackScore(this.props.agility),
      spiritAttack : this.naturalAttackScore(this.props.spirit),
      mindAttack : this.naturalAttackScore(this.props.mind),
      maxHealth : maxHealth,
      healthIncrement : Math.ceil(maxHealth / 5),
      criticalHealth : Math.ceil(maxHealth * 2 / 5),
      damageIncrement : this.naturalDamageIncrement(),
      maxStamina : maxStamina,
      staminaIncrement : (Math.ceil(maxStamina / 5)),
      move : this.naturalMovement(),
      defense : this.naturalDefense(),
      resistance : this.naturalResistance(),
      skillPoints : this.baseSkillPoints(),
      techPoints : this.naturalTechniquePoints(this.props.level)
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
            handleNPCChange = {this.props.handleNPCChange}/>;
  }
}

export default CharacterAttributesContainer;
