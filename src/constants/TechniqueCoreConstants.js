module.exports = {
  'barrier': {
    name: 'Barrier Core',
    action: 'Support',
    baseStaminaCost: 1,
    levelStaminaCost: 1,
    attributeOptions: ['Spirit', 'Mind'],
    ultimate: false,
    skills: false
  },
  'boost': {
    name: 'Boost Core',
    action: 'Support',
    baseStaminaCost: 0,
    levelStaminaCost: 2,
    attributeOptions: ['Strength', 'Agility', 'Spirit', 'Mind', 'Guts'],
    ultimate: false,
    skills: true
  },
  'damage': {
    name: 'Damage Core',
    action: 'Attack',
    baseStaminaCost: 2,
    levelStaminaCost: 1,
    attributeOptions: ['Strength', 'Agility', 'Spirit', 'Mind'],
    ultimate: false,
    skills: false
  },
  'healing': {
    name: 'Healing Core',
    action: 'Support',
    baseStaminaCost: 1,
    levelStaminaCost: 1,
    attributeOptions: ['Spirit', 'Mind', 'Guts'],
    ultimate: false,
    skills: false
  },
  'mimic': {
    name: 'Mimic Core',
    action: '???',
    baseStaminaCost: 0,
    levelStaminaCost: 0,
    attributeOptions: ['Strength', 'Agility', 'Spirit', 'Mind', 'Guts'],
    ultimate: false,
    skills: false
  },
  'summon': {
    name: 'Summoning Core',
    action: 'Slow',
    baseStaminaCost: 3,
    levelStaminaCost: 2,
    attributeOptions: ['Strength', 'Agility', 'Spirit', 'Mind', 'Guts'],
    ultimate: false,
    skills: false
  },
  'weaken': {
    name: 'Weaken Core',
    action: 'Support',
    baseStaminaCost: 1,
    levelStaminaCost: 1,
    attributeOptions: ['Strength', 'Agility', 'Spirit', 'Mind', 'Guts'],
    ultimate: false,
    skills: true
  },
  'ultimate-damage': {
    name: 'Ultimate Damage Core',
    action: 'Attack',
    baseStaminaCost: 4,
    levelStaminaCost: 2,
    attributeOptions: ['Strength', 'Agility', 'Spirit', 'Mind'],
    ultimate: true,
    skills: false
  },
  'ultimate-transformation': {
    name: 'Transformation Core',
    action: 'Support',
    baseStaminaCost: 0,
    levelStaminaCost: 3,
    attributeOptions: ['Strength', 'Agility', 'Spirit', 'Mind', 'Guts'],
    ultimate: true,
    skills: true
  }
}
