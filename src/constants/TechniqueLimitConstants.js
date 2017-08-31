module.exports = {
  'airborne': {
    name: 'Airborne Limit',
    applies: ['barrier', 'boost', 'damage', 'healing', 'weaken', 'summon', 'ultimate-damage', 'ultimate-transformation'],
    cost: -1,
    season: 3,
    //can't be taken with Drop Limit
  },
  'ally': {
    name: 'Ally Limit',
    applies: ['boost', 'healing'],
    cost: -1,
    season: 1,
  },
  'ammunition': {
    name: 'Ammunition Limit',
    applies: ['damage', 'weaken', 'barrier', 'healing'],
    cost: -3,
    season: 1,
    //can be ranked up, up to rank 3
    //unavailable for Ultimate techniques
  },
  'clone': {
    name: 'Clone Limit',
    applies: ['barrier', 'boost', 'damage', 'healing', 'weaken', 'summon', 'ultimate-damage', 'ultimate-transformation'],
    cost: -2,
    season: 2,
  },
  'companion': {
    name: 'Companion Limit',
    applies: ['barrier', 'boost', 'damage', 'healing', 'weaken', 'summon', 'ultimate-damage', 'ultimate-transformation'],
    cost: -2,
    season: 1,
    //unavailable unless the character has a Companion
  },
  'cooldown': {
    name: 'Cooldown Limit',
    applies: ['damage', 'weaken', 'barrier', 'healing'],
    cost: -2,
    season: 1
    //can be ranked up, up to rank 3
    //unavailable for Ultimate techniques
  },
  'dark-power': {
    name: 'Dark Power Limit',
    applies: ['barrier', 'boost', 'damage', 'healing', 'weaken', 'summon', 'ultimate-damage', 'ultimate-transformation'],
    cost: -10,
    season: 1,
    //unavailable unless the character has Malevolent Entity
  },
  'drop': {
    name: 'Drop Limit',
    applies: ['barrier', 'boost', 'damage', 'healing', 'weaken', 'summon', 'ultimate-damage', 'ultimate-transformation'],
    cost: -4,
    season: 3,
    //can't be taken with Airborne Limit
  },
  'form': {
    name: 'Form Limit',
    applies: ['barrier', 'boost', 'damage', 'healing', 'weaken', 'summon', 'ultimate-damage', 'ultimate-transformation'],
    cost: -2,
    season: 1,
    //can be ranked up
  },
  'falling': {
    name: 'Falling Limit',
    applies: ['barrier', 'boost', 'damage', 'healing', 'weaken', 'summon', 'ultimate-damage', 'ultimate-transformation'],
    cost: -4,
    season: 1,
  },
  'grant-flaw': {
    name: 'Grant Flaw Limit',
    applies: ['boost', 'ultimate-transformation'],
    cost: -1,
    //per SP value of the chosen Flaws
    season: 1,
  },
  'grant-skill': {
    name: 'Grant Skill Limit',
    applies: ['damage', 'weaken', 'ultimate-damage'],
    cost: -1,
    //per SP value of the chosen Skills
    season: 1,
  },
  'health': {
    name: 'Health Limit',
    applies: ['barrier', 'boost', 'damage', 'healing', 'weaken', 'summon', 'ultimate-damage', 'ultimate-transformation'],
    cost: -2,
    season: 1,
    //can be ranked up up to rank 5
  },
  'initiative': {
    name: 'Initiative Limit',
    applies: ['barrier', 'boost', 'damage', 'healing', 'weaken', 'summon', 'ultimate-damage', 'ultimate-transformation'],
    cost: -3,
    season: 1,
    //can be ranked up
  },
  'immobile': {
    name: 'Immobile Limit',
    applies: ['barrier', 'boost', 'damage', 'healing', 'weaken', 'summon', 'ultimate-damage', 'ultimate-transformation'],
    cost: -3,
    season: 1,
    //can't be taken with Slow Limit or Movement Limit
  },
  'injury': {
    name: 'Injury Limit',
    applies: ['barrier', 'boost', 'damage', 'healing', 'weaken', 'summon', 'ultimate-damage', 'ultimate-transformation'],
    cost: -2,
    season: 1,
    //can be ranked up up to rank 5
  },
  'landbound': {
    name: 'Landbound Limit',
    applies: ['boost', 'damage', 'healing', 'weaken', 'ultimate-damage'],
    cost: -1,
    season: 1,
    //also requires a Modifier that allows the Technique to hit flying enemies
  },
  'mercy': {
    name: 'Mercy Limit',
    applies: ['damage', 'ultimate-damage',],
    cost: -3,
    season: 1,
  },
  'minimum-range': {
    name: 'Minimum Range Limit',
    applies: ['barrier', 'boost', 'damage', 'healing', 'weaken', 'summon', 'ultimate-damage', 'ultimate-transformation'],
    cost: -1,
    season: 1,
    //also requires the Ranged Technique modifier
    //can be ranked up as long as the rank does not exceed the maximum range
  },
  'movement': {
    name: 'Movement Limit',
    applies: ['barrier', 'boost', 'damage', 'healing', 'weaken', 'summon', 'ultimate-damage', 'ultimate-transformation'],
    cost: -1,
    season: 1,
    //can't be taken if the Technique has Ramming Attack, Rush Attack, or Immobile Limit
    //can be ranked up as long as the rank is <= the character's Movement stat
  },
  'node-sacrifice': {
    name: 'Node Sacrifice Limit',
    applies: ['barrier', 'boost', 'damage', 'healing', 'weaken', 'summon', 'ultimate-damage', 'ultimate-transformation'],
    cost: -8,
    season: 1,
    //also requires the Attack Node skill
  },
  'pull': {
    name: 'Pull Limit',
    applies: ['damage', 'ultimate-damage'],
    cost: -1,
    season: 1,
    //also requires the Reposition modifier
  },
  'push': {
    name: 'Push Limit',
    applies: ['damage', 'ultimate-damage'],
    cost: -1,
    season: 1,
    //also requires the Reposition modifier
  },
  'reaction': {
    name: 'Reaction Limit',
    applies: ['barrier', 'boost', 'damage', 'healing', 'weaken', 'summon', 'ultimate-damage', 'ultimate-transformation'],
    cost: -1,
    season: 1,
    //requires the Counterattack skill
  },
  'reload': {
    name: 'Reload Limit',
    applies: ['barrier', 'boost', 'damage', 'healing', 'weaken'],
    cost: -4,
    season: 1,
    //can't be taken with Cooldown Limit or Ammunition Limit Rank 3
  },
  'refraction': {
    name: 'Refraction Limit',
    applies: ['damage', 'ultimate-damage'],
    cost: -2,
    season: 2,
    //also requires the Refraction Point skill
  },
  'revert': {
    name: 'Revert Limit',
    applies: ['barrier', 'boost', 'damage', 'healing', 'weaken', 'summon', 'ultimate-damage', 'ultimate-transformation'],
    cost: -10,
    season: 3,
    //also requires the Form Limit
  },
  'sequence': {
    name: 'Sequence Limit',
    applies: ['barrier', 'boost', 'damage', 'healing', 'weaken', 'summon', 'ultimate-damage', 'ultimate-transformation'],
    cost: -4,
    season: 1,
    //can't be taken with Cooldown or Setup
  },
  'self': {
    name: 'Self Limit',
    applies: ['boost', 'healing'],
    cost: -1,
    season: 1,
  },
  'setup': {
    name: 'Setup Limit',
    applies: ['barrier', 'boost', 'damage', 'healing', 'weaken', 'summon', 'ultimate-damage', 'ultimate-transformation'],
    cost: -1,
    season: 1,
    //can't be taken with Valor Limit or Sequence Limit
    //can be ranked up
  },
  'single-companion': {
    name: 'Single Companion Limit',
    applies: ['barrier', 'boost', 'damage', 'healing', 'weaken', 'summon', 'ultimate-damage', 'ultimate-transformation'],
    cost: -3,
    season: 1,
    //requires the Companion skill. maybe two
  },
  'slow-limit': {
    name: 'Slow Limit',
    applies: ['damage', 'ultimate-damage'],
    cost: -6,
    season: 1,
    //can't be taken with Immobile
  },
  'temporary': {
    name: 'Temporary Limit',
    applies: ['boost', 'weaken'],
    cost: -6,
    season: 1,
  },
  'time': {
    name: 'Time Limit',
    applies: ['summon', 'ultimate-transformation'],
    cost: -5,
    season: 2,
    //can be ranked up, up to rank 5
  },
  'unstable-summon': {
    name: 'Unstable Summon Limit',
    applies: ['summon'],
    cost: -4,
    season: 1,
    //can be ranked up, up to rank 5
  },
  'upkeep': {
    name: 'Upkeep Limit',
    applies: ['summon', 'ultimate-transformation'],
    cost: -4,
    season: 1,
    //can be ranked up
  },
  'vitality': {
    name: 'Vitality Limit',
    applies: ['barrier', 'boost', 'damage', 'healing', 'weaken', 'summon', 'ultimate-damage', 'ultimate-transformation'],
    cost: -3,
    season: 1,
  },
  'valor-consumption': {
    name: 'Valor Consumption Limit',
    applies: ['barrier', 'boost', 'damage', 'healing', 'weaken', 'summon', 'ultimate-damage', 'ultimate-transformation'],
    cost: -5,
    season: 1,
  },
  'valor': {
    name: 'Valor Limit',
    applies: ['barrier', 'boost', 'damage', 'healing', 'weaken', 'summon', 'ultimate-damage', 'ultimate-transformation'],
    cost: -2,
    season: 1,
    //can't be taken with Setup
  },
  'dark-surrender': {
    name: 'Dark Surrender Limit',
    applies: ['ultimate-damage', 'ultimate-transformation'],
    cost: -30,
    season: 2,
    //requires Malevolent Entity skill
  },
  'final': {
    name: 'Final Limit',
    applies: ['ultimate-damage'],
    cost: -Infinity,
    season: 3,
  },
  'ultimate-cooldown': {
    name: 'Ultimate Cooldown Limit',
    applies: ['ultimate-damage', 'ultimate-transformation'],
    cost: -10,
    season: 1,
    //can be ranked up
  },
  'ultimate-health': {
    name: 'Ultimate Health Limit',
    applies: ['ultimate-damage', 'ultimate-transformation'],
    cost: -10,
    season: 1,
    //reduce final cost by an additional 15
  },
  'ultimate-valor': {
    name: 'Ultimate Valor Limit',
    applies: ['ultimate-damage', 'ultimate-transformation'],
    cost: -10,
    season: 1,
    //can be ranked up
  },
}
