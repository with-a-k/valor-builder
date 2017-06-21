//A hugetastic object of objects with:
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

module.exports = {
  'aggravated-wounds': {
    name: 'Aggravated Wounds',
    value: 'aggravated-wounds',
    learn_sp: -2,
    season: 1,
    tags: ['Flaw', 'Passive']
  },
  'berserker': {
    name: 'Berserker',
    value: 'berserker',
    learn_sp: -5,
    season: 1,
    tags: ['Flaw', 'Situational']
  },
  'compulsion': {
    name: 'Compulsion',
    value: 'compulsion',
    learn_sp: -4,
    season: 1,
    tags: ['Flaw', 'Situational']
  },
  'despair': {
    name: 'Despair',
    value: 'despair',
    learn_sp: -3,
    season: 1,
    tags: ['Flaw', 'Situational', 'Knockout']
  },
  'energy-vulnerability': {
    name: 'Energy Vulnerability',
    value: 'energy-vulnerability',
    learn_sp: -2,
    season: 1,
    tags: ['Flaw', 'Passive', 'Resistance']
  },
  'feeble': {
    name: 'Feeble',
    value: 'feeble',
    learn_sp: -3,
    season: 1,
    tags: ['Flaw', 'Situational']
  },
  'form-restriction': {
    name: 'Form Restriction',
    value: 'form-restriction',
    learn_sp: -2,
    season: 1,
    tags: ['Flaw', 'Situational', 'Repeatable']
  },
  'fragile': {
    name: 'Fragile',
    value: 'fragile',
    learn_sp: -3,
    season: 1,
    tags: ['Flaw', 'Passive', 'MaxHealth']
  },
  'lack-of-control': {
    name: 'Lack of Control',
    value: 'lack-of-control',
    learn_sp: -2,
    season: 1,
    tags: ['Flaw', 'Passive', 'MaxStamina']
  },
  'malevolent-entity': {
    name: 'Malevolent Entity',
    value: 'malevolent-entity',
    learn_sp: -5,
    season: 1,
    tags: ['Flaw', 'Situational']
  },
  'non-proficient': {
    name: 'Non-proficient',
    value: 'non-proficient',
    learn_sp: -1,
    season: 1,
    tags: ['Flaw', 'Challenge', 'Repeatable']
  },
  'oblivious': {
    name: 'Oblivious',
    value: 'oblivious',
    learn_sp: -3,
    season: 1,
    tags: ['Flaw', 'Situational']
  },
  'slow': {
    name: 'Slow',
    value: 'slow',
    learn_sp: -2,
    season: 1,
    tags: ['Flaw', 'Passive', 'Movement']
  },
  'slow-healing': {
    name: 'Slow Healing',
    value: 'slow-healing',
    learn_sp: -2,
    season: 1,
    tags: ['Flaw', 'Situational']
  },
  'slow-to-act': {
    name: 'Slow to Act',
    value: 'slow-to-act',
    learn_sp: -1,
    season: 1,
    tags: ['Flaw', 'Situational', 'Initiative']
  },
  'unthreatening': {
    name: 'Unthreatening',
    value: 'unthreatening',
    learn_sp: -3,
    season: 1,
    tags: ['Flaw', 'Passive']
  },
  'uncoordinated': {
    name: 'Uncoordinated',
    value: 'uncoordinated',
    learn_sp: -3,
    season: 1,
    tags: ['Flaw', 'Situational']
  },
  'violent': {
    name: 'Violent',
    value: 'violent',
    learn_sp: -3,
    season: 1,
    tags: ['Flaw', 'Situational']
  },
  'weak-energy-attacker': {
    name: 'Weak Energy Attacker',
    value: 'weak-energy-attacker',
    learn_sp: -3,
    season: 1,
    tags: ['Flaw', 'Passive', 'EnergyAttack']
  },
  'weak-physical-attacker': {
    name: 'Weak Physical Attacker',
    value: 'weak-physical-attacker',
    learn_sp: -3,
    season: 1,
    tags: ['Flaw', 'Passive', 'PhysicalAttack']
  },
  'weak-aura': {
    name: 'Weak Aura',
    value: 'weak-aura',
    learn_sp: -3,
    season: 1,
    tags: ['Flaw', 'Situational']
  },
  'weak-defender': {
    name: 'Weak Defender',
    value: 'weak-defender',
    learn_sp: -2,
    season: 1,
    tags: ['Flaw', 'Passive', 'Defense']
  },
  'weak-willed': {
    name: 'Weak-Willed',
    value: 'weak-willed',
    learn_sp: -4,
    season: 1,
    tags: ['Flaw', 'Passive', 'StartingValor']
  },
  'flightless': {
    name: 'Weak-Willed',
    value: 'weak-willed',
    learn_sp: -3,
    season: 1,
    tags: ['Flaw', 'Situational', 'Weaken']
  },
  //For all these Impaired Whatever skills, the Unofficial Errata version
  //just costs more.
  'impaired-accuracy-raw': {
    name: 'Impaired Accuracy (RAW)',
    value: 'impaired-accuracy-raw',
    learn_sp: -3,
    season: 1,
    tags: ['Flaw', 'Situational', 'Weaken']
  },
  'impaired-accuracy-ue': {
    name: 'Impaired Accuracy (Unofficial Errata)',
    value: 'impaired-accuracy-ue',
    learn_sp: -4,
    season: 1,
    tags: ['Flaw', 'Situational', 'Weaken']
  },
  'impaired-physical-accuracy': {
    name: 'Impaired Physical Accuracy',
    value: 'impaired-physical-accuracy',
    learn_sp: -3,
    season: 1,
    tags: ['Flaw', 'Situational', 'Weaken', 'Houserule']
  },
  'impaired-energy-accuracy': {
    name: 'Impaired Energy Accuracy',
    value: 'impaired-energy-accuracy',
    learn_sp: -3,
    season: 1,
    tags: ['Flaw', 'Situational', 'Weaken', 'Houserule']
  },
  'impaired-evasion-raw': {
    name: 'Impaired Evasion (RAW)',
    value: 'impaired-evasion-raw',
    learn_sp: -3,
    season: 1,
    tags: ['Flaw', 'Situational', 'Weaken']
  },
  'impaired-evasion-ue': {
    name: 'Impaired Accuracy (Unofficial Errata)',
    value: 'impaired-accuracy-ue',
    learn_sp: -4,
    season: 1,
    tags: ['Flaw', 'Situational', 'Weaken']
  },
  'impaired-physical-evasion': {
    name: 'Impaired Physical Evasion',
    value: 'impaired-physical-evasion',
    learn_sp: -3,
    season: 1,
    tags: ['Flaw', 'Situational', 'Weaken', 'Houserule']
  },
  'impaired-energy-evasion': {
    name: 'Impaired Energy Evasion',
    value: 'impaired-energy-evasion',
    learn_sp: -3,
    season: 1,
    tags: ['Flaw', 'Situational', 'Weaken', 'Houserule']
  },
  'balanced-fighter': {
    name: 'Balanced Fighter',
    value: 'balanced-fighter',
    learn_sp: 8,
    season: 1,
    tags: ['Passive']
  },
  'break-valor-limit': {
    name: 'Break Valor Limit',
    value: 'break-valor-limit',
    learn_sp: 6,
    season: 4,
    tags: ['Passive']
  },
  'bravado-raw': {
    name: 'Bravado (RAW)',
    value: 'bravado-raw',
    learn_sp: 6,
    season: 1,
    tags: ['Passive']
  },
  //Levels up at 6 SP per level instead of 4.
  'bravado-ue': {
    name: 'Bravado (Unofficial Errata)',
    value: 'bravado-raw',
    learn_sp: 6,
    season: 1,
    tags: ['Passive']
  },
  //A houserule variant Bravado which is Fixed instead of levelable.
  'bravado-fixed': {
    name: 'Bravado (Fixed)',
    value: 'bravado-fixed',
    learn_sp: 6,
    season: 1,
    tags: ['Passive']
  },
  //The book classifies this as Permanent (Passive), but...
  'discreet-aura': {
    name: 'Discreet Aura',
    value: 'discreet-aura',
    learn_sp: 6,
    season: 1,
    tags: ['Situational']
  },
  'darksight': {
    name: 'Darksight',
    value: 'darksight',
    learn_sp: 4,
    season: 1,
    tags: ['Passive']
  },
  'energy-attacker': {
    name: 'Energy Attacker',
    value: 'energy-attacker',
    learn_sp: 6,
    season: 1,
    tags: ['Passive', 'EnergyAttack']
  },
  'expanded-reach': {
    name: 'Expanded Reach',
    value: 'expanded-reach',
    learn_sp: 8,
    season: 4,
    tags: ['Passive']
  },
  'extra-action': {
    name: 'Extra Action',
    value: 'extra-action',
    learn_sp: 12,
    season: 4,
    tags: ['Passive']
  },
  'fast-healing': {
    name: 'Fast Healing',
    value: 'fast-healing',
    learn_sp: 4,
    season: 1,
    tags: ['Passive']
  },
  'improved-di': {
    name: 'Improved Damage Increment',
    value: 'improved-di',
    learn_sp: 5,
    season: 1,
    tags: ['Passive']
  },
  //Unlike most of the other UE skills, this is a straight buff.
  'improved-di-ue': {
    name: 'Improved Damage Increment (Unofficial Errata)',
    value: 'improved-di-ue',
    learn_sp: 4,
    season: 1,
    tags: ['Passive']
  },
  'increased-size': {
    name: 'Increased Size',
    value: 'increased-size',
    learn_sp: 2,
    season: 1,
    tags: ['Passive']
  },
  'iron-defense': {
    name: 'Iron Defense',
    value: 'iron-defense',
    learn_sp: 4,
    season: 1,
    tags: ['Passive', 'Defense']
  },
  'physical-attacker': {
    name: 'Physical Attacker',
    value: 'physical-attacker',
    learn_sp: 6,
    season: 1,
    tags: ['Passive', 'PhysicalAttack']
  },
  'regeneration': {
    name: 'Regeneration',
    value: 'regeneration',
    learn_sp: 6,
    season: 4,
    tags: ['Passive']
  },
  'resistant': {
    name: 'Resistant',
    value: 'resistant',
    learn_sp: 4,
    season: 1,
    tags: ['Passive', 'Resistance']
  },
  //The book classifies this as Permanent, but it only affects airborne targets.
  'sky-attack': {
    name: 'Sky Attack',
    value: 'sky-attack',
    learn_sp: 5,
    season: 2,
    tags: ['Situational']
  },
  'sprinter': {
    name: 'Sprinter',
    value: 'sprinter',
    learn_sp: 4,
    season: 1,
    tags: ['Passive', 'Movement']
  },
  'stamina-recovery': {
    name: 'Stamina Recovery',
    value: 'stamina-recovery',
    learn_sp: 4,
    season: 4,
    tags: ['Passive']
  },
  'teleportation': {
    name: 'Teleportation',
    value: 'teleportation',
    learn_sp: 6,
    season: 4,
    tags: ['Passive']
  },
  'tireless': {
    name: 'Tireless',
    value: 'tireless',
    learn_sp: 5,
    season: 1,
    tags: ['Passive', 'MaxStamina']
  },
  'tough': {
    name: 'Tough',
    value: 'tough',
    learn_sp: 6,
    season: 1,
    tags: ['Passive', 'MaxHealth']
  },
  'unyielding-determination-raw': {
    name: 'Unyielding Determination (RAW)',
    value: 'unyielding-determination-raw',
    learn_sp: 8,
    season: 4,
    tags: ['Passive']
  },
  //Only affects Valor awards from the GM.
  'unyielding-determination-ue': {
    name: 'Unyielding Determination (Unofficial Errata)',
    value: 'unyielding-determination-ue',
    learn_sp: 8,
    season: 4,
    tags: ['Passive']
  },
  //NPC-only variant of Unyielding Det. (RAW).
  'valiant': {
    name: 'Valiant',
    value: 'valiant',
    learn_sp: 12,
    season: 1,
    tags: ['Passive', 'NPC']
  },
  'versatile-fighter': {
    name: 'Versatile Fighter',
    value: 'versatile-fighter',
    learn_sp: 6,
    season: 1,
    tags: ['Passive']
  },
  'violent-aura': {
    name: 'Violent Aura',
    value: 'violent-aura',
    learn_sp: 4,
    season: 4,
    tags: ['Passive']
  },
  'abundant-creation': {
    name: 'Abundant Creation',
    value: 'abundant-creation',
    learn_sp: 5,
    season: 2,
    tags: ['Situational', 'Creation']
  },
  'bounce-back': {
    name: 'Bounce Back',
    value: 'bounce-back',
    learn_sp: 6,
    season: 1,
    tags: ['Situational']
  },
  'clone-tactics': {
    name: 'Clone Tactics',
    value: 'clone-tactics',
    learn_sp: 5,
    season: 2,
    tags: ['Situational', 'Clone']
  },
  'combat-toss': {
    name: 'Combat Toss',
    value: 'combat-toss',
    learn_sp: 4,
    season: 2,
    tags: ['Situational', 'Toss']
  },
  'crisis': {
    name: 'Crisis',
    value: 'crisis',
    learn_sp: 4,
    season: 1,
    tags: ['Situational']
  },
  'danger-sense': {
    name: 'Danger Sense',
    value: 'danger-sense',
    learn_sp: 3,
    season: 1,
    tags: ['Situational']
  },
  'daredevil': {
    name: 'Daredevil',
    value: 'daredevil',
    learn_sp: 4,
    season: 2,
    tags: ['Situational']
  },
  'desperation': {
    name: 'Desperation',
    value: 'desperation',
    learn_sp: 6,
    season: 1,
    tags: ['Situational']
  },
  'dig-deep': {
    name: 'Dig Deep',
    value: 'dig-deep',
    learn_sp: 5,
    season: 1,
    tags: ['Situational']
  },
  'discretion': {
    name: 'Discretion',
    value: 'discretion',
    learn_sp: 2,
    season: 1,
    tags: ['Situational']
  },
  'empower-attack': {
    name: 'Empower Attack',
    value: 'empower-attack',
    learn_sp: 6,
    season: 1,
    tags: ['Situational']
  },
  'extended-range': {
    name: 'Extended Range',
    value: 'extended-range',
    learn_sp: 6,
    season: 4,
    tags: ['Situational']
  },
  'free-flight': {
    name: 'Free Flight',
    value: 'free-flight',
    learn_sp: 3,
    season: 4,
    tags: ['Situational', 'Fly']
  },
  'free-swift-step': {
    name: 'Free Swift Step',
    value: 'free-swift-step',
    learn_sp: 5,
    season: 4,
    tags: ['Situational', 'Swift Step']
  },
  'improved-swimming': {
    name: 'Improved Swimming',
    value: 'improved-swimming',
    learn_sp: 4,
    season: 1,
    tags: ['Situational']
  },
  'nimble-movement': {
    name: 'Nimble Movement',
    value: 'nimble-movement',
    learn_sp: 4,
    season: 1,
    tags: ['Situational']
  },
  'overload-limits': {
    name: 'Overload Limits',
    value: 'overload-limits',
    learn_sp: 6,
    season: 1,
    tags: ['Situational']
  },
  'passive-healing': {
    name: 'Passive Healing',
    value: 'passive-healing',
    learn_sp: 4,
    season: 1,
    tags: ['Situational']
  },
  'phasing': {
    name: 'Phasing',
    value: 'phasing',
    learn_sp: 5,
    season: 2,
    tags: ['Situational']
  },
  'protector': {
    name: 'Protector',
    value: 'protector',
    learn_sp: 5,
    season: 1,
    tags: ['Situational', 'Cover']
  },
  'quick-to-act': {
    name: 'Quick to Act',
    value: 'quick-to-act',
    learn_sp: 3,
    season: 1,
    tags: ['Situational', 'Initiative']
  },
  'reckless-attack': {
    name: 'Reckless Attack',
    value: 'reckless-attack',
    learn_sp: 5,
    season: 1,
    tags: ['Situational']
  },
  'resolute-strike': {
    name: 'Resolute Strike',
    value: 'resolute-strike',
    learn_sp: 5,
    season: 1,
    tags: ['Situational']
  },
  'revenge': {
    name: 'Revenge',
    value: 'revenge',
    learn_sp: 5,
    season: 1,
    tags: ['Situational', 'Knockout']
  },
  'rising-attack': {
    name: 'Rising Attack',
    value: 'rising-attack',
    learn_sp: 6,
    season: 2,
    tags: ['Situational']
  },
  'rolling-recovery': {
    name: 'Rolling Recovery',
    value: 'rolling-recovery',
    learn_sp: 4,
    season: 1,
    tags: ['Situational']
  },
  'safe-stride': {
    name: 'Safe Stride',
    value: 'safe-stride',
    learn_sp: 5,
    season: 2,
    tags: ['Situational']
  },
  'split-move': {
    name: 'Split Move',
    value: 'split-move',
    learn_sp: 6,
    season: 2,
    tags: ['Situational']
  },
  'team-tactics': {
    name: 'Team Tactics',
    value: 'team-tactics',
    learn_sp: 5,
    season: 1,
    tags: ['Situational']
  },
  'transposition': {
    name: 'Transposition',
    value: 'transposition',
    learn_sp: 4,
    season: 1,
    tags: ['Situational', 'Swift Step']
  },
  'underhanded': {
    name: 'Underhanded',
    value: 'underhanded',
    learn_sp: 5,
    season: 2,
    tags: ['Situational']
  },
  'unmovable': {
    name: 'Unmovable',
    value: 'unmovable',
    learn_sp: 6,
    season: 1,
    tags: ['Situational']
  },
  //common alternate spelling
  'immovable': {
    name: 'Unmovable',
    value: 'unmovable',
    learn_sp: 6,
    season: 1,
    tags: ['Situational']
  },
  'unshakeable': {
    name: 'Unshakeable',
    value: 'unshakeable',
    learn_sp: 6,
    season: 3,
    tags: ['Situational']
  },
  'unstoppable': {
    name: 'Unstoppable',
    value: 'unstoppable',
    learn_sp: 6,
    season: 3,
    tags: ['Situational']
  },
  'water-adaptation': {
    name: 'Water Adaptation',
    value: 'water-adaptation',
    learn_sp: 6,
    season: 2,
    tags: ['Situational']
  },
  'wall-walk': {
    name: 'Wall Walk',
    value: 'wall-walk',
    learn_sp: 4,
    season: 2,
    tags: ['Situational']
  },
  'water-walk': {
    name: 'Water Walk',
    value: 'water-walk',
    learn_sp: 4,
    season: 2,
    tags: ['Situational']
  },
  'x-ray-vision': {
    name: 'X-Ray Vision',
    value: 'x-ray-vision',
    learn_sp: 4,
    season: 2,
    tags: ['Situational']
  },
  'attack-node': {
    name: 'Attack Node',
    value: 'attack-node',
    learn_sp: 5,
    season: 1,
    tags: ['Active']
  },
  'attack-node-network': {
    name: 'Attack Node Network',
    value: 'attack-node-network',
    learn_sp: 4,
    season: 3,
    tags: ['Active', 'Attack Node']
  },
  'battle-analysis': {
    name: 'Battle Analysis',
    value: 'battle-analysis',
    learn_sp: 6,
    season: 2,
    tags: ['Active']
  },
  'clone': {
    name: 'Clone',
    value: 'clone',
    learn_sp: 6,
    season: 2,
    tags: ['Active']
  },
  'dark-healing': {
    name: 'Dark Healing',
    value: 'dark-healing',
    learn_sp: 6,
    season: 1,
    tags: ['Active', 'Malevolent Entity']
  },
  'dirty-trick': {
    name: 'Dirty Trick',
    value: 'dirty-trick',
    learn_sp: 5,
    season: 1,
    tags: ['Active']
  },
  'duel': {
    name: 'Duel',
    value: 'duel',
    learn_sp: 2,
    season: 1,
    tags: ['Active']
  },
  'effect-capture': {
    name: 'Effect Capture',
    value: 'effect-capture',
    learn_sp: 4,
    season: 2,
    tags: ['Active']
  },
  'effect-transfer': {
    name: 'Effect Transfer',
    value: 'effect-transfer',
    learn_sp: 4,
    season: 1,
    tags: ['Active']
  },
  'exploit-weakness': {
    name: 'Exploit Weakness',
    value: 'exploit-weakness',
    learn_sp: 6,
    season: 3,
    tags: ['Active']
  },
  'feint': {
    name: 'Feint',
    value: 'feint',
    learn_sp: 6,
    season: 1,
    tags: ['Active']
  },
  'flunky-domination': {
    name: 'Flunky Domination',
    value: 'flunky-domination',
    learn_sp: 5,
    season: 3,
    tags: ['Active']
  },
  'fly': {
    name: 'Fly',
    value: 'fly',
    learn_sp: 6,
    season: 3,
    tags: ['Active']
  },
  'health-transference': {
    name: 'Health Transference',
    value: 'health-transference',
    learn_sp: 4,
    season: 2,
    tags: ['Active']
  },
  //In later seasons, Inspire provided too much valor output.
  'inspire-raw': {
    name: 'Inspire (RAW)',
    value: 'inspire-raw',
    learn_sp: 5,
    season: 1,
    tags: ['Active']
  },
  //The UE version is, thus, a Fixed skill.
  'inspire-ue': {
    name: 'Inspire (Unofficial Errata)',
    value: 'inspire-ue',
    learn_sp: 5,
    season: 1,
    tags: ['Active']
  },
  'intimidate': {
    name: 'Intimidate',
    value: 'intimidate',
    learn_sp: 5,
    season: 1,
    tags: ['Active']
  },
  'jump': {
    name: 'Jump',
    value: 'jump',
    learn_sp: 4,
    season: 1,
    tags: ['Active']
  },
  'nullify': {
    name: 'Nullify',
    value: 'nullify',
    learn_sp: 5,
    season: 1,
    tags: ['Active']
  },
  'portal': {
    name: 'Portal',
    value: 'portal',
    learn_sp: 6,
    season: 2,
    tags: ['Active']
  },
  'provoke': {
    name: 'Provoke',
    value: 'provoke',
    learn_sp: 4,
    season: 1,
    tags: ['Active']
  },
  'recharge': {
    name: 'Recharge',
    value: 'recharge',
    learn_sp: 5,
    season: 1,
    tags: ['Active']
  },
  'refraction-chain': {
    name: 'Feint',
    value: 'refraction-chain',
    learn_sp: 6,
    season: 3,
    tags: ['Active']
  },
  'refraction-point': {
    name: 'Refraction Point',
    value: 'refraction-point',
    learn_sp: 4,
    season: 2,
    tags: ['Active']
  },
  'seal': {
    name: 'Seal',
    value: 'seal',
    learn_sp: 6,
    season: 2,
    tags: ['Active']
  },
  'shadow-meld': {
    name: 'Shadow Meld',
    value: 'shadow-meld',
    learn_sp: 6,
    season: 2,
    tags: ['Active']
  },
  'size-up': {
    name: 'Size Up',
    value: 'size-up',
    learn_sp: 3,
    season: 1,
    tags: ['Active']
  },
  'spirit-sight': {
    name: 'Spirit Sight',
    value: 'spirit-sight',
    learn_sp: 5,
    season: 1,
    tags: ['Active']
  },
  'stamina-transference': {
    name: 'Stamina Transference',
    value: 'stamina-transference',
    learn_sp: 4,
    season: 2,
    tags: ['Active']
  },
  'swift-jump': {
    name: 'Swift Jump',
    value: 'swift-jump',
    learn_sp: 3,
    season: 3,
    tags: ['Active', 'Jump']
  },
  'swift-step': {
    name: 'Swift Step',
    value: 'swift-step',
    learn_sp: 5,
    season: 2,
    tags: ['Active']
  },
  'toss': {
    name: 'Toss',
    value: 'toss',
    learn_sp: 5,
    season: 1,
    tags: ['Active']
  },
  //The book classifies this as Reaction, but it works with something
  //you chose to do yourself; that, and other skills that affect Swift Step
  //are also Active.
  'afterimage': {
    name: 'Afterimage',
    value: 'afterimage',
    learn_sp: 4,
    season: 2,
    tags: ['Active', 'Swift Step']
  },
  'area-shield': {
    name: 'Area Shield',
    value: 'area-shield',
    learn_sp: 4,
    season: 2,
    tags: ['Reaction']
  },
  'clash': {
    name: 'Clash',
    value: 'clash',
    learn_sp: 3,
    season: 2,
    tags: ['Reaction', 'Counterattack']
  },
  //RAW Combination Attack is horrendously overtuned and broken.
  //For one thing, you can't combination attack with someone whose
  //initiative is higher than yours.
  //For another thing, it's basically +1 to two attacks every round.
  //Unless you're the last player, in which case it's useless.
  'combination-attack-raw': {
    name: 'Combination Attack (RAW)',
    value: 'combination-attack-raw',
    learn_sp: 6,
    season: 1,
    tags: ['Reaction']
  },
  //Fortunately, this has been discussed. This version fixes the issues.
  'combination-attack-ue': {
    name: 'Combination Attack (Unofficial Errata)',
    value: 'combination-attack-ue',
    learn_sp: 6,
    season: 1,
    tags: ['Reaction']
  },
  'counterattack': {
    name: 'Counterattack',
    value: 'counterattack',
    learn_sp: 6,
    season: 1,
    tags: ['Reaction']
  },
  'cover': {
    name: 'Cover',
    value: 'cover',
    learn_sp: 6,
    season: 1,
    tags: ['Reaction']
  },
  'damage-feedback': {
    name: 'Damage Feedback',
    value: 'damage-feedback',
    learn_sp: 5,
    season: 2,
    tags: ['Reaction']
  },
  'defensive-clash': {
    name: 'Defensive Clash',
    value: 'defensive-clash',
    learn_sp: 4,
    season: 3,
    tags: ['Reaction']
  },
  'deflecting-shield': {
    name: 'Deflecting Shield',
    value: 'deflecting-shield',
    learn_sp: 4,
    season: 3,
    tags: ['Reaction', 'Area Shield', 'Line Deflect']
  },
  'diving-escape': {
    name: 'Diving Escape',
    value: 'diving-escape',
    learn_sp: 5,
    season: 2,
    tags: ['Reaction']
  },
  'final-attack': {
    name: 'Final Attack',
    value: 'final-attack',
    learn_sp: 6,
    season: 2,
    tags: ['Reaction']
  },
  'ignore-effect': {
    name: 'Ignore Effect',
    value: 'ignore-effect',
    learn_sp: 5,
    season: 1,
    tags: ['Reaction']
  },
  'interrupt-attack': {
    name: 'Interrupt Attack',
    value: 'interrupt-attack',
    learn_sp: 3,
    season: 1,
    tags: ['Reaction']
  },
  'line-deflect': {
    name: 'Line Deflect',
    value: 'line-deflect',
    learn_sp: 5,
    season: 2,
    tags: ['Reaction']
  },
  'mobile-cover': {
    name: 'Mobile Cover',
    value: 'mobile-cover',
    learn_sp: 5,
    season: 2,
    tags: ['Reaction', 'Cover']
  },
  'mobile-dodge': {
    name: 'Mobile Dodge',
    value: 'mobile-dodge',
    learn_sp: 4,
    season: 2,
    tags: ['Reaction']
  },
  'opportunistic-dodge': {
    name: 'Opportunistic Dodge',
    value: 'opportunistic-dodge',
    learn_sp: 6,
    season: 2,
    tags: ['Reaction']
  },
  'push-away': {
    name: 'Push Away',
    value: 'push-away',
    learn_sp: 4,
    season: 2,
    tags: ['Reaction']
  },
  'prepared': {
    name: 'Prepared',
    value: 'prepared',
    learn_sp: 6,
    season: 3,
    tags: ['Reaction', 'Counterattack']
  },
  'ranged-interrupt': {
    name: 'Ranged Interrupt',
    value: 'ranged-interrupt',
    learn_sp: 4,
    season: 2,
    tags: ['Reaction', 'Interrupt Attack']
  },
  'shrug-off': {
    name: 'Shrug Off',
    value: 'shrug-off',
    learn_sp: 6,
    season: 2,
    tags: ['Reaction']
  },
  'acceleration': {
    name: 'Acceleration',
    value: 'acceleration',
    learn_sp: 5,
    season: 1,
    tags: ['Overdrive']
  },
  'analysis': {
    name: 'Analysis',
    value: 'analysis',
    learn_sp: 5,
    season: 1,
    tags: ['Overdrive']
  },
  'analysis': {
    name: 'Analysis',
    value: 'analysis',
    learn_sp: 5,
    season: 1,
    tags: ['Overdrive']
  },
  'blazing-might-raw': {
    name: 'Blazing Might (RAW)',
    value: 'blazing-might-raw',
    learn_sp: 5,
    season: 1,
    tags: ['Overdrive']
  },
  //Reduced cost compared to the original, but in exchange
  //it can't be taken until Season 2.
  'blazing-might-ue': {
    name: 'Blazing Might (Unofficial Errata)',
    value: 'blazing-might-ue',
    learn_sp: 4,
    season: 2,
    tags: ['Overdrive']
  },
  'burning-passion': {
    name: 'Burning Passion',
    value: 'burning-passion',
    learn_sp: 5,
    season: 1,
    tags: ['Overdrive']
  },
  'fighting-spirit-raw': {
    name: 'Fighting Spirit (RAW)',
    value: 'fighting-spirit-raw',
    learn_sp: 5,
    season: 1,
    tags: ['Overdrive']
  },
  //Reduced cost compared to the original, but in exchange
  //it can't be taken until Season 2.
  'fighting-spirit-ue': {
    name: 'Fighting Spirit (Unofficial Errata)',
    value: 'fighting-spirit-ue',
    learn_sp: 4,
    season: 2,
    tags: ['Overdrive']
  },
  'hardened-defense': {
    name: 'Hardened Defense',
    value: 'hardened-defense',
    learn_sp: 6,
    season: 1,
    tags: ['Overdrive']
  },
  'hardened-resistance': {
    name: 'Hardened Resistance',
    value: 'hardened-resistance',
    learn_sp: 6,
    season: 1,
    tags: ['Overdrive']
  },
  'resolute-aura': {
    name: 'Resolute Aura',
    value: 'resolute-aura',
    learn_sp: 5,
    season: 1,
    tags: ['Overdrive']
  },
  'strength-of-will': {
    name: 'Strength of Will',
    value: 'strength-of-will',
    learn_sp: 5,
    season: 1,
    tags: ['Overdrive']
  },
};
