import React, {Component} from 'react';
import CharacterView from './views/CharacterView';
import style from './buildstyle';

class CharacterBuilder extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      //Name doesn't affect any of the numbers, so it can stand alone.
      character_type: "Elite",
      //Character Type affects certain attribute calculations, handling Ultimate Techniques, and has other effects.
      //Non-Elite types have an unremovable Skill detailing the difference between Elite and itself.
      //The only values it can have are "Elite", "Master", "Swarm", "Soldier", and "Flunky".
      is_npc: false,
      //This flag affects whether or not NPC-only Skills and Modifiers will show up in the skill selector.
      //Masters, Swarms, and Flunkies should always have is_npc set to true.
      character_attributes: {
        //Level and the five Base Attributes are the only things that will be top-level for now.
        //When Techniques are implemented, they will need the Active Attributes, Attack values,
        //Damage Increment (Reposition, etc.), and Health Increment (Ultimate Health Limit).
        level: 1,
        strength: 1,
        agility: 1,
        spirit: 1,
        mind: 1,
        guts: 1,
        //This Skill Bonuses sub-object holds static values that come from attribute-increasing Passive Skills.
        //Some of these skills have a diametrically opposed Flaw, but not all.
        skillBonuses: {
          balancedFighter: false, //from the "Balanced Fighter" skill
          maxHealth: 0, //from the "Tough" or "Fragile" skills
          maxStamina: 0, //from the "Tireless" or "Lack of Control" skills
          physicalAttack: 0, //from the "Physical Attacker" or "Weak Physical Attacker" skills
          energyAttack: 0, //from the "Energy Attacker" or "Weak Energy Attacker" skills
          defense: 0, //from the "Iron Defense" or "Weak Defender" skills
          resistance: 0, //from the "Resistant" or "Energy Vulnerability" skills
          movement: 0, //from the "Sprinter" or "Slow" skills
          techniquePoints: 0, //from the "Versatile Fighter" skill
          damageIncrement: 0, //from the "Improved Damage Increment" skill
        }
      },
      //Skills and Techniques must be chosen and built out respectively.
      skills: [],
      //Each Skill is an object that looks like this:
      /*
      {
        name: String - The Skill's name. For a Custom Skill, this can't be changed.
        cost: Integer - The amount of SP it uses.
        tags: [String] - A series of identifiers that help the skill API figure out what to show.
          List of tags:
          -- "Categorization Tags (let the user choose whether to include)" --
          * Flaw: This Skill gives you extra SP, but is a drawback. The book keeps Flaws and Skills separate, but...
          * Passive: This Skill is always in effect. The book uses the term "Permanent" for these.
          * Situational: This Skill's effects are conditional.
          * Active: This Skill provides an option in combat during your turn only.
          * Reaction: This Skill provides an option in combat to be used during others' turns.
          * Challenge: This Skill is useful for Challenge Scenes only.
          * Overdrive: This Skill adds to the character's Overdrive options.
          -- "Include These Only For Techniques" --
          * Weaken: This Skill can't be attached to a character directly; it must be attached to a Technique.
          * Boost: This Skill can't be attached to a character directly; it must be attached to a Technique.
          -- "Include These If The Character Doesn't Have One With This Tag Already" --
          * MaxHP: For "Tough" and "Fragile" only, as these passive skills affect Max HP and are mutually exclusive.
          * MaxST: For "Tireless" and "Lack of Control" only, as these passive skills affect Max Stamina and are mutually exclusive.
          * Defense: For "Iron Defense" and "Weak Defender" only, as these passive skills affect Defense and are mutually exclusive.
          * Resistance: For "Resistant" and "Energy Vulnerability" only, as these passive skills affect Resistance and are mutually exclusive.
          * PhysicalAttack: For "Physical Attacker" and "Weak Physical Attacker" only, as these passive skills affect Strength Attack and Agility Attack and are mutually exclusive.
          * EnergyAttack: For "Energy Attacker" and "Weak Energy Attacker" only, as these passive skills affect Spirit Attack and Mind Attack and are mutually exclusive.
          * Move: For "Sprinter" and "Slow" only, as these passive skills affect Movement and are mutually exclusive.
          * StartingValor: For "Bravado" and "Weak-Willed" only, as these passive skills affect the amount of Valor a character has at the start of combat.
          * Knockout: For "Despair" and "Revenge" only, as these situational skills respond to party members being knocked out in opposite ways.
          -- "Include These Only If The Character Has A Skill With The Same Name As This Tag" --
          * [Name of another skill]: For skills such as Dark Healing that require other skills.
            Jump, Swift Step, Counterattack, Malevolent Entity, and Companion are some skills that are prerequisites and would have a tag named for them.
          -- "Other" --
          * NPC: This Skill is not available to players; is_npc must be true for it to show up.
          * Plural: This Skill can be taken multiple times, and ignores the check for "does the character already have this?".
        levelProgression:  String - Either "Fixed", "Slow", or "Fast".
        level: Integer - What level the skill is. Fixed Skills stay at Level 99.
        effect: String - What effect the Skill has on the attached character.
        special: String - The "Special" field from the book's entry.

      }
      */
      techniques: []
      //Each Technique is an object that looks like this:
      /*
        {
          name: String - The Technique's name.
          level: Integer - The Technique's level. This can't be changed directly - it's the sum of its Core level and Modifier levels.
          attribute: String - Can be blank, or any of the five Base Attributes. The controls to change this value are associated with the Core.
          core: Object: {
            name: String - The Core's name. This can't be changed.
            description: String - The Core's description. This also can't be changed.
            level: Integer - The Core's level. This can't be reduced below 0.
          }
          modifiers: [Objects: {
            name: String - The Modifier's name. This can't be changed.
            description: String - The Modifier's description. This can't be changed.
            level: Integer - The Modifier's level. This can't be reduced below 0.
          }]
        }
      */
    }
    console.log(this.state.character_attributes.strength);
  }

  //Handles a change event for Strength.
  handleStrengthChange(event) {
    var value = parseInt(event.target.value, 10);
    this.changeCharacterAttribute('strength', value);
  }

  //Handles a change event for Agility.
  handleAgilityChange(event) {
    var value = parseInt(event.target.value, 10);
    this.changeCharacterAttribute('agility', value);
  }

  //Handles a change event for Spirit.
  handleSpiritChange(event) {
    var value = parseInt(event.target.value, 10);
    this.changeCharacterAttribute('spirit', value);
  }

  //Handles a change event for Mind.
  handleMindChange(event) {
    var value = parseInt(event.target.value, 10);
    this.changeCharacterAttribute('mind', value);
  }

  //Handles a change event for Guts.
  handleGutsChange(event) {
    var value = parseInt(event.target.value, 10);
    this.changeCharacterAttribute('guts', value);
  }

  changeCharacterAttribute(attribute, value) {
    if (value <= this.state.character_attributes.level + 7 &&
        value >= 1 &&
        (this.unusedBaseAttributePoints() > 0 || value < this.state.character_attributes[attribute])) {
      this.state.character_attributes[attribute] = value;
      this.forceUpdate();
    }
  }

  baseAttributes() {
    return [
      this.state.character_attributes.strength,
      this.state.character_attributes.agility,
      this.state.character_attributes.spirit,
      this.state.character_attributes.mind,
      this.state.character_attributes.guts
    ]
  }

  baseAttributesSum() {
    return this.baseAttributes().reduce(function(total, next) {
      return total + next;
    }, 0);
  }

  unusedBaseAttributePoints() {
    return (22 + 3 * this.state.character_attributes.level) - this.baseAttributesSum();
  }

  objectify() {
    return {
      attributes: {
        level: this.state.character_attributes.level,
        strength: this.state.character_attributes.strength,
        agility: this.state.character_attributes.agility,
        spirit: this.state.character_attributes.spirit,
        mind: this.state.character_attributes.mind,
        guts: this.state.character_attributes.guts,
        skill_bonuses: this.state.character_attributes.skill_bonuses
      },
    }
  }

  render() {
    return <CharacterView
            character = {this.objectify()}
            handleStrengthChange = {this.handleStrengthChange.bind(this)}
            handleAgilityChange = {this.handleAgilityChange.bind(this)}
            handleSpiritChange = {this.handleSpiritChange.bind(this)}
            handleMindChange = {this.handleMindChange.bind(this)}
            handleGutsChange = {this.handleGutsChange.bind(this)}/>;
  }
}

export default CharacterBuilder;
