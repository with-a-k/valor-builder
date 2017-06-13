import React, {Component} from 'react';
import CharacterAttributesView from './views/CharacterAttributesView';
import style from './buildstyle';

class CharacterAttributesContainer extends Component {
  naturalActiveAttribute(baseAttributeValue) {
    return Math.ceil((baseAttributeValue + this.props.level) / 2);
  }

  naturalAttackScore(baseAttributeValue) {
    return 2 * (baseAttributeValue + this.props.level);
  }

  naturalDamageIncrement() {
    return this.props.level + 5;
  }

  naturalMaxHealth() {
    return 5 * (10 + this.props.level * 2 + this.props.strength + this.props.guts * 2);
  }

  naturalMaxStamina() {
    return 2 * (4 + this.props.level * 2 + this.props.spirit + this.props.mind);
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
    return 14 + (this.props.level * 6);
  }

  naturalTechniquePoints(level = 1) {
    if (level === 1) return 12;
    //Ultimate Techniques "don't use any TP when gained", but...
    //how about we just add extra TP instead?
    var ultimateAdjustment = 0;
    //Every level multiple of 5, add level+3.
    if (level % 5 === 0) {
      ultimateAdjustment = level + 3;
    }
    return this.naturalTechniquePoints(level - 1) + 4 + Math.floor((level - 1) / 5)
      + ultimateAdjustment;
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
      healthIncrement : maxHealth / 5,
      criticalHealth : maxHealth * 2 / 5,
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
            handleStrengthChange = {this.props.handleStrengthChange}
            handleAgilityChange = {this.props.handleAgilityChange}
            handleSpiritChange = {this.props.handleSpiritChange}
            handleMindChange = {this.props.handleMindChange}
            handleGutsChange = {this.props.handleGutsChange}
            handleLevelChange = {this.props.handleLevelChange}/>;
  }
}

export default CharacterAttributesContainer;
