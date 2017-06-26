//A hugetastic object of objects with:
/*
  name: skill's name
  value: skill's text value for use with react-select
  learn_sp: SP it costs to get one level of
  season: a level requirement, kinda
  tags: a series of identifiers that help the skill selector figure out what to show.
    List of tags:
    -- "Categorization Tags (let the user choose whether to include)" --
    * Flaw: This Skill gives you extra SP, but is a drawback. The book keeps Flaws and Skills separate, but...
    * Passive: This Skill is always in effect. The book uses the term "Permanent" for these.
    * Situational: This Skill's effects are conditional.
    * Active: This Skill provides an option in combat during your turn only.
    * Reaction: This Skill provides an option in combat to be used during others' turns.
    * Challenge: This Skill applies Challenge Scenes only. Challenge skills can't be applied to Techniques.
    * Overdrive: This Skill adds to the character's Overdrive options.
    * Trait: This Skill is a complete packages. Traits are yet to be formally introduced.
    -- "Include These Only For Techniques" --
    * Weaken: This Skill can't be attached to a character directly; it must be attached to a Technique.
    * Boost: This Skill can't be attached to a character directly; it must be attached to a Technique.
    -- "Include These If The Character Doesn't Have One With This Tag Already" --
    * MaxHealth: For "Tough" and "Fragile" only, as these passive skills affect Max HP and are mutually exclusive.
    * MaxStamina: For "Tireless" and "Lack of Control" only, as these passive skills affect Max Stamina and are mutually exclusive.
    * Defense: For "Iron Defense" and "Weak Defender" only, as these passive skills affect Defense and are mutually exclusive.
    * Resistance: For "Resistant" and "Energy Vulnerability" only, as these passive skills affect Resistance and are mutually exclusive.
    * PhysicalAttack: For "Physical Attacker" and "Weak Physical Attacker" only, as these passive skills affect Strength Attack and Agility Attack and are mutually exclusive.
    * EnergyAttack: For "Energy Attacker" and "Weak Energy Attacker" only, as these passive skills affect Spirit Attack and Mind Attack and are mutually exclusive.
    * Movement: For "Sprinter" and "Slow" only, as these passive skills affect Movement and are mutually exclusive.
    * Initiative: For "Quick to Act" and "Slow to Act" only, as these passive skills affect initiative rolls.
    * StartingValor: For "Bravado" and "Weak-Willed" (and variations) only, as these passive skills affect the amount of Valor a character has at the start of combat.
    * Knockout: For "Despair" and "Revenge" only, as these situational skills respond to party members being knocked out in opposite ways.
    * Size: For "Increased Size", "Diminutive", and possibly "Increased Length". These passive skills affect how much space the character takes up in combat.
            (But only the first is implemented yet.)
    -- "Include These Only If The Character Has A Skill With The Same Name As This Tag" --
    * [Name of another skill]: For skills such as Dark Healing that require other skills.
      Jump, Swift Step, Counterattack, Malevolent Entity, and Companion are some skills that are prerequisites and would have a tag named for them.
    * Creation: Requires at least one of Attack Node, Refraction Point, or Portal.
    -- "Other" --
    * NPC: This Skill is not available to players; is_npc must be true for it to show up.
    * Repeatable: This Skill can be taken multiple times, and ignores the check for "does the character already have this?".
      Repeatable skills tend to have a customizable element.
    * RAW: "Rules as Written". This tag is applied to multiple-version skills only and reflects that this version of the skill is the original printing.
    * UE: "Unofficial Errata". This tag is applied to multiple-version skills only and reflects that this version of the skill is likely to appear in future errata.
    * Errata: This tag is applied to multiple-version skills only and reflects that this version of the skill is the version appearing in official errata...
              of which there is none yet.
    * Houserule: Skill variant that has come up in several campaigns I've seen or otherwise been involved with.
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
    tags: ['Flaw', 'Situational', 'Weaken', 'RAW']
  },
  'impaired-accuracy-ue': {
    name: 'Impaired Accuracy (Unofficial Errata)',
    value: 'impaired-accuracy-ue',
    learn_sp: -4,
    season: 1,
    tags: ['Flaw', 'Situational', 'Weaken', 'UE']
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
    tags: ['Flaw', 'Situational', 'Weaken', 'RAW']
  },
  'impaired-evasion-ue': {
    name: 'Impaired Accuracy (Unofficial Errata)',
    value: 'impaired-accuracy-ue',
    learn_sp: -4,
    season: 1,
    tags: ['Flaw', 'Situational', 'Weaken', 'UE']
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
    tags: ['Passive', 'RAW']
  },
  //Levels up at 6 SP per level instead of 4.
  'bravado-ue': {
    name: 'Bravado (Unofficial Errata)',
    value: 'bravado-raw',
    learn_sp: 6,
    season: 1,
    tags: ['Passive', 'UE']
  },
  //A houserule variant Bravado which is Fixed instead of levelable.
  'bravado-fixed': {
    name: 'Bravado (Fixed)',
    value: 'bravado-fixed',
    learn_sp: 6,
    season: 1,
    tags: ['Passive', 'Houserule']
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
    tags: ['Passive', 'Size']
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
    tags: ['Passive', 'RAW']
  },
  //Only affects Valor awards from the GM.
  'unyielding-determination-ue': {
    name: 'Unyielding Determination (Unofficial Errata)',
    value: 'unyielding-determination-ue',
    learn_sp: 8,
    season: 4,
    tags: ['Passive', 'UE']
  },
  //NPC-only variant of Unyielding Det. (RAW).
  //Technically this is a houserule skill for now but it's missing
  //that tag deliberately.
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
    tags: ['Active', 'RAW']
  },
  //The UE version is, thus, a Fixed skill.
  'inspire-ue': {
    name: 'Inspire (Unofficial Errata)',
    value: 'inspire-ue',
    learn_sp: 5,
    season: 1,
    tags: ['Active', 'UE']
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
    tags: ['Reaction', 'RAW']
  },
  //Fortunately, this has been discussed. This rough draft rewrite fixes the issues.
  'combination-attack-house': {
    name: 'Combination Attack (Rewrite)',
    value: 'combination-attack-house',
    learn_sp: 6,
    season: 1,
    tags: ['Reaction', 'Houserule']
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
    tags: ['Overdrive', 'RAW']
  },
  //Reduced cost compared to the original, but in exchange
  //it can't be taken until Season 2.
  'blazing-might-ue': {
    name: 'Blazing Might (Unofficial Errata)',
    value: 'blazing-might-ue',
    learn_sp: 4,
    season: 2,
    tags: ['Overdrive', 'UE']
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
    tags: ['Overdrive', 'RAW']
  },
  //Reduced cost compared to the original, but in exchange
  //it can't be taken until Season 2.
  'fighting-spirit-ue': {
    name: 'Fighting Spirit (Unofficial Errata)',
    value: 'fighting-spirit-ue',
    learn_sp: 4,
    season: 2,
    tags: ['Overdrive', 'UE']
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
  'asset': {
    name: 'Asset',
    value: 'asset',
    learn_sp: 3,
    season: 1,
    tags: ['Challenge', 'Character', 'Repeatable']
  },
  'challenge-technique': {
    name: 'Challenge Technique',
    value: 'challenge-technique',
    learn_sp: 3,
    season: 1,
    tags: ['Challenge', 'Character', 'Repeatable']
  },
  'favorable-insight': {
    name: 'Favorable Insight',
    value: 'favorable-insight',
    learn_sp: 3,
    season: 1,
    tags: ['Challenge', 'Character', 'Repeatable']
  },
  'favorable-success': {
    name: 'Favorable Success',
    value: 'favorable-success',
    learn_sp: 4,
    season: 2,
    tags: ['Challenge', 'Character', 'Repeatable']
  },
  'proficiency': {
    name: 'Proficiency',
    value: 'proficiency',
    learn_sp: 2,
    season: 1,
    tags: ['Challenge', 'Character', 'Repeatable']
  },
  'recovery': {
    name: 'Recovery',
    value: 'recovery',
    learn_sp: 3,
    season: 1,
    tags: ['Challenge', 'Character', 'Repeatable']
  },
  'companion': {
    name: 'Companion',
    value: 'companion',
    learn_sp: 6,
    season: 1,
    tags: ['Passive', 'Repeatable']
  },
  'ally-mount': {
    name: 'Companion',
    value: 'ally-mount',
    learn_sp: 6,
    season: 2,
    tags: ['Active', 'Companion', 'Mount']
  },
  //Unlike most of these companion skills, Companion Sense applies
  //to ALL of your companions.
  'companion-sense': {
    name: 'Companion Sense',
    value: 'companion-sense',
    learn_sp: 2,
    season: 3,
    tags: ['Active', 'Companion']
  },
  'companion-zoc': {
    name: 'Companion Zone of Control',
    value: 'companion-zoc',
    learn_sp: 4,
    season: 2,
    tags: ['Passive', 'Companion']
  },
  'extended-revival': {
    name: 'Extended Revival',
    value: 'extended-revival',
    learn_sp: 4,
    season: 2,
    tags: ['Active', 'Companion']
  },
  'fast-companion': {
    name: 'Fast Companion',
    value: 'fast-companion',
    learn_sp: 2,
    season: 1,
    tags: ['Passive', 'Companion']
  },
  'flank-attack': {
    name: 'Flank Attack',
    value: 'flank-attack',
    learn_sp: 4,
    season: 2,
    tags: ['Situational', 'Companion']
  },
  'flying-companion': {
    name: 'Flying Companion',
    value: 'flying-companion',
    learn_sp: 3,
    season: 3,
    tags: ['Passive', 'Companion']
  },
  'hidden-companion': {
    name: 'Hidden Companion',
    value: 'hidden-companion',
    learn_sp: 4,
    season: 1,
    tags: ['Active', 'Companion']
  },
  'instant-mount': {
    name: 'Instant Mount',
    value: 'instant-mount',
    learn_sp: 6,
    season: 3,
    tags: ['Active', 'Companion', 'Mount']
  },
  'mount': {
    name: 'Mount',
    value: 'mount',
    learn_sp: 3,
    season: 1,
    tags: ['Active', 'Companion']
  },
  'protect-ally': {
    name: 'Protect Ally',
    value: 'protect-ally',
    learn_sp: 2,
    season: 2,
    tags: ['Reaction', 'Companion', 'Protect Master']
  },
  'protect-master': {
    name: 'Protect Master',
    value: 'protect-master',
    learn_sp: 4,
    season: 2,
    tags: ['Reaction', 'Companion']
  },
  'ranged-revival': {
    name: 'Ranged Revival',
    value: 'ranged-revival',
    learn_sp: 3,
    season: 2,
    tags: ['Active', 'Companion']
  },
  'reactive-companion': {
    name: 'Reactive Companion',
    value: 'reactive-companion',
    learn_sp: 4,
    season: 3,
    tags: ['Reaction', 'Companion']
  },
  'sense-malice': {
    name: 'Sense Malice',
    value: 'sense-malice',
    learn_sp: 2,
    season: 1,
    tags: ['Situational', 'Companion']
  },
  'tossing-companion': {
    name: 'Tossing Companion',
    value: 'tossing-companion',
    learn_sp: 3,
    season: 2,
    tags: ['Active', 'Companion', 'Toss']
  },
  'trusting-companion': {
    name: 'Trusting Companion',
    value: 'trusting-companion',
    learn_sp: 4,
    season: 2,
    tags: ['Active', 'Companion']
  },
  'change-attributes': {
    name: 'Change Attributes',
    value: 'change-attributes',
    learn_sp: 2,
    season: 1,
    tags: ['Boost']
  },
  'enhanced-range': {
    name: 'Enhanced Range',
    value: 'enhanced-range',
    learn_sp: 2,
    season: 1,
    tags: ['Boost']
  },
  //Like their Weaken Flaw counterparts, these are too strong.
  'great-accuracy-raw': {
    name: 'Great Accuracy (RAW)',
    value: 'great-accuracy-raw',
    learn_sp: 6,
    season: 1,
    tags: ['Boost', 'RAW']
  },
  'great-evasion-raw': {
    name: 'Great Evasion (RAW)',
    value: 'great-evasion-raw',
    learn_sp: 6,
    season: 1,
    tags: ['Boost', 'RAW']
  },
  //These cost more...
  'great-accuracy-ue': {
    name: 'Great Accuracy (Unofficial Errata)',
    value: 'great-accuracy-ue',
    learn_sp: 8,
    season: 1,
    tags: ['Boost', 'UE']
  },
  'great-evasion-ue': {
    name: 'Great Evasion (Unofficial Errata)',
    value: 'great-evasion-ue',
    learn_sp: 8,
    season: 1,
    tags: ['Boost', 'UE']
  },
  //...and these are half as effective.
  'great-physical-accuracy': {
    name: 'Great Physical Accuracy',
    value: 'great-physical-accuracy',
    learn_sp: 6,
    season: 1,
    tags: ['Boost', 'Houserule']
  },
  'great-physical-evasion': {
    name: 'Great Physical Evasion',
    value: 'great-physical-evasion',
    learn_sp: 6,
    season: 1,
    tags: ['Boost', 'Houserule']
  },
  'great-energy-accuracy': {
    name: 'Great Energy Accuracy',
    value: 'great-energy-accuracy',
    learn_sp: 6,
    season: 1,
    tags: ['Boost', 'Houserule']
  },
  'great-energy-evasion': {
    name: 'Great Energy Evasion',
    value: 'great-energy-evasion',
    learn_sp: 6,
    season: 1,
    tags: ['Boost', 'Houserule']
  },
};
