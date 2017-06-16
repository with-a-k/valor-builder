module.exports = {
  //Final multiplier to calculated Max Health.
  HEALTH_MULTIPIERS = {
    'Elite': 1,
    'Swarm': 1,
    'Flunky': 0,
    'Soldier': 0.5,
    'Master': 2
  },
  //Final multiplier to calculated Max Stamina.
  STAMINA_MULTIPLIERS = {
    'Elite': 1,
    'Swarm': 1,
    'Flunky': 1,
    'Soldier': 1,
    'Master': 2
  },
  //Final multiplier to calculated SP.
  SP_MULTIPLIERS = {
    'Elite': 1,
    'Swarm': 1,
    'Flunky': 0.5,
    'Soldier': 0.5,
    'Master': 1
  },
  //Adjusts the amount of SP a character has at Level 1 additively.
  BASE_SP_ADJUSTMENT: {
    'Elite': 0,
    'Swarm': 0,
    'Flunky': 0,
    'Soldier': 0,
    'Master': 5
  },
  //Adjusts the amount of SP a character gains on leveling up.
  SP_GAIN_ADJUSTMENT: {
    'Elite': 0,
    'Swarm': 0,
    'Flunky': 0,
    'Soldier': 0,
    'Master': 1
  },
  //Final multiplier to calculated TP.
  TP_MULTIPLIERS = {
    'Elite': 1,
    'Swarm': 0.5,
    'Flunky': 0.25,
    'Soldier': 0.5,
    'Master': 1
  },
  //Adjusts the amount of TP a character has at Level 1 additively.
  BASE_TP_ADJUSTMENT = {
    'Elite': 0,
    'Swarm': 0,
    'Flunky': 0,
    'Soldier': 0,
    'Master': 2
  },
  //Adjusts the amount of TP a character gains on leveling up.
  TP_GAIN_ADJUSTMENT = {
    'Elite': 0,
    'Swarm': 0,
    'Flunky': 0,
    'Soldier': 0,
    'Master': 1
  },
  //Dictates whether to include the ultimate technique portion
  //of TP calculation.
  INCLUDE_ULTIMATES = {
    'Elite': true,
    'Swarm': false,
    'Flunky': false,
    'Soldier': false,
    'Master': true
  }
  //Final multiplier to attack scores.
  FINAL_ATTACK_MULTIPLIERS = {
    'Elite': 1,
    'Swarm': 0.5,
    'Flunky': 0.5,
    'Soldier': 0.5,
    'Master': 1
  },
  //Multiplier on the character's base stat used in the middle of calculating attack scores.
  MIDCALC_ATTACK_MULTIPLIERS = {
    'Elite': 2,
    'Swarm': 2,
    'Flunky': 2,
    'Soldier': 2,
    'Master': 3
  },
  //Additively adjusts Active Attributes.
  ACTIVE_ATTRIBUTE_ADJUSTMENT = {
    'Elite': 0,
    'Swarm': 0,
    'Flunky': -1,
    'Soldier': -1,
    'Master': 0
  },
  //Final multiplier to Damage Increment.
  DAMAGE_INCREMENT_MULTIPLIERS = {
    'Elite': 1,
    'Swarm': 1,
    'Flunky': 0.5,
    'Soldier': 0.5,
    'Master': 1
  },
  //Final multiplier to Healing Core technique power (amount healed).
  HEALING_POWER_MULTIPLIERS = {
    'Elite': 1,
    'Swarm': 1,
    'Flunky': 0.5,
    'Soldier': 0.5,
    'Master': 1
  }
}
