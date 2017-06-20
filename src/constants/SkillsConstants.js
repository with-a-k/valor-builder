//A hugetastic array of objects with:
/*
  name: skill's name
  value: skill's text value for use with react-select
  learn_sp: SP it costs to get one level of
  season: a level requirement, kinda
  tags: array of tags
*/
//This array is still pretty lightweight and might be added to.
//For now it exists to be iterated over to determine how to
//populate the skill selection bar.

module.exports = [
  {
    name: 'Aggravated Wounds',
    value: 'aggravated-wounds',
    learn_sp: -2,
    season: 1,
    tags: ['Flaw', 'Passive']
  },
  {
    name: 'Berserker',
    value: 'berserker',
    learn_sp: -5,
    season: 1,
    tags: ['Flaw', 'Situational']
  },
  {
    name: 'Compulsion',
    value: 'compulsion',
    learn_sp: -4,
    season: 1,
    tags: ['Flaw', 'Situational']
  },
  {
    name: 'Despair',
    value: 'despair',
    learn_sp: -3,
    season: 1,
    tags: ['Flaw', 'Situational', 'Knockout']
  },
  {
    name: 'Energy Vulnerability',
    value: 'energy-vulnerability',
    learn_sp: -2,
    season: 1,
    tags: ['Flaw', 'Passive', 'Resistance']
  },
  {
    name: 'Feeble',
    value: 'feeble',
    learn_sp: -3,
    season: 1,
    tags: ['Flaw', 'Situational']
  },
  {
    name: 'Form Restriction',
    value: 'form-restriction',
    learn_sp: -2,
    season: 1,
    tags: ['Flaw', 'Situational', 'Repeatable']
  },
  {
    name: 'Fragile',
    value: 'fragile',
    learn_sp: -3,
    season: 1,
    tags: ['Flaw', 'Passive', 'MaxHealth']
  },
  {
    name: 'Lack of Control',
    value: 'lack-of-control',
    learn_sp: -2,
    season: 1,
    tags: ['Flaw', 'Passive', 'MaxStamina']
  },
  {
    name: 'Malevolent Entity',
    value: 'malevolent-entity',
    learn_sp: -5,
    season: 1,
    tags: ['Flaw', 'Situational']
  },
  {
    name: 'Non-proficient',
    value: 'non-proficient',
    learn_sp: -1,
    season: 1,
    tags: ['Flaw', 'Challenge', 'Repeatable']
  },
  {
    name: 'Oblivious',
    value: 'oblivious',
    learn_sp: -3,
    season: 1,
    tags: ['Flaw', 'Situational']
  },
  {
    name: 'Slow',
    value: 'slow',
    learn_sp: -2,
    season: 1,
    tags: ['Flaw', 'Passive', 'Movement']
  },
  {
    name: 'Slow Healing',
    value: 'slow-healing',
    learn_sp: -2,
    season: 1,
    tags: ['Flaw', 'Situational']
  },
  {
    name: 'Slow to Act',
    value: 'slow-to-act',
    learn_sp: -1,
    season: 1,
    tags: ['Flaw', 'Passive', 'Initiative']
  },
  {
    name: 'Unthreatening',
    value: 'unthreatening',
    learn_sp: -3,
    season: 1,
    tags: ['Flaw', 'Passive']
  },
  {
    name: 'Uncoordinated',
    value: 'uncoordinated',
    learn_sp: -3,
    season: 1,
    tags: ['Flaw', 'Situational']
  },
  {
    name: 'Violent',
    value: 'violent',
    learn_sp: -3,
    season: 1,
    tags: ['Flaw', 'Situational']
  },
  {
    name: 'Weak Energy Attacker',
    value: 'weak-energy-attacker',
    learn_sp: -3,
    season: 1,
    tags: ['Flaw', 'Passive', 'EnergyAttack']
  },
  {
    name: 'Weak Physical Attacker',
    value: 'weak-physical-attacker',
    learn_sp: -3,
    season: 1,
    tags: ['Flaw', 'Passive', 'PhysicalAttack']
  },
  {
    name: 'Weak Aura',
    value: 'weak-aura',
    learn_sp: -3,
    season: 1,
    tags: ['Flaw', 'Situational']
  },
  {
    name: 'Weak Defender',
    value: 'weak-defender',
    learn_sp: -2,
    season: 1,
    tags: ['Flaw', 'Passive', 'Defense']
  },
  {
    name: 'Weak-Willed',
    value: 'weak-willed',
    learn_sp: -4,
    season: 1,
    tags: ['Flaw', 'Passive', 'StartingValor']
  },
];
