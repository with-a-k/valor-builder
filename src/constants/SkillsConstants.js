//A hugetastic object of objects with:
/*
  name: skill's name
  selectValue: skill's text value for use with react-select
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
    selectValue: 'aggravated-wounds',
    learn_sp: -2,
    season: 1,
    tags: ['Flaw', 'Passive']
  },
  'berserker': {
    name: 'Berserker',
    selectValue: 'berserker',
    learn_sp: -5,
    season: 1,
    tags: ['Flaw', 'Situational']
  },
  'compulsion': {
    name: 'Compulsion',
    selectValue: 'compulsion',
    learn_sp: -4,
    season: 1,
    tags: ['Flaw', 'Situational']
  },
  'despair': {
    name: 'Despair',
    selectValue: 'despair',
    learn_sp: -3,
    season: 1,
    tags: ['Flaw', 'Situational', 'Knockout']
  },
  'energy-vulnerability': {
    name: 'Energy Vulnerability',
    selectValue: 'energy-vulnerability',
    learn_sp: -2,
    season: 1,
    tags: ['Flaw', 'Passive', 'Resistance']
  },
  'feeble': {
    name: 'Feeble',
    selectValue: 'feeble',
    learn_sp: -3,
    season: 1,
    tags: ['Flaw', 'Situational']
  },
  'form-restriction': {
    name: 'Form Restriction',
    selectValue: 'form-restriction',
    learn_sp: -2,
    season: 1,
    tags: ['Flaw', 'Situational', 'Repeatable']
  },
  'fragile': {
    name: 'Fragile',
    selectValue: 'fragile',
    learn_sp: -3,
    season: 1,
    tags: ['Flaw', 'Passive', 'MaxHealth']
  },
  'lack-of-control': {
    name: 'Lack of Control',
    selectValue: 'lack-of-control',
    learn_sp: -2,
    season: 1,
    tags: ['Flaw', 'Passive', 'MaxStamina']
  },
  'malevolent-entity': {
    name: 'Malevolent Entity',
    selectValue: 'malevolent-entity',
    learn_sp: -5,
    season: 1,
    tags: ['Flaw', 'Situational']
  },
  'non-proficient': {
    name: 'Non-proficient',
    selectValue: 'non-proficient',
    learn_sp: -1,
    season: 1,
    tags: ['Flaw', 'Challenge', 'Repeatable']
  },
  'oblivious': {
    name: 'Oblivious',
    selectValue: 'oblivious',
    learn_sp: -3,
    season: 1,
    tags: ['Flaw', 'Situational']
  },
  'slow': {
    name: 'Slow',
    selectValue: 'slow',
    learn_sp: -2,
    season: 1,
    tags: ['Flaw', 'Passive', 'Movement']
  },
  'slow-healing': {
    name: 'Slow Healing',
    selectValue: 'slow-healing',
    learn_sp: -2,
    season: 1,
    tags: ['Flaw', 'Situational']
  },
  'slow-to-act': {
    name: 'Slow to Act',
    selectValue: 'slow-to-act',
    learn_sp: -1,
    season: 1,
    tags: ['Flaw', 'Situational', 'Initiative']
  },
  'unthreatening': {
    name: 'Unthreatening',
    selectValue: 'unthreatening',
    learn_sp: -3,
    season: 1,
    tags: ['Flaw', 'Passive']
  },
  'uncoordinated': {
    name: 'Uncoordinated',
    selectValue: 'uncoordinated',
    learn_sp: -3,
    season: 1,
    tags: ['Flaw', 'Situational']
  },
  'violent': {
    name: 'Violent',
    selectValue: 'violent',
    learn_sp: -3,
    season: 1,
    tags: ['Flaw', 'Situational']
  },
  'weak-energy-attacker': {
    name: 'Weak Energy Attacker',
    selectValue: 'weak-energy-attacker',
    learn_sp: -3,
    season: 1,
    tags: ['Flaw', 'Passive', 'EnergyAttack']
  },
  'weak-physical-attacker': {
    name: 'Weak Physical Attacker',
    selectValue: 'weak-physical-attacker',
    learn_sp: -3,
    season: 1,
    tags: ['Flaw', 'Passive', 'PhysicalAttack']
  },
  'weak-aura': {
    name: 'Weak Aura',
    selectValue: 'weak-aura',
    learn_sp: -3,
    season: 1,
    tags: ['Flaw', 'Situational']
  },
  'weak-defender': {
    name: 'Weak Defender',
    selectValue: 'weak-defender',
    learn_sp: -2,
    season: 1,
    tags: ['Flaw', 'Passive', 'Defense']
  },
  'weak-willed': {
    name: 'Weak-Willed',
    selectValue: 'weak-willed',
    learn_sp: -4,
    season: 1,
    tags: ['Flaw', 'Passive', 'StartingValor']
  },
  'flightless': {
    name: 'Weak-Willed',
    selectValue: 'weak-willed',
    learn_sp: -3,
    season: 1,
    tags: ['Flaw', 'Situational', 'Weaken']
  },
  //For all these Impaired Whatever skills, the Unofficial Errata version
  //just costs more.
  'impaired-accuracy-raw': {
    name: 'Impaired Accuracy (RAW)',
    selectValue: 'impaired-accuracy-raw',
    learn_sp: -3,
    season: 1,
    tags: ['Flaw', 'Situational', 'Weaken', 'RAW']
  },
  'impaired-accuracy-ue': {
    name: 'Impaired Accuracy (Unofficial Errata)',
    selectValue: 'impaired-accuracy-ue',
    learn_sp: -4,
    season: 1,
    tags: ['Flaw', 'Situational', 'Weaken', 'UE']
  },
  'impaired-physical-accuracy': {
    name: 'Impaired Physical Accuracy',
    selectValue: 'impaired-physical-accuracy',
    learn_sp: -3,
    season: 1,
    tags: ['Flaw', 'Situational', 'Weaken', 'Houserule']
  },
  'impaired-energy-accuracy': {
    name: 'Impaired Energy Accuracy',
    selectValue: 'impaired-energy-accuracy',
    learn_sp: -3,
    season: 1,
    tags: ['Flaw', 'Situational', 'Weaken', 'Houserule']
  },
  'impaired-evasion-raw': {
    name: 'Impaired Evasion (RAW)',
    selectValue: 'impaired-evasion-raw',
    learn_sp: -3,
    season: 1,
    tags: ['Flaw', 'Situational', 'Weaken', 'RAW']
  },
  'impaired-evasion-ue': {
    name: 'Impaired Accuracy (Unofficial Errata)',
    selectValue: 'impaired-accuracy-ue',
    learn_sp: -4,
    season: 1,
    tags: ['Flaw', 'Situational', 'Weaken', 'UE']
  },
  'impaired-physical-evasion': {
    name: 'Impaired Physical Evasion',
    selectValue: 'impaired-physical-evasion',
    learn_sp: -3,
    season: 1,
    tags: ['Flaw', 'Situational', 'Weaken', 'Houserule']
  },
  'impaired-energy-evasion': {
    name: 'Impaired Energy Evasion',
    selectValue: 'impaired-energy-evasion',
    learn_sp: -3,
    season: 1,
    tags: ['Flaw', 'Situational', 'Weaken', 'Houserule']
  },
  'balanced-fighter': {
    name: 'Balanced Fighter',
    selectValue: 'balanced-fighter',
    learn_sp: 8,
    season: 1,
    tags: ['Passive']
  },
  'break-valor-limit': {
    name: 'Break Valor Limit',
    selectValue: 'break-valor-limit',
    learn_sp: 6,
    season: 4,
    tags: ['Passive']
  },
  'bravado-raw': {
    name: 'Bravado (RAW)',
    selectValue: 'bravado-raw',
    learn_sp: 6,
    season: 1,
    tags: ['Passive', 'RAW']
  },
  //Levels up at 6 SP per level instead of 4.
  'bravado-ue': {
    name: 'Bravado (Unofficial Errata)',
    selectValue: 'bravado-ue',
    learn_sp: 6,
    season: 1,
    tags: ['Passive', 'UE']
  },
  //A houserule variant Bravado which is Fixed instead of levelable.
  'bravado-fixed': {
    name: 'Bravado (Fixed)',
    selectValue: 'bravado-fixed',
    learn_sp: 6,
    season: 1,
    tags: ['Passive', 'Houserule']
  },
  //The book classifies this as Permanent (Passive), but...
  'discreet-aura': {
    name: 'Discreet Aura',
    selectValue: 'discreet-aura',
    learn_sp: 6,
    season: 1,
    tags: ['Situational']
  },
  'darksight': {
    name: 'Darksight',
    selectValue: 'darksight',
    learn_sp: 4,
    season: 1,
    tags: ['Passive']
  },
  'energy-attacker': {
    name: 'Energy Attacker',
    selectValue: 'energy-attacker',
    learn_sp: 6,
    season: 1,
    tags: ['Passive', 'EnergyAttack']
  },
  'expanded-reach': {
    name: 'Expanded Reach',
    selectValue: 'expanded-reach',
    learn_sp: 8,
    season: 4,
    tags: ['Passive']
  },
  'extra-action': {
    name: 'Extra Action',
    selectValue: 'extra-action',
    learn_sp: 12,
    season: 4,
    tags: ['Passive']
  },
  'fast-healing': {
    name: 'Fast Healing',
    selectValue: 'fast-healing',
    learn_sp: 4,
    season: 1,
    tags: ['Passive']
  },
  'improved-di': {
    name: 'Improved Damage Increment',
    selectValue: 'improved-di',
    learn_sp: 5,
    season: 1,
    tags: ['Passive']
  },
  //Unlike most of the other UE skills, this is a straight buff.
  'improved-di-ue': {
    name: 'Improved Damage Increment (Unofficial Errata)',
    selectValue: 'improved-di-ue',
    learn_sp: 4,
    season: 1,
    tags: ['Passive']
  },
  'increased-size': {
    name: 'Increased Size',
    selectValue: 'increased-size',
    learn_sp: 2,
    season: 1,
    tags: ['Passive', 'Size']
  },
  'iron-defense': {
    name: 'Iron Defense',
    selectValue: 'iron-defense',
    learn_sp: 4,
    season: 1,
    tags: ['Passive', 'Defense']
  },
  'physical-attacker': {
    name: 'Physical Attacker',
    selectValue: 'physical-attacker',
    learn_sp: 6,
    season: 1,
    tags: ['Passive', 'PhysicalAttack']
  },
  'regeneration': {
    name: 'Regeneration',
    selectValue: 'regeneration',
    learn_sp: 6,
    season: 4,
    tags: ['Passive']
  },
  'resistant': {
    name: 'Resistant',
    selectValue: 'resistant',
    learn_sp: 4,
    season: 1,
    tags: ['Passive', 'Resistance']
  },
  //The book classifies this as Permanent, but it only affects airborne targets.
  'sky-attack': {
    name: 'Sky Attack',
    selectValue: 'sky-attack',
    learn_sp: 5,
    season: 2,
    tags: ['Situational']
  },
  'sprinter': {
    name: 'Sprinter',
    selectValue: 'sprinter',
    learn_sp: 4,
    season: 1,
    tags: ['Passive', 'Movement']
  },
  'stamina-recovery': {
    name: 'Stamina Recovery',
    selectValue: 'stamina-recovery',
    learn_sp: 4,
    season: 4,
    tags: ['Passive']
  },
  'teleportation': {
    name: 'Teleportation',
    selectValue: 'teleportation',
    learn_sp: 6,
    season: 4,
    tags: ['Passive']
  },
  'tireless': {
    name: 'Tireless',
    selectValue: 'tireless',
    learn_sp: 5,
    season: 1,
    tags: ['Passive', 'MaxStamina']
  },
  'tough': {
    name: 'Tough',
    selectValue: 'tough',
    learn_sp: 6,
    season: 1,
    tags: ['Passive', 'MaxHealth']
  },
  'unyielding-determination-raw': {
    name: 'Unyielding Determination (RAW)',
    selectValue: 'unyielding-determination-raw',
    learn_sp: 8,
    season: 4,
    tags: ['Passive', 'RAW']
  },
  //Only affects Valor awards from the GM.
  'unyielding-determination-ue': {
    name: 'Unyielding Determination (Unofficial Errata)',
    selectValue: 'unyielding-determination-ue',
    learn_sp: 8,
    season: 4,
    tags: ['Passive', 'UE']
  },
  //NPC-only variant of Unyielding Det. (RAW).
  //Technically this is a houserule skill for now but it's missing
  //that tag deliberately.
  'valiant': {
    name: 'Valiant',
    selectValue: 'valiant',
    learn_sp: 12,
    season: 1,
    tags: ['Passive', 'NPC']
  },
  'versatile-fighter': {
    name: 'Versatile Fighter',
    selectValue: 'versatile-fighter',
    learn_sp: 6,
    season: 1,
    tags: ['Passive']
  },
  'violent-aura': {
    name: 'Violent Aura',
    selectValue: 'violent-aura',
    learn_sp: 4,
    season: 4,
    tags: ['Passive']
  },
  'abundant-creation': {
    name: 'Abundant Creation',
    selectValue: 'abundant-creation',
    learn_sp: 5,
    season: 2,
    tags: ['Situational', 'Creation']
  },
  'bounce-back': {
    name: 'Bounce Back',
    selectValue: 'bounce-back',
    learn_sp: 6,
    season: 1,
    tags: ['Situational']
  },
  'clone-tactics': {
    name: 'Clone Tactics',
    selectValue: 'clone-tactics',
    learn_sp: 5,
    season: 2,
    tags: ['Situational', 'Clone']
  },
  'combat-toss': {
    name: 'Combat Toss',
    selectValue: 'combat-toss',
    learn_sp: 4,
    season: 2,
    tags: ['Situational', 'Toss']
  },
  'crisis': {
    name: 'Crisis',
    selectValue: 'crisis',
    learn_sp: 4,
    season: 1,
    tags: ['Situational']
  },
  'danger-sense': {
    name: 'Danger Sense',
    selectValue: 'danger-sense',
    learn_sp: 3,
    season: 1,
    tags: ['Situational']
  },
  'daredevil': {
    name: 'Daredevil',
    selectValue: 'daredevil',
    learn_sp: 4,
    season: 2,
    tags: ['Situational']
  },
  'desperation': {
    name: 'Desperation',
    selectValue: 'desperation',
    learn_sp: 6,
    season: 1,
    tags: ['Situational']
  },
  'dig-deep': {
    name: 'Dig Deep',
    selectValue: 'dig-deep',
    learn_sp: 5,
    season: 1,
    tags: ['Situational']
  },
  'discretion': {
    name: 'Discretion',
    selectValue: 'discretion',
    learn_sp: 2,
    season: 1,
    tags: ['Situational']
  },
  'empower-attack': {
    name: 'Empower Attack',
    selectValue: 'empower-attack',
    learn_sp: 6,
    season: 1,
    tags: ['Situational']
  },
  'extended-range': {
    name: 'Extended Range',
    selectValue: 'extended-range',
    learn_sp: 6,
    season: 4,
    tags: ['Situational']
  },
  'free-flight': {
    name: 'Free Flight',
    selectValue: 'free-flight',
    learn_sp: 3,
    season: 4,
    tags: ['Situational', 'Fly']
  },
  'free-swift-step': {
    name: 'Free Swift Step',
    selectValue: 'free-swift-step',
    learn_sp: 5,
    season: 4,
    tags: ['Situational', 'Swift Step']
  },
  'improved-swimming': {
    name: 'Improved Swimming',
    selectValue: 'improved-swimming',
    learn_sp: 4,
    season: 1,
    tags: ['Situational']
  },
  'nimble-movement': {
    name: 'Nimble Movement',
    selectValue: 'nimble-movement',
    learn_sp: 4,
    season: 1,
    tags: ['Situational']
  },
  'overload-limits': {
    name: 'Overload Limits',
    selectValue: 'overload-limits',
    learn_sp: 6,
    season: 1,
    tags: ['Situational']
  },
  'passive-healing': {
    name: 'Passive Healing',
    selectValue: 'passive-healing',
    learn_sp: 4,
    season: 1,
    tags: ['Situational']
  },
  'phasing': {
    name: 'Phasing',
    selectValue: 'phasing',
    learn_sp: 5,
    season: 2,
    tags: ['Situational']
  },
  'protector': {
    name: 'Protector',
    selectValue: 'protector',
    learn_sp: 5,
    season: 1,
    tags: ['Situational', 'Cover']
  },
  'quick-to-act': {
    name: 'Quick to Act',
    selectValue: 'quick-to-act',
    learn_sp: 3,
    season: 1,
    tags: ['Situational', 'Initiative']
  },
  'reckless-attack': {
    name: 'Reckless Attack',
    selectValue: 'reckless-attack',
    learn_sp: 5,
    season: 1,
    tags: ['Situational']
  },
  'resolute-strike': {
    name: 'Resolute Strike',
    selectValue: 'resolute-strike',
    learn_sp: 5,
    season: 1,
    tags: ['Situational']
  },
  'revenge': {
    name: 'Revenge',
    selectValue: 'revenge',
    learn_sp: 5,
    season: 1,
    tags: ['Situational', 'Knockout']
  },
  'rising-attack': {
    name: 'Rising Attack',
    selectValue: 'rising-attack',
    learn_sp: 6,
    season: 2,
    tags: ['Situational']
  },
  'rolling-recovery': {
    name: 'Rolling Recovery',
    selectValue: 'rolling-recovery',
    learn_sp: 4,
    season: 1,
    tags: ['Situational']
  },
  'safe-stride': {
    name: 'Safe Stride',
    selectValue: 'safe-stride',
    learn_sp: 5,
    season: 2,
    tags: ['Situational']
  },
  'split-move': {
    name: 'Split Move',
    selectValue: 'split-move',
    learn_sp: 6,
    season: 2,
    tags: ['Situational']
  },
  'team-tactics': {
    name: 'Team Tactics',
    selectValue: 'team-tactics',
    learn_sp: 5,
    season: 1,
    tags: ['Situational']
  },
  'transposition': {
    name: 'Transposition',
    selectValue: 'transposition',
    learn_sp: 4,
    season: 1,
    tags: ['Situational', 'Swift Step']
  },
  'underhanded': {
    name: 'Underhanded',
    selectValue: 'underhanded',
    learn_sp: 5,
    season: 2,
    tags: ['Situational']
  },
  'unmovable': {
    name: 'Unmovable',
    selectValue: 'unmovable',
    learn_sp: 6,
    season: 1,
    tags: ['Situational']
  },
  //common alternate spelling
  'immovable': {
    name: 'Unmovable',
    selectValue: 'unmovable',
    learn_sp: 6,
    season: 1,
    tags: ['Situational']
  },
  'unshakeable': {
    name: 'Unshakeable',
    selectValue: 'unshakeable',
    learn_sp: 6,
    season: 3,
    tags: ['Situational']
  },
  'unstoppable': {
    name: 'Unstoppable',
    selectValue: 'unstoppable',
    learn_sp: 6,
    season: 3,
    tags: ['Situational']
  },
  'water-adaptation': {
    name: 'Water Adaptation',
    selectValue: 'water-adaptation',
    learn_sp: 6,
    season: 2,
    tags: ['Situational']
  },
  'wall-walk': {
    name: 'Wall Walk',
    selectValue: 'wall-walk',
    learn_sp: 4,
    season: 2,
    tags: ['Situational']
  },
  'water-walk': {
    name: 'Water Walk',
    selectValue: 'water-walk',
    learn_sp: 4,
    season: 2,
    tags: ['Situational']
  },
  'x-ray-vision': {
    name: 'X-Ray Vision',
    selectValue: 'x-ray-vision',
    learn_sp: 4,
    season: 2,
    tags: ['Situational']
  },
  'attack-node': {
    name: 'Attack Node',
    selectValue: 'attack-node',
    learn_sp: 5,
    season: 1,
    tags: ['Active']
  },
  'attack-node-network': {
    name: 'Attack Node Network',
    selectValue: 'attack-node-network',
    learn_sp: 4,
    season: 3,
    tags: ['Active', 'Attack Node']
  },
  'battle-analysis': {
    name: 'Battle Analysis',
    selectValue: 'battle-analysis',
    learn_sp: 6,
    season: 2,
    tags: ['Active']
  },
  'clone': {
    name: 'Clone',
    selectValue: 'clone',
    learn_sp: 6,
    season: 2,
    tags: ['Active']
  },
  'dark-healing': {
    name: 'Dark Healing',
    selectValue: 'dark-healing',
    learn_sp: 6,
    season: 1,
    tags: ['Active', 'Malevolent Entity']
  },
  'dirty-trick': {
    name: 'Dirty Trick',
    selectValue: 'dirty-trick',
    learn_sp: 5,
    season: 1,
    tags: ['Active']
  },
  'duel': {
    name: 'Duel',
    selectValue: 'duel',
    learn_sp: 2,
    season: 1,
    tags: ['Active']
  },
  'effect-capture': {
    name: 'Effect Capture',
    selectValue: 'effect-capture',
    learn_sp: 4,
    season: 2,
    tags: ['Active']
  },
  'effect-transfer': {
    name: 'Effect Transfer',
    selectValue: 'effect-transfer',
    learn_sp: 4,
    season: 1,
    tags: ['Active']
  },
  'exploit-weakness': {
    name: 'Exploit Weakness',
    selectValue: 'exploit-weakness',
    learn_sp: 6,
    season: 3,
    tags: ['Active']
  },
  'feint': {
    name: 'Feint',
    selectValue: 'feint',
    learn_sp: 6,
    season: 1,
    tags: ['Active']
  },
  'flunky-domination': {
    name: 'Flunky Domination',
    selectValue: 'flunky-domination',
    learn_sp: 5,
    season: 3,
    tags: ['Active']
  },
  'fly': {
    name: 'Fly',
    selectValue: 'fly',
    learn_sp: 6,
    season: 3,
    tags: ['Active']
  },
  'health-transference': {
    name: 'Health Transference',
    selectValue: 'health-transference',
    learn_sp: 4,
    season: 2,
    tags: ['Active']
  },
  //In later seasons, Inspire provided too much valor output.
  'inspire-raw': {
    name: 'Inspire (RAW)',
    selectValue: 'inspire-raw',
    learn_sp: 5,
    season: 1,
    tags: ['Active', 'RAW']
  },
  //The UE version is, thus, a Fixed skill.
  'inspire-ue': {
    name: 'Inspire (Unofficial Errata)',
    selectValue: 'inspire-ue',
    learn_sp: 5,
    season: 1,
    tags: ['Active', 'UE']
  },
  'intimidate': {
    name: 'Intimidate',
    selectValue: 'intimidate',
    learn_sp: 5,
    season: 1,
    tags: ['Active']
  },
  'jump': {
    name: 'Jump',
    selectValue: 'jump',
    learn_sp: 4,
    season: 1,
    tags: ['Active']
  },
  'nullify': {
    name: 'Nullify',
    selectValue: 'nullify',
    learn_sp: 5,
    season: 1,
    tags: ['Active']
  },
  'portal': {
    name: 'Portal',
    selectValue: 'portal',
    learn_sp: 6,
    season: 2,
    tags: ['Active']
  },
  'provoke': {
    name: 'Provoke',
    selectValue: 'provoke',
    learn_sp: 4,
    season: 1,
    tags: ['Active']
  },
  'recharge': {
    name: 'Recharge',
    selectValue: 'recharge',
    learn_sp: 5,
    season: 1,
    tags: ['Active']
  },
  'refraction-chain': {
    name: 'Feint',
    selectValue: 'refraction-chain',
    learn_sp: 6,
    season: 3,
    tags: ['Active']
  },
  'refraction-point': {
    name: 'Refraction Point',
    selectValue: 'refraction-point',
    learn_sp: 4,
    season: 2,
    tags: ['Active']
  },
  'seal': {
    name: 'Seal',
    selectValue: 'seal',
    learn_sp: 6,
    season: 2,
    tags: ['Active']
  },
  'shadow-meld': {
    name: 'Shadow Meld',
    selectValue: 'shadow-meld',
    learn_sp: 6,
    season: 2,
    tags: ['Active']
  },
  'size-up': {
    name: 'Size Up',
    selectValue: 'size-up',
    learn_sp: 3,
    season: 1,
    tags: ['Active']
  },
  'spirit-sight': {
    name: 'Spirit Sight',
    selectValue: 'spirit-sight',
    learn_sp: 5,
    season: 1,
    tags: ['Active']
  },
  'stamina-transference': {
    name: 'Stamina Transference',
    selectValue: 'stamina-transference',
    learn_sp: 4,
    season: 2,
    tags: ['Active']
  },
  'swift-jump': {
    name: 'Swift Jump',
    selectValue: 'swift-jump',
    learn_sp: 3,
    season: 3,
    tags: ['Active', 'Jump']
  },
  'swift-step': {
    name: 'Swift Step',
    selectValue: 'swift-step',
    learn_sp: 5,
    season: 2,
    tags: ['Active']
  },
  'toss': {
    name: 'Toss',
    selectValue: 'toss',
    learn_sp: 5,
    season: 1,
    tags: ['Active']
  },
  //The book classifies this as Reaction, but it works with something
  //you chose to do yourself; that, and other skills that affect Swift Step
  //are also Active.
  'afterimage': {
    name: 'Afterimage',
    selectValue: 'afterimage',
    learn_sp: 4,
    season: 2,
    tags: ['Active', 'Swift Step']
  },
  'area-shield': {
    name: 'Area Shield',
    selectValue: 'area-shield',
    learn_sp: 4,
    season: 2,
    tags: ['Reaction']
  },
  'clash': {
    name: 'Clash',
    selectValue: 'clash',
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
    selectValue: 'combination-attack-raw',
    learn_sp: 6,
    season: 1,
    tags: ['Reaction', 'RAW']
  },
  //Fortunately, this has been discussed. This rough draft rewrite fixes the issues.
  'combination-attack-house': {
    name: 'Combination Attack (Rewrite)',
    selectValue: 'combination-attack-house',
    learn_sp: 6,
    season: 1,
    tags: ['Reaction', 'Houserule']
  },
  'counterattack': {
    name: 'Counterattack',
    selectValue: 'counterattack',
    learn_sp: 6,
    season: 1,
    tags: ['Reaction']
  },
  'cover': {
    name: 'Cover',
    selectValue: 'cover',
    learn_sp: 6,
    season: 1,
    tags: ['Reaction']
  },
  'damage-feedback': {
    name: 'Damage Feedback',
    selectValue: 'damage-feedback',
    learn_sp: 5,
    season: 2,
    tags: ['Reaction']
  },
  'defensive-clash': {
    name: 'Defensive Clash',
    selectValue: 'defensive-clash',
    learn_sp: 4,
    season: 3,
    tags: ['Reaction']
  },
  'deflecting-shield': {
    name: 'Deflecting Shield',
    selectValue: 'deflecting-shield',
    learn_sp: 4,
    season: 3,
    tags: ['Reaction', 'Area Shield', 'Line Deflect']
  },
  'diving-escape': {
    name: 'Diving Escape',
    selectValue: 'diving-escape',
    learn_sp: 5,
    season: 2,
    tags: ['Reaction']
  },
  'final-attack': {
    name: 'Final Attack',
    selectValue: 'final-attack',
    learn_sp: 6,
    season: 2,
    tags: ['Reaction']
  },
  'ignore-effect': {
    name: 'Ignore Effect',
    selectValue: 'ignore-effect',
    learn_sp: 5,
    season: 1,
    tags: ['Reaction']
  },
  'interrupt-attack': {
    name: 'Interrupt Attack',
    selectValue: 'interrupt-attack',
    learn_sp: 3,
    season: 1,
    tags: ['Reaction']
  },
  'line-deflect': {
    name: 'Line Deflect',
    selectValue: 'line-deflect',
    learn_sp: 5,
    season: 2,
    tags: ['Reaction']
  },
  'mobile-cover': {
    name: 'Mobile Cover',
    selectValue: 'mobile-cover',
    learn_sp: 5,
    season: 2,
    tags: ['Reaction', 'Cover']
  },
  'mobile-dodge': {
    name: 'Mobile Dodge',
    selectValue: 'mobile-dodge',
    learn_sp: 4,
    season: 2,
    tags: ['Reaction']
  },
  'opportunistic-dodge': {
    name: 'Opportunistic Dodge',
    selectValue: 'opportunistic-dodge',
    learn_sp: 6,
    season: 2,
    tags: ['Reaction']
  },
  'push-away': {
    name: 'Push Away',
    selectValue: 'push-away',
    learn_sp: 4,
    season: 2,
    tags: ['Reaction']
  },
  'prepared': {
    name: 'Prepared',
    selectValue: 'prepared',
    learn_sp: 6,
    season: 3,
    tags: ['Reaction', 'Counterattack']
  },
  'ranged-interrupt': {
    name: 'Ranged Interrupt',
    selectValue: 'ranged-interrupt',
    learn_sp: 4,
    season: 2,
    tags: ['Reaction', 'Interrupt Attack']
  },
  'shrug-off': {
    name: 'Shrug Off',
    selectValue: 'shrug-off',
    learn_sp: 6,
    season: 2,
    tags: ['Reaction']
  },
  'acceleration': {
    name: 'Acceleration',
    selectValue: 'acceleration',
    learn_sp: 5,
    season: 1,
    tags: ['Overdrive']
  },
  'analysis': {
    name: 'Analysis',
    selectValue: 'analysis',
    learn_sp: 5,
    season: 1,
    tags: ['Overdrive']
  },
  'blazing-might-raw': {
    name: 'Blazing Might (RAW)',
    selectValue: 'blazing-might-raw',
    learn_sp: 5,
    season: 1,
    tags: ['Overdrive', 'RAW']
  },
  //Reduced cost compared to the original, but in exchange
  //it can't be taken until Season 2.
  'blazing-might-ue': {
    name: 'Blazing Might (Unofficial Errata)',
    selectValue: 'blazing-might-ue',
    learn_sp: 4,
    season: 2,
    tags: ['Overdrive', 'UE']
  },
  'burning-passion': {
    name: 'Burning Passion',
    selectValue: 'burning-passion',
    learn_sp: 5,
    season: 1,
    tags: ['Overdrive']
  },
  'fighting-spirit-raw': {
    name: 'Fighting Spirit (RAW)',
    selectValue: 'fighting-spirit-raw',
    learn_sp: 5,
    season: 1,
    tags: ['Overdrive', 'RAW']
  },
  //Reduced cost compared to the original, but in exchange
  //it can't be taken until Season 2.
  'fighting-spirit-ue': {
    name: 'Fighting Spirit (Unofficial Errata)',
    selectValue: 'fighting-spirit-ue',
    learn_sp: 4,
    season: 2,
    tags: ['Overdrive', 'UE']
  },
  'hardened-defense': {
    name: 'Hardened Defense',
    selectValue: 'hardened-defense',
    learn_sp: 6,
    season: 1,
    tags: ['Overdrive']
  },
  'hardened-resistance': {
    name: 'Hardened Resistance',
    selectValue: 'hardened-resistance',
    learn_sp: 6,
    season: 1,
    tags: ['Overdrive']
  },
  'resolute-aura': {
    name: 'Resolute Aura',
    selectValue: 'resolute-aura',
    learn_sp: 5,
    season: 1,
    tags: ['Overdrive']
  },
  'strength-of-will': {
    name: 'Strength of Will',
    selectValue: 'strength-of-will',
    learn_sp: 5,
    season: 1,
    tags: ['Overdrive']
  },
  'asset': {
    name: 'Asset',
    selectValue: 'asset',
    learn_sp: 3,
    season: 1,
    tags: ['Challenge', 'Character', 'Repeatable']
  },
  'challenge-technique': {
    name: 'Challenge Technique',
    selectValue: 'challenge-technique',
    learn_sp: 3,
    season: 1,
    tags: ['Challenge', 'Character', 'Repeatable']
  },
  'favorable-insight': {
    name: 'Favorable Insight',
    selectValue: 'favorable-insight',
    learn_sp: 3,
    season: 1,
    tags: ['Challenge', 'Character', 'Repeatable']
  },
  'favorable-success': {
    name: 'Favorable Success',
    selectValue: 'favorable-success',
    learn_sp: 4,
    season: 2,
    tags: ['Challenge', 'Character', 'Repeatable']
  },
  'proficiency': {
    name: 'Proficiency',
    selectValue: 'proficiency',
    learn_sp: 2,
    season: 1,
    tags: ['Challenge', 'Character', 'Repeatable']
  },
  'recovery': {
    name: 'Recovery',
    selectValue: 'recovery',
    learn_sp: 3,
    season: 1,
    tags: ['Challenge', 'Character', 'Repeatable']
  },
  'companion': {
    name: 'Companion',
    selectValue: 'companion',
    learn_sp: 6,
    season: 1,
    tags: ['Passive', 'Repeatable']
  },
  'ally-mount': {
    name: 'Ally Mount',
    selectValue: 'ally-mount',
    learn_sp: 6,
    season: 2,
    tags: ['Active', 'Companion', 'Mount']
  },
  //Unlike most of these companion skills, Companion Sense applies
  //to ALL of your companions.
  'companion-sense': {
    name: 'Companion Sense',
    selectValue: 'companion-sense',
    learn_sp: 2,
    season: 3,
    tags: ['Active', 'Companion']
  },
  'companion-zoc': {
    name: 'Companion Zone of Control',
    selectValue: 'companion-zoc',
    learn_sp: 4,
    season: 2,
    tags: ['Passive', 'Companion']
  },
  'extended-revival': {
    name: 'Extended Revival',
    selectValue: 'extended-revival',
    learn_sp: 4,
    season: 2,
    tags: ['Active', 'Companion']
  },
  'fast-companion': {
    name: 'Fast Companion',
    selectValue: 'fast-companion',
    learn_sp: 2,
    season: 1,
    tags: ['Passive', 'Companion']
  },
  'flank-attack': {
    name: 'Flank Attack',
    selectValue: 'flank-attack',
    learn_sp: 4,
    season: 2,
    tags: ['Situational', 'Companion']
  },
  'flying-companion': {
    name: 'Flying Companion',
    selectValue: 'flying-companion',
    learn_sp: 3,
    season: 3,
    tags: ['Passive', 'Companion']
  },
  'hidden-companion': {
    name: 'Hidden Companion',
    selectValue: 'hidden-companion',
    learn_sp: 4,
    season: 1,
    tags: ['Active', 'Companion']
  },
  'instant-mount': {
    name: 'Instant Mount',
    selectValue: 'instant-mount',
    learn_sp: 6,
    season: 3,
    tags: ['Active', 'Companion', 'Mount']
  },
  'mount': {
    name: 'Mount',
    selectValue: 'mount',
    learn_sp: 3,
    season: 1,
    tags: ['Active', 'Companion']
  },
  'protect-ally': {
    name: 'Protect Ally',
    selectValue: 'protect-ally',
    learn_sp: 2,
    season: 2,
    tags: ['Reaction', 'Companion', 'Protect Master']
  },
  'protect-master': {
    name: 'Protect Master',
    selectValue: 'protect-master',
    learn_sp: 4,
    season: 2,
    tags: ['Reaction', 'Companion']
  },
  'ranged-revival': {
    name: 'Ranged Revival',
    selectValue: 'ranged-revival',
    learn_sp: 3,
    season: 2,
    tags: ['Active', 'Companion']
  },
  'reactive-companion': {
    name: 'Reactive Companion',
    selectValue: 'reactive-companion',
    learn_sp: 4,
    season: 3,
    tags: ['Reaction', 'Companion']
  },
  'sense-malice': {
    name: 'Sense Malice',
    selectValue: 'sense-malice',
    learn_sp: 2,
    season: 1,
    tags: ['Situational', 'Companion']
  },
  'tossing-companion': {
    name: 'Tossing Companion',
    selectValue: 'tossing-companion',
    learn_sp: 3,
    season: 2,
    tags: ['Active', 'Companion', 'Toss']
  },
  'trusting-companion': {
    name: 'Trusting Companion',
    selectValue: 'trusting-companion',
    learn_sp: 4,
    season: 2,
    tags: ['Active', 'Companion']
  },
  'change-attributes': {
    name: 'Change Attributes',
    selectValue: 'change-attributes',
    learn_sp: 2,
    season: 1,
    tags: ['Boost']
  },
  'enhanced-range': {
    name: 'Enhanced Range',
    selectValue: 'enhanced-range',
    learn_sp: 2,
    season: 1,
    tags: ['Boost']
  },
  //Like their Weaken Flaw counterparts, these are too strong.
  'great-accuracy-raw': {
    name: 'Great Accuracy (RAW)',
    selectValue: 'great-accuracy-raw',
    learn_sp: 6,
    season: 1,
    tags: ['Boost', 'RAW']
  },
  'great-evasion-raw': {
    name: 'Great Evasion (RAW)',
    selectValue: 'great-evasion-raw',
    learn_sp: 6,
    season: 1,
    tags: ['Boost', 'RAW']
  },
  //These cost more...
  'great-accuracy-ue': {
    name: 'Great Accuracy (Unofficial Errata)',
    selectValue: 'great-accuracy-ue',
    learn_sp: 8,
    season: 1,
    tags: ['Boost', 'UE']
  },
  'great-evasion-ue': {
    name: 'Great Evasion (Unofficial Errata)',
    selectValue: 'great-evasion-ue',
    learn_sp: 8,
    season: 1,
    tags: ['Boost', 'UE']
  },
  //...and these are half as effective.
  'great-physical-accuracy': {
    name: 'Great Physical Accuracy',
    selectValue: 'great-physical-accuracy',
    learn_sp: 6,
    season: 1,
    tags: ['Boost', 'Houserule']
  },
  'great-physical-evasion': {
    name: 'Great Physical Evasion',
    selectValue: 'great-physical-evasion',
    learn_sp: 6,
    season: 1,
    tags: ['Boost', 'Houserule']
  },
  'great-energy-accuracy': {
    name: 'Great Energy Accuracy',
    selectValue: 'great-energy-accuracy',
    learn_sp: 6,
    season: 1,
    tags: ['Boost', 'Houserule']
  },
  'great-energy-evasion': {
    name: 'Great Energy Evasion',
    selectValue: 'great-energy-evasion',
    learn_sp: 6,
    season: 1,
    tags: ['Boost', 'Houserule']
  },
};
