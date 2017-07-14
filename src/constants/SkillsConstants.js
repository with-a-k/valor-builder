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
    * AttackDefenseUp: For "Great Evasion" and "Great Accuracy", which can no longer ever be applied simultaneously.
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
  bonus: What character attributes this skill affects. Some bonuses are grouped up (e.g. Strength Attack and Agility Attack into "Physical Attack".)
  learn_value: The amount this skill affects its attribute by at skill level 1.
  level_speed: The rate at which new levels in this skill can be taken.
    Fixed skills can't be leveled.
    Fast skills can be leveled once every 3 levels (1, 4, 7, 10, etc.).
    Slow skills can be leveled once every 5 levels (1, 6, 15, etc.).
  level_sp: The amount of SP it costs to increase a skill's level beyond 1.
  level_value: The amount additional levels in this skill increase its effect.
  description: The text of the skill, here modified in many cases from the book text. #{calc} is substituted for (learn_value + (level_value * level-1)) during use.
    Other #{} entries are special calculations detailed within the skills themselves.
  character: Extra text that is displayed if the Skill is attached directly to a character.
  technique: Extra text that is displayed if the Skill is attached to a Technique.
*/

module.exports = {
  'aggravated-wounds': {
    name: 'Aggravated Wounds',
    selectValue: 'aggravated-wounds',
    learn_sp: -2,
    season: 1,
    tags: ['Flaw', 'Passive'],
    level_speed: "Fixed",
    description: "Healing Techniques used on you restore 1/2 the Health they ordinarily would."
  },
  'berserker': {
    name: 'Berserker',
    selectValue: 'berserker',
    learn_sp: -5,
    season: 1,
    tags: ['Flaw', 'Situational'],
    level_speed: "Fixed",
    description: "Whenever you are below Critical Health and not incapacitated, every space you move must bring you closer to at least one enemy if possible, you must use a Damage Core Technique every turn if possible even if you must attack an ally, you gain a +1 bonus to all attack rolls, a +10 bonus to all attack scores, a -2 penalty to all defense rolls, and a -20 penalty to Defense and Resistance."
  },
  'compulsion': {
    name: 'Compulsion',
    selectValue: 'compulsion',
    learn_sp: -4,
    season: 1,
    tags: ['Flaw', 'Situational'],
    level_speed: "Fixed",
    description: "Every other round of combat starting with the second, you must choose between losing your Support Action on your turn by engaging in some compulsive activity or 1 Valor."
  },
  'despair': {
    name: 'Despair',
    selectValue: 'despair',
    learn_sp: -3,
    season: 1,
    tags: ['Flaw', 'Situational', 'Knockout'],
    level_speed: "Fixed",
    description: "The first time any ally is reduced to 0 Health or less in a scene, lose 2 Valor. If the ally was a Flunky or created by a Summoning Core Technique, do not lose Valor. If the ally was a Soldier not created by a Summoning Core Technique, lose 1 Valor."
  },
  'energy-vulnerability': {
    name: 'Energy Vulnerability',
    selectValue: 'energy-vulnerability',
    learn_sp: -2,
    learn_value: -4,
    season: 1,
    tags: ['Flaw', 'Passive', 'Resistance'],
    level_speed: "Fast",
    level_sp: -1,
    level_value: -2,
    bonus: 'resistance',
    description: "Reduces Resistance by #{calc}."
  },
  'feeble': {
    name: 'Feeble',
    selectValue: 'feeble',
    learn_sp: -3,
    season: 1,
    tags: ['Flaw', 'Situational'],
    level_speed: "Fixed",
    description: "All defense rolls you make against Damage Techniques based on Muscle are rolled with a -1 penalty."
  },
  'form-restriction': {
    name: 'Form Restriction',
    selectValue: 'form-restriction',
    learn_sp: -2,
    season: 1,
    tags: ['Flaw', 'Situational', 'Repeatable'],
    level_speed: "Fixed",
    description: "Choose one Skill and one Transformation you have. The Skill has no effect or cannot be used unless you are in that Transformation. This Flaw may be taken multiple times, and each applies to a different Skill. If the chosen Skill costs 2 SP, this Flaw grants 1 SP instead."
  },
  'fragile': {
    name: 'Fragile',
    selectValue: 'fragile',
    learn_sp: -3,
    learn_value: -30,
    season: 1,
    tags: ['Flaw', 'Passive', 'MaxHealth'],
    level_speed: 'Fast',
    level_sp: -2,
    level_value: -15,
    description: "Reduces Maximum Health by #{calc}.",
    technique: "Applying this Flaw does not reduce the target's current Health unless the target's current Health is below their new Maximum Health. Any Health lost this way is regained when the Technique's effect ends."
  },
  'lack-of-control': {
    name: 'Lack of Control',
    selectValue: 'lack-of-control',
    learn_sp: -2,
    learn_value: -8,
    season: 1,
    tags: ['Flaw', 'Passive', 'MaxStamina'],
    level_speed: 'Fast',
    level_sp: -1,
    level_value: -6,
    description: "Reduces Maximum Stamina by #{calc}.",
    technique: "Applying this Flaw does not reduce the target's current Stamina unless the target's current Stamina is below their new Maximum Stamina. Any Stamina lost this way is regained when the Technique's effect ends."
  },
  'malevolent-entity': {
    name: 'Malevolent Entity',
    selectValue: 'malevolent-entity',
    learn_sp: -5,
    season: 1,
    tags: ['Flaw', 'Situational'],
    level_speed: 'Fixed',
    //#{mecalc} = 3 + CharacterLevel/2 ; #{mescalc} = 5 + Resolve
    description: "You are inhabited by an entity striving to take over. When you gain this Flaw, the entity has a base Resolve score equal to #{mecalc}. Whenever you take damage that brings you below Critical Health or another effect asks, roll Resolve check against the entity. If you succeed, you retain control of your body, but the entity's Resolve increases by 1. If it succeeds, it takes control over your body. While the entity controls your body, the GM has full control over your character's actions, and all your rolls are made with a +1 bonus; however, the entity cannot spend your Valor to use Overdrives. At the end of each of your turns while the entity controls your body, roll Resolve against it. You cannot use Overdrives to improve your chances at this roll, but your allies can. If it succeeds, its Resolve decreases by 1, and it retains control. If you succeed, its Resolve drops to its base value and you regain control of your body. Whenever you gain a level that increases the entity's base Resolve, its current Resolve also increases. You may, with no action, surrender control, giving the entity control and increasing its Resolve to #{mescalc}. Sometimes the GM may opt to have the entity not attempt to take over; if this happens, you always retain control and the entity's Resolve increases by 1."
  },
  'non-proficient': {
    name: 'Non-proficient',
    selectValue: 'non-proficient',
    learn_sp: -1,
    season: 1,
    tags: ['Flaw', 'Challenge', 'Repeatable'],
    level_speed: 'Fixed',
    description: "Select a Challenge action. Whenever you roll for this action, you do so at a -1 penalty. You may take this Flaw multiple times, for a different action each time."
  },
  'oblivious': {
    name: 'Oblivious',
    selectValue: 'oblivious',
    learn_sp: -3,
    season: 1,
    tags: ['Flaw', 'Situational'],
    level_speed: 'Fixed',
    description: "All defense rolls you make against Damage Techniques based on Intuition are rolled with a -1 penalty."
  },
  'slow': {
    name: 'Slow',
    selectValue: 'slow',
    learn_sp: -2,
    learn_value: -1,
    season: 1,
    tags: ['Flaw', 'Passive', 'Movement'],
    level_speed: 'Slow',
    level_sp: -1,
    level_value: -1,
    bonus: 'movement',
    description: "Reduces Movement by #{calc}."
  },
  'slow-healing': {
    name: 'Slow Healing',
    selectValue: 'slow-healing',
    learn_sp: -2,
    season: 1,
    tags: ['Flaw', 'Situational'],
    level_speed: 'Fixed',
    description: "At the end of the first non-combat scene following any number of combat scenes, you do not recover Health as usual."
  },
  'slow-to-act': {
    name: 'Slow to Act',
    selectValue: 'slow-to-act',
    learn_sp: -1,
    learn_value: -2,
    season: 1,
    tags: ['Flaw', 'Situational', 'Initiative'],
    level_speed: 'Fixed',
    bonus: 'initiative',
    description: "Reduces Initiative by 2."
  },
  'unthreatening': {
    name: 'Unthreatening',
    selectValue: 'unthreatening',
    learn_sp: -3,
    season: 1,
    tags: ['Flaw', 'Passive'],
    level_speed: 'Fixed',
    description: "Enemies move through your Zone of Control at no penalty to movement."
  },
  'uncoordinated': {
    name: 'Uncoordinated',
    selectValue: 'uncoordinated',
    learn_sp: -3,
    season: 1,
    tags: ['Flaw', 'Situational'],
    level_speed: 'Fixed',
    description: "All defense rolls you make against Damage Techniques based on Dexterity are rolled with a -1 penalty."
  },
  'violent': {
    name: 'Violent',
    selectValue: 'violent',
    learn_sp: -3,
    season: 1,
    tags: ['Flaw', 'Situational'],
    level_speed: 'Fixed',
    description: "At the end of all of your turns in which you do not use a Damage Core Technique on an enemy, lose 2 Valor."
  },
  'weak-energy-attacker': {
    name: 'Weak Energy Attacker',
    selectValue: 'weak-energy-attacker',
    learn_sp: -3,
    learn_value: -6,
    season: 1,
    tags: ['Flaw', 'Passive', 'EnergyAttack'],
    level_speed: 'Fast',
    level_sp: -2,
    level_value: -3,
    bonus: 'energy_attack',
    description: "Reduces Spirit Attack and Mind Attack by #{calc} each."
  },
  'weak-physical-attacker': {
    name: 'Weak Physical Attacker',
    selectValue: 'weak-physical-attacker',
    learn_sp: -3,
    learn_value: -6,
    season: 1,
    tags: ['Flaw', 'Passive', 'PhysicalAttack'],
    level_speed: 'Fast',
    level_sp: -2,
    level_value: -3,
    bonus: 'physical_attack',
    description: "Reduces Strength Attack and Agility Attack by #{calc} each."
  },
  'weak-aura': {
    name: 'Weak Aura',
    selectValue: 'weak-aura',
    learn_sp: -3,
    season: 1,
    tags: ['Flaw', 'Situational'],
    level_speed: 'Fixed',
    description: "All defense rolls you make against Damage Techniques based on Aura are rolled with a -1 penalty."
  },
  'weak-defender': {
    name: 'Weak Defender',
    selectValue: 'weak-defender',
    learn_sp: -2,
    learn_value: -4,
    season: 1,
    tags: ['Flaw', 'Passive', 'Defense'],
    level_speed: "Fast",
    level_sp: -1,
    level_value: -2,
    bonus: 'defense',
    description: "Reduces Defense by #{calc}."
  },
  'weak-willed': {
    name: 'Weak-Willed',
    selectValue: 'weak-willed',
    learn_sp: -4,
    learn_value: -1,
    season: 1,
    tags: ['Flaw', 'Passive', 'StartingValor'],
    level_speed: 'Slow',
    level_sp: -3,
    level_value: -1,
    description: "You begin combat scenes with #{calc} less Valor."
  },
  'flightless': {
    name: 'Flightless',
    selectValue: 'flightless',
    learn_sp: -3,
    season: 1,
    tags: ['Flaw', 'Situational', 'Weaken'],
    level_speed: 'Fixed',
    description: "If you are Flying for any reason, you immediately stop flying and fall Prone."
  },
  //For all these Impaired Whatever skills, the Unofficial Errata version
  //just costs more.
  'impaired-accuracy-raw': {
    name: 'Impaired Accuracy (RAW)',
    selectValue: 'impaired-accuracy-raw',
    learn_sp: -3,
    season: 1,
    tags: ['Flaw', 'Situational', 'Weaken', 'RAW'],
    level_speed: 'Fixed',
    description: "Whenever you make an attack roll, subtract 1 from it."
  },
  'impaired-accuracy-ue': {
    name: 'Impaired Accuracy (Unofficial Errata)',
    selectValue: 'impaired-accuracy-ue',
    learn_sp: -4,
    season: 1,
    tags: ['Flaw', 'Situational', 'Weaken', 'UE'],
    level_speed: 'Fixed',
    description: "Whenever you make an attack roll, subtract 1 from it."
  },
  'impaired-physical-accuracy': {
    name: 'Impaired Physical Accuracy',
    selectValue: 'impaired-physical-accuracy',
    learn_sp: -3,
    season: 1,
    tags: ['Flaw', 'Situational', 'Weaken', 'Houserule'],
    level_speed: 'Fixed',
    description: "Whenever you make an attack roll with Muscle or Dexterity, subtract 1 from it."
  },
  'impaired-energy-accuracy': {
    name: 'Impaired Energy Accuracy',
    selectValue: 'impaired-energy-accuracy',
    learn_sp: -3,
    season: 1,
    tags: ['Flaw', 'Situational', 'Weaken', 'Houserule'],
    level_speed: 'Fixed',
    description: "Whenever you make an attack roll with Aura or Intuition, subtract 1 from it."
  },
  'impaired-evasion-raw': {
    name: 'Impaired Evasion (RAW)',
    selectValue: 'impaired-evasion-raw',
    learn_sp: -3,
    season: 1,
    tags: ['Flaw', 'Situational', 'Weaken', 'RAW'],
    level_speed: 'Fixed',
    description: "Whenever you make a defense roll, subtract 1 from it."
  },
  'impaired-evasion-ue': {
    name: 'Impaired Accuracy (Unofficial Errata)',
    selectValue: 'impaired-accuracy-ue',
    learn_sp: -4,
    season: 1,
    tags: ['Flaw', 'Situational', 'Weaken', 'UE'],
    level_speed: 'Fixed',
    description: "Whenever you make a defense roll, subtract 1 from it."
  },
  'impaired-physical-evasion': {
    name: 'Impaired Physical Evasion',
    selectValue: 'impaired-physical-evasion',
    learn_sp: -3,
    season: 1,
    tags: ['Flaw', 'Situational', 'Weaken', 'Houserule'],
    level_speed: 'Fixed',
    description: "Whenever you make a defense roll against a Muscle or Dexterity Technique, subtract 1 from it."
  },
  'impaired-energy-evasion': {
    name: 'Impaired Energy Evasion',
    selectValue: 'impaired-energy-evasion',
    learn_sp: -3,
    season: 1,
    tags: ['Flaw', 'Situational', 'Weaken', 'Houserule'],
    level_speed: 'Fixed',
    description: "Whenever you make a defense roll against an Aura or Intuition Technique, subtract 1 from it."
  },
  'balanced-fighter': {
    name: 'Balanced Fighter',
    selectValue: 'balanced-fighter',
    learn_sp: 8,
    learn_value: 1,
    season: 1,
    tags: ['Passive'],
    level_speed: 'Fixed',
    bonus: 'actives',
    description: "Increase all of your Active Attributes lower than your highest one by 1."
  },
  'break-valor-limit': {
    name: 'Break Valor Limit',
    selectValue: 'break-valor-limit',
    learn_sp: 6,
    season: 4,
    tags: ['Passive'],
    level_speed: 'Fixed',
    description: "Increase your maximum Valor to 20. While you have 20 Valor, increase your bonus to all rolls by an additional 1."
  },
  'bravado-raw': {
    name: 'Bravado (RAW)',
    selectValue: 'bravado-raw',
    learn_sp: 6,
    learn_value: 1,
    season: 1,
    tags: ['Passive', 'RAW'],
    level_speed: 'Slow',
    level_sp: 4,
    level_value: 1,
    description: "You begin combat scenes with #{calc} more Valor."
  },
  //Levels up at 6 SP per level instead of 4.
  'bravado-ue': {
    name: 'Bravado (Unofficial Errata)',
    selectValue: 'bravado-ue',
    learn_sp: 6,
    learn_value: 1,
    season: 1,
    tags: ['Passive', 'UE'],
    level_speed: 'Slow',
    level_sp: 6,
    level_value: 1,
    description: "You begin combat scenes with #{calc} more Valor."
  },
  //A houserule variant Bravado which is Fixed instead of levelable.
  'bravado-fixed': {
    name: 'Bravado (Fixed)',
    selectValue: 'bravado-fixed',
    learn_sp: 6,
    season: 1,
    tags: ['Passive', 'Houserule'],
    level_speed: 'Fixed',
    description: "You begin combat scenes with 1 more Valor."
  },
  //The book classifies this as Permanent (Passive), but I haven't seen a use case for this yet.
  'discreet-aura': {
    name: 'Discreet Aura',
    selectValue: 'discreet-aura',
    learn_sp: 6,
    season: 1,
    tags: ['Situational', 'Passive'],
    level_speed: 'Fixed',
    description: "If an enemy attempts to detect you with Spirit Sight, you may roll Aura against them to stay concealed. You may use Aura for stealth rolls. Anyone reading or tracking your aura must succeed at an opposed Aura roll against you. If they fail, you can choose to give them no information or false information."
  },
  //The book classifies this as Permanent, but not every campaign will even use Darkness.
  //I've added the Situational tag to it for this reason.
  'darksight': {
    name: 'Darksight',
    selectValue: 'darksight',
    learn_sp: 4,
    season: 1,
    tags: ['Situational', 'Passive'],
    level_speed: 'Fixed',
    description: "Ignore all penalties to rolls that would be caused by you or any target being in darkness."
  },
  'energy-attacker': {
    name: 'Energy Attacker',
    selectValue: 'energy-attacker',
    learn_sp: 6,
    learn_value: 6,
    season: 1,
    tags: ['Passive', 'EnergyAttack'],
    level_speed: 'Slow',
    level_sp: 3,
    level_value: 3,
    bonus: 'energy_attack',
    description: "Increase Spirit Attack and Mind Attack by #{calc} each."
  },
  'expanded-reach': {
    name: 'Expanded Reach',
    selectValue: 'expanded-reach',
    learn_sp: 8,
    season: 4,
    tags: ['Passive'],
    level_speed: 'Fixed',
    description: "Your Zone of Control expands by 1 space in all directions."
  },
  'extra-action': {
    name: 'Extra Action',
    selectValue: 'extra-action',
    learn_sp: 12,
    season: 4,
    tags: ['Passive'],
    level_speed: 'Fixed',
    description: "You may use two Support Actions per turn. Slow Actions use both of them."
  },
  'fast-healing': {
    name: 'Fast Healing',
    selectValue: 'fast-healing',
    learn_sp: 4,
    season: 1,
    tags: ['Passive'],
    level_speed: 'Fixed',
    //#{di} is Damage Increment.
    description: "At the end of every scene, recover an additional #{di} Health."
  },
  'improved-di': {
    name: 'Improved Damage Increment',
    selectValue: 'improved-di',
    learn_sp: 5,
    learn_value: 2,
    season: 1,
    tags: ['Passive'],
    level_speed: 'Slow',
    level_sp: 3,
    level_value: 1,
    description: "Increase Damage Increment by #{calc}."
  },
  //Unlike most of the other UE skills, this is a straight buff.
  'improved-di-ue': {
    name: 'Improved Damage Increment (Unofficial Errata)',
    selectValue: 'improved-di-ue',
    learn_sp: 4,
    learn_value: 4,
    season: 1,
    tags: ['Passive'],
    level_speed: 'Slow',
    level_sp: 2,
    level_value: 2,
    description: "Increase Damage Increment by #{calc}."
  },
  'increased-size': {
    name: 'Increased Size',
    selectValue: 'increased-size',
    learn_sp: 2,
    learn_value: 1,
    season: 1,
    tags: ['Passive', 'Size'],
    level_speed: 'Fast',
    level_sp: 2,
    level_value: 1,
    //#{2calc} is 2 * calc.
    description: "The space you occupy expands by #{calc} in every direction. You make all attack rolls with a +#{calc} bonus and all defense rolls with a -#{calc} penalty. The threshold to score a critical hit against you increases by #{2calc}. Your Techniques can originate from any space you occupy, and enemies cannot move through any space you occupy. Any Technique that targets you only has to reach part of the space you occupy. If you can't move through a space, you can temporary reduce your size by 1. While your size is reduced this way, all movement is made as if it were through difficult terrain and you make all rolls at -1. You cannot reduce your size by any more than 1."
  },
  'iron-defense': {
    name: 'Iron Defense',
    selectValue: 'iron-defense',
    learn_sp: 4,
    learn_value: 4,
    season: 1,
    tags: ['Passive', 'Defense'],
    level_speed: 'Slow',
    level_sp: 2,
    level_value: 2,
    description: "Increase Defense by #{calc}."
  },
  'physical-attacker': {
    name: 'Physical Attacker',
    selectValue: 'physical-attacker',
    learn_sp: 6,
    learn_value: 3,
    season: 1,
    tags: ['Passive', 'PhysicalAttack'],
    level_speed: 'Slow',
    level_sp: 3,
    level_value: 3,
    bonus: 'energy_attack',
    description: "Increase Strength Attack and Agility Attack by #{calc} each."
  },
  'regeneration': {
    name: 'Regeneration',
    selectValue: 'regeneration',
    learn_sp: 6,
    learn_value: 10,
    season: 4,
    tags: ['Passive', 'HealthRegen'],
    level_speed: 'Slow',
    level_sp: 4,
    level_value: 10,
    description: "At the end of each round of combat, recover #{calc} Health."
  },
  'resistant': {
    name: 'Resistant',
    selectValue: 'resistant',
    learn_sp: 4,
    learn_value: 4,
    season: 1,
    tags: ['Passive', 'Resistance'],
    level_speed: 'Slow',
    level_sp: 2,
    level_value: 2,
    description: "Increase Resistance by #{calc}."
  },
  //The book classifies this as Permanent, but it only affects airborne targets.
  'sky-attack': {
    name: 'Sky Attack',
    selectValue: 'sky-attack',
    learn_sp: 5,
    season: 2,
    tags: ['Situational'],
    level_speed: 'Fixed',
    description: "Whenever you hit an airborne target with a Damage Technique, increase the damage by #{di}."
  },
  'sprinter': {
    name: 'Sprinter',
    selectValue: 'sprinter',
    learn_sp: 4,
    learn_value: 1,
    season: 1,
    tags: ['Passive', 'Movement'],
    level_speed: 'Slow',
    level_sp: 2,
    level_value: 1,
    description: "Increase Movement by #{calc}."
  },
  'stamina-recovery': {
    name: 'Stamina Recovery',
    selectValue: 'stamina-recovery',
    learn_sp: 4,
    learn_value: 4,
    season: 4,
    tags: ['Passive', 'StaminaRegen'],
    level_speed: 'Slow',
    level_sp: 2,
    level_value: 4,
    description: "At the end of each round of combat, recover #{calc} Stamina."
  },
  'teleportation': {
    name: 'Teleportation',
    selectValue: 'teleportation',
    learn_sp: 6,
    season: 4,
    tags: ['Passive'],
    level_speed: 'Fixed',
    description: "Ignore Zones of Control and obstacles whenever you move voluntarily, as long as your move ends on an unoccupied space. If you attempt to move to an occupied space you can't see, the GM moves you to the nearest unoccupied space instead."
  },
  'tireless': {
    name: 'Tireless',
    selectValue: 'tireless',
    learn_sp: 5,
    learn_value: 8,
    season: 1,
    tags: ['Passive', 'MaxStamina'],
    level_speed: 'Fast',
    level_sp: 2,
    level_value: 6,
    description: "Increase Maximum Stamina by #{calc}.",
    technique: "Applying this Skill also increases the target's current Stamina. Any Stamina gained this way is lost when the Technique's effect ends."
  },
  'tough': {
    name: 'Tough',
    selectValue: 'tough',
    learn_sp: 6,
    learn_value: 30,
    season: 1,
    tags: ['Passive', 'MaxHealth'],
    level_speed: 'Fast',
    level_sp: 2,
    level_value: 15,
    description: "Increase Maximum Health by #{calc}.",
    technique: "Applying this Skill also increases the target's current Health. Any Health gained this way is lost when the Technique's effect ends."
  },
  'unyielding-determination-raw': {
    name: 'Unyielding Determination (RAW)',
    selectValue: 'unyielding-determination-raw',
    learn_sp: 8,
    season: 4,
    tags: ['Passive', 'RAW', 'ValorPerRound'],
    level_speed: 'Fixed',
    description: "Gain 2 Valor at the start of every round."
  },
  //Only affects Valor awards from the GM.
  'unyielding-determination-ue': {
    name: 'Unyielding Determination (Unofficial Errata)',
    selectValue: 'unyielding-determination-ue',
    learn_sp: 8,
    season: 4,
    tags: ['Passive', 'UE'],
    level_speed: 'Fixed',
    description: "Whenever you are awarded Valor for dramatic speech or action, increase the amount received by 1."
  },
  //NPC-only variant of Unyielding Det. (RAW).
  //Technically this is a houserule skill for now but it's missing
  //that tag deliberately.
  'valiant': {
    name: 'Valiant',
    selectValue: 'valiant',
    learn_sp: 12,
    season: 1,
    tags: ['Passive', 'NPC'],
    level_speed: 'Fixed',
    //#{mcheck} is 2 if the character is a Master and 1 otherwise.
    description: "At the beginning of each round, gain #{mcheck} additional Valor."
  },
  'versatile-fighter': {
    name: 'Versatile Fighter',
    selectValue: 'versatile-fighter',
    learn_sp: 6,
    learn_value: 4,
    season: 1,
    tags: ['Passive'],
    level_speed: 'Fast',
    level_sp: 3,
    level_value: 2,
    description: "Increase maximum Technique Points by #{calc}.",
    technique: "The targets of this Technique may freely and immediately assign the TP gained this way to their Techniques or make new ones, though the changes last only for the duration of the Technique's effect."
  },
  'violent-aura': {
    name: 'Violent Aura',
    selectValue: 'violent-aura',
    learn_sp: 4,
    season: 4,
    tags: ['Passive'],
    level_speed: 'Fixed',
    description: "At the beginning of your turn, enemies within your Zone of Control take #{di} damage. Damage from Violent Aura ignores Defense and Resistance. You may turn this effect on or off with a Support Action. When a scene begins, you choose whether this effect is on or off."
  },
  'abundant-creation': {
    name: 'Abundant Creation',
    selectValue: 'abundant-creation',
    learn_sp: 5,
    season: 2,
    tags: ['Situational', 'Creation'],
    level_speed: 'Fixed',
    description: "Whenever you create Attack Nodes, Portals, or Refraction Points, you may create one additional one at normal cost without spending another action. The number of Attack Nodes, Portals, or Refraction Points you may have deployed at once is still determined by the other skill's level."
  },
  'bounce-back': {
    name: 'Bounce Back',
    selectValue: 'bounce-back',
    learn_sp: 6,
    season: 1,
    tags: ['Situational', 'ValorPerRound'],
    level_speed: 'Fixed',
    description: "If you are below 0 Valor at the start of a combat round, gain 2 Valor instead of the usual 1."
  },
  //The wording on this one is pretty vague.
  'clone-tactics': {
    name: 'Clone Tactics',
    selectValue: 'clone-tactics',
    learn_sp: 5,
    season: 2,
    tags: ['Situational', 'Clone'],
    level_speed: 'Fixed',
    description: "Whenever you attack a target, and any of your Clones would also be able to attack that target with the same Technique, add 1 to the attack roll."
  },
  'combat-toss': {
    name: 'Combat Toss',
    selectValue: 'combat-toss',
    learn_sp: 4,
    season: 2,
    tags: ['Situational', 'Toss'],
    level_speed: 'Fixed',
    description: "Whenever you use Toss on an ally, they receive a +1 bonus to all attack rolls until the beginning of your next turn."
  },
  'crisis': {
    name: 'Crisis',
    selectValue: 'crisis',
    learn_sp: 4,
    learn_value: 6,
    season: 1,
    tags: ['Situational'],
    level_speed: 'Fast',
    level_sp: 2,
    level_value: 3,
    description: "Whenever you are below Critical Health, increase all damage you deal by #{calc}."
  },
  'danger-sense': {
    name: 'Danger Sense',
    selectValue: 'danger-sense',
    learn_sp: 3,
    season: 1,
    tags: ['Situational'],
    level_speed: 'Fixed',
    description: "If an Ambush round occurs, you do not suffer from Surprise."
  },
  'daredevil': {
    name: 'Daredevil',
    selectValue: 'daredevil',
    learn_sp: 4,
    season: 2,
    tags: ['Situational'],
    level_speed: 'Fixed',
    description: "Whenever you succeed at defending against an attack while you are below Critical Health, gain 1 Valor."
  },
  'desperation': {
    name: 'Desperation',
    selectValue: 'desperation',
    learn_sp: 6,
    season: 1,
    tags: ['Situational'],
    level_speed: 'Fixed',
    description: "Whenever you defend against an attack while you are below Critical Health, add 1 to your defense roll."
  },
  'dig-deep': {
    name: 'Dig Deep',
    selectValue: 'dig-deep',
    learn_sp: 5,
    season: 1,
    tags: ['Situational'],
    level_speed: 'Fixed',
    description: "Whenever you would expend Stamina, you may instead expend Health equal to five times the amount of Stamina you would have expended."
  },
  'discretion': {
    name: 'Discretion',
    selectValue: 'discretion',
    learn_sp: 2,
    season: 1,
    tags: ['Situational'],
    level_speed: 'Fixed',
    description: "Whenever you make any opposed roll, you may subtract 3 from the result."
  },
  'empower-attack': {
    name: 'Empower Attack',
    selectValue: 'empower-attack',
    learn_sp: 6,
    learn_value: 6,
    season: 1,
    tags: ['Situational'],
    level_speed: 'Fast',
    level_sp: 3,
    level_value: 3,
    description: "Whenever you use a Damage Core technique, and that Technique requires only an Attack Action to use, you may instead use a Slow Action on it. If you do, the Technique deals #{calc} additional damage."
  },
  //Extended Range keys off Active Skills, so it also gets the Active tag.
  'extended-range': {
    name: 'Extended Range',
    selectValue: 'extended-range',
    learn_sp: 6,
    season: 4,
    tags: ['Situational', 'Active'],
    level_speed: 'Fixed',
    description: "Increase the range of all Active Skills you have with a range of 5 to range 20."
  },
  'free-flight': {
    name: 'Free Flight',
    selectValue: 'free-flight',
    learn_sp: 3,
    season: 4,
    tags: ['Situational', 'Fly'],
    level_speed: 'Fixed',
    description: "While you are flying, you do not expend Stamina to stay airborne."
  },
  'free-swift-step': {
    name: 'Free Swift Step',
    selectValue: 'free-swift-step',
    learn_sp: 5,
    season: 4,
    tags: ['Situational', 'Swift Step'],
    level_speed: 'Fixed',
    description: "Whenever you use Swift Step, you do not expend Stamina."
  },
  'improved-swimming': {
    name: 'Improved Swimming',
    selectValue: 'improved-swimming',
    learn_sp: 4,
    season: 1,
    tags: ['Situational', 'Challenge'],
    level_speed: 'Fixed',
    description: "You do not suffer penalties to movement or die rolls from being underwater. During Challenge Scenes, add 1 to any roll you make related to swimming."
  },
  //This also has Active since you need to roll to activate it.
  'nimble-movement': {
    name: 'Nimble Movement',
    selectValue: 'nimble-movement',
    learn_sp: 4,
    season: 1,
    tags: ['Situational', 'Active'],
    level_speed: 'Fixed',
    description: "If you move through an enemy's Zone of Control, you may roll your Dexterity against their Muscle or Dexterity (their choice). If you succeed, ignore the movement penalty from their Zone of Control for this round."
  },
  'overload-limits': {
    name: 'Overload Limits',
    selectValue: 'overload-limits',
    learn_sp: 6,
    season: 1,
    tags: ['Situational'],
    level_speed: 'Fixed',
    description: "Whenever you use a Technique, you may ignore any number of its Limits and instead pay the Stamina cost they were mitigating."
  },
  'passive-healing': {
    name: 'Passive Healing',
    selectValue: 'passive-healing',
    learn_sp: 4,
    season: 1,
    tags: ['Situational'],
    level_speed: 'Fixed',
    description: "At the end of any scene, you may choose not to recover Stamina. If you do, you or one of your allies recovers Health equal to their Health Increment."
  },
  'phasing': {
    name: 'Phasing',
    selectValue: 'phasing',
    learn_sp: 5,
    season: 2,
    tags: ['Situational'],
    level_speed: 'Fixed',
    description: "When moving, you may choose to move through an impassable obstacle by expending 2 Stamina per space moved through this way. You may not move through enemies with Phasing. You must end your movement on an open space; if you would end your movement inside an obstacle you are pushed out to the nearest open space of the GM's choice."
  },
  'protector': {
    name: 'Protector',
    selectValue: 'protector',
    learn_sp: 5,
    season: 1,
    tags: ['Situational', 'Cover', 'Repeatable'],
    level_speed: 'Fixed',
    description: "Choose another character. Whenever you use Cover to defend that character, gain 1 Valor. You may take Protector multiple times, choosing a different character for each."
  },
  //Since the builder openly displays the Initiative modifier, this adds to that directly like some of the other Passive skills.
  'quick-to-act': {
    name: 'Quick to Act',
    selectValue: 'quick-to-act',
    learn_sp: 3,
    season: 1,
    tags: ['Situational', 'Passive', 'Initiative'],
    level_speed: 'Fixed',
    description: "Increase your Initiative modifier by 2."
  },
  'reckless-attack': {
    name: 'Reckless Attack',
    selectValue: 'reckless-attack',
    learn_sp: 5,
    learn_value: 1,
    season: 1,
    tags: ['Situational'],
    level_speed: 'Slow',
    level_sp: 3,
    level_value: 1,
    description: "Whenever you attack, you may add up to #{calc} to your attack roll. If you do, subtract the same number from all defense rolls you make until the beginning of your next turn."
  },
  'resolute-strike': {
    name: 'Resolute Strike',
    selectValue: 'resolute-strike',
    learn_sp: 5,
    season: 1,
    tags: ['Situational'],
    level_speed: 'Fixed',
    description: "While you have at least 2 Valor, you may make attack rolls using Resolve instead of the Technique's usual attribute."
  },
  'revenge': {
    name: 'Revenge',
    selectValue: 'revenge',
    learn_sp: 5,
    season: 1,
    tags: ['Situational', 'Knockout'],
    level_speed: "Fixed",
    description: "The first time any ally is reduced to 0 Health or less in a scene, gain 2 Valor. If the ally was a Flunky or created by a Summoning Core Technique, do not gain Valor. If the ally was a Soldier not created by a Summoning Core Technique, gain 1 Valor."
  },
  'rising-attack': {
    name: 'Rising Attack',
    selectValue: 'rising-attack',
    learn_sp: 6,
    season: 2,
    tags: ['Situational'],
    level_speed: 'Fixed',
    description: "Whenever you recover from Prone, add 1 to the next attack roll you make that turn."
  },
  'rolling-recovery': {
    name: 'Rolling Recovery',
    selectValue: 'rolling-recovery',
    learn_sp: 4,
    season: 1,
    tags: ['Situational'],
    level_speed: 'Fixed',
    //#{rrcalc} is Movement/2.
    description: "Whenever you use a Move Action to recover from Prone, you may also move up to #{rrcalc}"
  },
  'safe-stride': {
    name: 'Safe Stride',
    selectValue: 'safe-stride',
    learn_sp: 5,
    season: 2,
    tags: ['Situational'],
    level_speed: 'Fixed',
    description: "Ignore damage that would be caused by terrain effects. Safe Stride does not protect you from Techniques with Persistent Effect."
  },
  'split-move': {
    name: 'Split Move',
    selectValue: 'split-move',
    learn_sp: 6,
    season: 2,
    tags: ['Situational'],
    level_speed: 'Fixed',
    //#{move} is, as one might expect, Movement.
    description: "You may take two Move Actions during your turn, as long as the total distance you move with them is less than #{move}. Recovering from a condition such as Immobilized still takes your entire Move Action."
  },
  'team-tactics': {
    name: 'Team Tactics',
    selectValue: 'team-tactics',
    learn_sp: 5,
    season: 1,
    tags: ['Situational'],
    level_speed: 'Fixed',
    description: "Whenever you attack an enemy, if you and at least one of your allies are both adjacent to it but not adjacent to each other, add 1 to your attack roll."
  },
  'transposition': {
    name: 'Transposition',
    selectValue: 'transposition',
    learn_sp: 4,
    season: 1,
    tags: ['Situational', 'Swift Step'],
    level_speed: 'Fixed',
    description: "Whenever you use Swift Step, you may choose to move into a space occupied by another character. If you do, you trade places with them. If the other character is an enemy, you must also succeed at an opposed Aura or Intuition roll against their choice of Aura or Intuition. If you succeed, you switch positions with them as normal. If you fail, you still expend the Stamina and Support Action that went into making the attempt, but nothing happens."
  },
  'underhanded': {
    name: 'Underhanded',
    selectValue: 'underhanded',
    learn_sp: 5,
    season: 2,
    tags: ['Situational'],
    level_speed: 'Fixed',
    description: "You do not suffer penalties to die rolls that would be caused by having less than 0 Valor. You are still Incapacitated if you reach -10 Valor."
  },
  //TODO: figure out how to make "immovable" search for this without the duplicate entry
  'unmovable': {
    name: 'Unmovable',
    selectValue: 'immovable',
    learn_sp: 6,
    learn_value: 2,
    season: 1,
    tags: ['Situational'],
    level_speed: 'Slow',
    level_sp: 2,
    level_value: 2,
    description: "Whenever any effect would move you against your will, reduce the distance you are moved by #{calc}. If another character is forcibly moved into you, they collide with you as if you were a wall; their movement stops and they take damage equal to the attacker's Damage Increment, and nothing happens to you. If you successfully defend against a Damage Technique with the Rush Attack modifier using Muscle, stop the attacker's action and place them anywhere within your Zone of Control."
  },
  //common alternate spelling
  'immovable': {
    name: 'Unmovable',
    selectValue: 'unmovable',
    learn_sp: 6,
    learn_value: 2,
    season: 1,
    tags: ['Situational'],
    level_speed: 'Slow',
    level_sp: 2,
    level_value: 2,
    description: "Whenever any effect would move you against your will, reduce the distance you are moved by #{calc}. If another character is forcibly moved into you, they collide with you as if you were a wall; their movement stops and they take damage equal to the attacker's Damage Increment, and nothing happens to you. If you successfully defend against a Damage Technique with the Rush Attack modifier using Muscle, stop the attacker's action and place them anywhere within your Zone of Control."
  },
  'unshakeable': {
    name: 'Unshakeable',
    selectValue: 'unshakeable',
    learn_sp: 6,
    season: 3,
    tags: ['Situational'],
    level_speed: 'Fixed',
    description: "You cannot receive the Shaken condition."
  },
  'unstoppable': {
    name: 'Unstoppable',
    selectValue: 'unstoppable',
    learn_sp: 6,
    season: 3,
    tags: ['Situational'],
    level_speed: 'Fixed',
    //#{nhi} is -1 * Health Increment
    description: "While you have at least 2 Valor, you are not Incapacitated until your Health drops to #{nhi}"
  },
  'water-adaptation': {
    name: 'Water Adaptation',
    selectValue: 'water-adaptation',
    learn_sp: 6,
    season: 2,
    tags: ['Situational'],
    level_speed: 'Fixed',
    description: "If you are completely immersed in a liquid, you gain Valor normally, do not begin drowning if you are Incapacitated, and ignore the usual penalty to die rolls for being completely immersed. Water Adaptation does not protect you from any effects of the liquid itself, such as damage from lava or acid."
  },
  'wall-walk': {
    name: 'Wall Walk',
    selectValue: 'wall-walk',
    learn_sp: 4,
    season: 2,
    tags: ['Situational'],
    level_speed: 'Fixed',
    description: "If you are adjacent to a wall, you are treated as Flying for the purpose of targeting Flying enemies. During Challenge Scenes, add 1 to any roll you make related to climbing."
  },
  'water-walk': {
    name: 'Water Walk',
    selectValue: 'water-walk',
    learn_sp: 4,
    season: 2,
    tags: ['Situational'],
    level_speed: 'Fixed',
    description: "You may stand on liquids as if they were solid. Water Walk does not protect you from the effects of the liquid."
  },
  'x-ray-vision': {
    name: 'X-Ray Vision',
    selectValue: 'x-ray-vision',
    learn_sp: 4,
    season: 2,
    tags: ['Situational'],
    level_speed: 'Fixed',
    description: "You can see and target enemies behind cover at no penalty. X-Ray Vision does not give you any bonuses to piercing the cover."
  },
  'attack-node': {
    name: 'Attack Node',
    selectValue: 'attack-node',
    learn_sp: 5,
    learn_value: 1,
    season: 1,
    tags: ['Active'],
    level_speed: 'Fast',
    level_sp: 2,
    level_value: 1,
    //#{range} is 20 if the character has Extended Range or 5 otherwise.
    description: "As a Support Action, and at the cost of 4 Stamina, create one Attack Node within #{range} spaces of you. If an Attack Node you created is within 20 spaces of you, you may use Techniques through it as if you were standing there as long as they do not have the Ramming Attack or Rush Attack modifiers. Attack Nodes cannot be targeted by Techniques, and any character may occupy the same space as an Attack Node. You may deploy up to #{calc} #{pluralize(Attack Node)} at a time."
  },
  //ANN requires some work to set up, so it also gets Situational.
  'attack-node-network': {
    name: 'Attack Node Network',
    selectValue: 'attack-node-network',
    learn_sp: 4,
    season: 3,
    tags: ['Active', 'Attack Node', 'Situational'],
    level_speed: 'Fixed',
    description: "Whenever you use a technique, if you can attack all targets of the technique from at least two Attack Nodes that you created, you may spend 2 Stamina. If you do, add 1 to your attack rolls for this use of the Technique. No matter how many nodes are within range, the technique will still only hit each target once."
  },
  'battle-analysis': {
    name: 'Battle Analysis',
    selectValue: 'battle-analysis',
    learn_sp: 6,
    season: 2,
    tags: ['Active'],
    level_speed: 'Fixed',
    description: "As a Support Action, you may make an opposed Intuition roll against an enemy. If you succeed, one time during the battle, you may increase you or an ally's defense roll against any of that enemy's attacks by 5. Battle Analysis can only be used successfully one time per enemy per battle."
  },
  'clone': {
    name: 'Clone',
    selectValue: 'clone',
    learn_sp: 6,
    learn_value: 1,
    season: 2,
    tags: ['Active'],
    level_speed: 'Slow',
    level_sp: 3,
    level_value: 1,
    description: "As a Support Action, and at the cost of 5 Stamina, either create one illusionary copy of yourself in any space adjacent to you or move 1 space and create an illusionary copy of yourself in the space you just left. Whenever you move, you may also move your clones. You and your allies always know which you is real. If an enemy attacks a clone, it is destroyed immediately without needing an attack roll. You may have up to #{calc} #{pluralize(clones)} active at a time. If you hit an enemy with a Technique, that enemy immediately knows which you is real and will continue to know until you create another clone. Any enemy can attempt to discern which you is real with an opposed Aura or Intuition roll against you. If you have the Discreet Aura skill, add 2 to any rolls you make to defend against this. Your clones have Zones of Control only if the enemy doesn't know whether they're clones."
  },
  //Other limits on using?
  'dark-healing': {
    name: 'Dark Healing',
    selectValue: 'dark-healing',
    learn_sp: 6,
    season: 1,
    tags: ['Active', 'Malevolent Entity'],
    level_speed: 'Fixed',
    //#{hi} is the character's Health Increment.
    description: "As a Free Action, recover #{hi} Health. Using Dark Healing provokes a takeover attempt by your Malevolent Entity."
  },
  //Other limits on using?
  'dirty-trick': {
    name: 'Dirty Trick',
    selectValue: 'dirty-trick',
    learn_sp: 5,
    season: 1,
    tags: ['Active'],
    level_speed: 'Fixed',
    description: "As a Free Action, one enemy in your Zone of Control becomes Surprised, and you lose 2 Valor."
  },
  'duel': {
    name: 'Duel',
    selectValue: 'duel',
    learn_sp: 2,
    season: 1,
    tags: ['Active'],
    level_speed: 'Fixed',
    description: "Once per battle, as a Support Action, challenge one Elite enemy to single combat. If the enemy accepts, you gain 2 Valor, they gain 2 Valor, and the Duel begins. The effects of Duel last until broken or until either duelist is defeated. If either duelist makes an attack that doesn't target the other, the Duel breaks. If anyone other than one of the duelists makes an attack that targets either duelist, the duelist targeted defends against the attack as if they were Surprised and the Duel breaks. If the Duel breaks, both duelists lose 2 Valor and whoever broke it loses 4 Valor. If the chosen enemy refuses the Duel, they lose 2 Valor."
  },
  'effect-capture': {
    name: 'Effect Capture',
    selectValue: 'effect-capture',
    learn_sp: 4,
    season: 2,
    tags: ['Active'],
    level_speed: 'Fixed',
    //#{range} is as in Attack Node.
    description: "As a Support Action, and at the cost of 5 Stamina, you may make an opposed Aura or Intuition roll against any character within #{range} spaces of you. If you succeed, gain control of any one Attack Node, Portal, Refraction Point, Boost, Weaken, Sapping Strike, or Persistent Effect that the target created. If you capture a Boost, transfer the effect from the target to you. If you capture a Weaken, transfer the effect from the original target to its creator."
  },
  'effect-transfer': {
    name: 'Effect Transfer',
    selectValue: 'effect-transfer',
    learn_sp: 4,
    learn_value: 4,
    season: 1,
    tags: ['Active'],
    level_speed: 'Slow',
    level_sp: 3,
    level_value: 2,
    description: "As a Support Action, move up to #{calc} #{pluralize(Attack Node)}, #{pluralize(Portal)}, or #{pluralize(Persistent Effect)} up to #{calc} spaces. If any chosen #{pluralize{effect}} #{pluralize(was)} created by an enemy, make an opposed Intuition roll against them. If you succeed, move the #{pluralize(effect)}. If you fail, the action and Stamina are expended but nothing happens."
  },
  'exploit-weakness': {
    name: 'Exploit Weakness',
    selectValue: 'exploit-weakness',
    learn_sp: 6,
    season: 3,
    tags: ['Active'],
    level_speed: 'Fixed',
    description: "As a Support Action, you may make an opposed Intuition roll against an enemy, although they may defend against it with Dexterity instead. If you succeed, one time during the battle, you may increase your or an ally's attack roll against that enemy by 5. Exploit Weakness can only be used one time per enemy per battle, whether or not it is successful."
  },
  'feint': {
    name: 'Feint',
    selectValue: 'feint',
    learn_sp: 6,
    season: 1,
    tags: ['Active'],
    level_speed: 'Fixed',
    description: "As a Support Action, you may make an opposed Dexterity or Intuition roll against an enemy within #{range} spaces of you. If you succeed, the next attack you make against that enemy this turn deals #{di} extra damage if it hits."
  },
  'flunky-domination': {
    name: 'Flunky Domination',
    selectValue: 'flunky-domination',
    learn_sp: 5,
    season: 3,
    tags: ['Active'],
    level_speed: 'Fixed',
    description: "As a Support Action, you may make an opposed Aura, Intuition, or Resolve roll against a Flunky enemy within #{range} spaces of you. If you succeed, it immediately makes one Move Action or Attack Action which you control."
  },
  'fly': {
    name: 'Fly',
    selectValue: 'fly',
    learn_sp: 6,
    learn_value: 1,
    season: 3,
    tags: ['Active'],
    level_speed: 'Slow',
    level_sp: 2,
    level_value: 1,
    //#{ffcheck} is 0 if the character has Free Flight or 4 otherwise.
    description: "As a Support Action, and at the cost of 4 Stamina, you may begin flying. While flying, your Move increases by #{calc}, you may move through but not end movement on spaces occupied by non-flying enemies, you are unaffected by land-based difficult terrain and hazards, and you cannot be targeted by melee attacks from non-flying enemies. Maintaining flight requires #{ffcheck} Stamina and no additional actions. If you are currently Immobilized, you cannot use Fly.",
    character: "If you are not attacked by surprise, you may begin flying as a Free Action at the beginning of combat at the cost of 4 Stamina.",
    technique: "When this Technique is applied, the target may begin flying immediately as a Free Action at the cost of 4 Stamina."
  },
  'health-transference': {
    name: 'Health Transference',
    selectValue: 'health-transference',
    learn_sp: 4,
    season: 2,
    tags: ['Active'],
    level_speed: 'Fixed',
    description: "As a Support Action, you may expend #{hi} Health to restore an ally's Health by their Health Increment."
  },
  //In later seasons, Inspire provided too much valor output.
  'inspire-raw': {
    name: 'Inspire (RAW)',
    selectValue: 'inspire-raw',
    learn_sp: 5,
    learn_value: 1,
    season: 1,
    tags: ['Active', 'RAW'],
    level_speed: 'Slow',
    level_sp: 3,
    level_value: 1,
    description: "As a Support Action, #{calc} #{pluralize(ally)} within #{range} spaces of you gains 1 Valor, as long as they have less Valor than you do. During Challenge Scenes, add 1 to any roll you make related to being inspirational."
  },
  //The UE version is, thus, a Fixed skill.
  'inspire-ue': {
    name: 'Inspire (Unofficial Errata)',
    selectValue: 'inspire-ue',
    learn_sp: 5,
    season: 1,
    tags: ['Active', 'UE'],
    level_speed: 'Fixed',
    description: "As a Support Action, one ally within #{range} spaces of you gains 1 Valor, as long as they have less Valor than you do. During Challenge Scenes, add 1 to any roll you make related to being inspirational."
  },
  'intimidate': {
    name: 'Intimidate',
    selectValue: 'intimidate',
    learn_sp: 5,
    learn_value: 1,
    season: 1,
    tags: ['Active'],
    level_speed: 'Fixed',
    level_sp: 3,
    level_value: 1,
    description: "As a Support Action, make an opposed Aura or Resolve roll against #{calc} #{pluralize(enemy)} within #{range} spaces of you. If you succeed, the enemy becomes Shaken. During Challenge Scenes, add 1 to any roll you make related to being intimidating."
  },
  'jump': {
    name: 'Jump',
    selectValue: 'jump',
    learn_sp: 4,
    season: 1,
    tags: ['Active'],
    level_speed: 'Fixed',
    description: "As a Support Action, and at the cost of 2 Stamina, you can attack flying enemies with melee attacks until the end of your turn. During Challenge Scenes, add 1 to any roll you make related to jumping."
  },
  'nullify': {
    name: 'Nullify',
    selectValue: 'nullify',
    learn_sp: 5,
    learn_value: 1,
    season: 1,
    tags: ['Active'],
    level_speed: 'Slow',
    level_sp: 3,
    level_value: 1,
    description: "As a Support Action, and at the cost of 5 Stamina, choose up to #{calc} ongoing temporary #{pluralize(effect)}. Make an Aura, Intuition, or Resolve roll against each effect's creator; they defend with whatever attribute they used to create it, or their choice of Aura, Intuition, or Resolve if the effect was created by an Active Skill. If you succeed, the effect ends immediately. Nullify can be used on Attack Nodes, Clones, Portals, Refraction Points, Seals, Boosts, Weakens, Barriers, Sapping Strikes, and Persistent Effects."
  },
  'portal': {
    name: 'Portal',
    selectValue: 'portal',
    learn_sp: 6,
    learn_value: 2,
    season: 2,
    tags: ['Active'],
    level_speed: 'Slow',
    level_sp: 3,
    level_value: 1,
    description: "As a Support Action, and at the cost of 5 Stamina per portal you create, create one Portal within #{range} spaces of you. Any space containing a Portal you created is considered adjacent to all other spaces containing a Portal you created for all purposes, including movement and technique targeting. If an enemy moves onto a Portal you created, you may immediately decide to move them to any Portal you created, including the one they just moved onto. The first time you use Portal during a battle, you may create two portals instead of one. You may have #{calc} #{pluralize(portals)} active at a time."
  },
  'provoke': {
    name: 'Provoke',
    selectValue: 'provoke',
    learn_sp: 4,
    learn_value: 1,
    season: 1,
    tags: ['Active'],
    level_speed: 'Fast',
    level_sp: 2,
    level_value: 1,
    description: "As a Support Action, make an opposed Resolve roll against #{calc} #{pluralize(enemy)} within #{range} spaces of you. If you succeed, the chosen enemy loses 1 Valor if it uses a Damage Core Technique that doesn't include you as a target. During Challenge Scenes, add 1 to any rolls related to being insulting or provocative."
  },
  'recharge': {
    name: 'Recharge',
    selectValue: 'recharge',
    learn_sp: 5,
    learn_value: 1,
    season: 1,
    tags: ['Active'],
    level_speed: 'Slow',
    level_sp: 3,
    level_value: 1,
    description: "As a Support Action, choose up to #{calc} active non-Ultimate Boost or Persistent Effect Techniques that were initiated by you or an ally within #{range} spaces. Spend Stamina equal to half the Technique's original Stamina cost, and the Technique's effects now end at the end of your turn two rounds from now."
  },
  'refraction-chain': {
    name: 'Feint',
    selectValue: 'refraction-chain',
    learn_sp: 6,
    season: 3,
    tags: ['Active'],
    level_speed: 'Fixed',
    description: "Whenever you use a Technique, and it passes through one of your Refraction Points, it deals #{di} extra damage if it hits."
  },
  'refraction-point': {
    name: 'Refraction Point',
    selectValue: 'refraction-point',
    learn_sp: 4,
    learn_value: 1,
    season: 2,
    tags: ['Active'],
    level_speed: 'Fast',
    level_sp: 2,
    level_value: 1,
    description: "As a Support Action, and at the cost of 3 Stamina, create a Refraction Point within #{range} spaces of you. Any of your Techniques can target the Refraction Point as if it were an enemy. If you do, recast the Technique as if you were in the same space as the Refraction Point. If you use a Technique with the Multiple Targets modifier through a Refraction Point, the Technique loses Multiple Targets when recast, although you may target the Refraction Point multiple times with it, redirecting it appropriately. No matter how many times a single enemy would be hit by a Technique, only one attack roll is made. You cannot use Techniques with Rush Attack or Ramming Attack with Refraction Points. Anyone can stand in the same space as a Refraction Point. You may have up to #{calc} #{pluralize(Refraction Points)} at any time."
  },
  'seal': {
    name: 'Seal',
    selectValue: 'seal',
    learn_sp: 6,
    learn_value: 1,
    season: 2,
    tags: ['Active', 'Repeatable'],
    level_speed: 'Slow',
    level_sp: 3,
    level_value: 1,
    description: "When you acquire this Skill, choose an Active Attribute. If you choose Resolve, then choose a second Active Attribute. As a Support Action, and at the cost of 5 Stamina, make an opposed roll using the Active Attribute you chose against an enemy within #{range} spaces of you. If you chose Muscle or Dexterity, the target defends with Muscle or Dexterity. If you chose Aura or Intuition, the target defends with Aura or Intuition. If you chose Resolve, the target defends with either Resolve or the other attribute you chose. If you succeed, choose a Technique or Active Skill you know the target possesses. The target cannot use that Technique or Skill until the end of your turn two rounds from now. If you disable a Skill that creates a persistent effect such as Attack Node, the persistent effects themselves are not dispelled, but the target cannot use them until the Seal's effects end. You may take multiple instances of Seal, choosing different Active Attributes to use it with for each instance."
  },
  'shadow-meld': {
    name: 'Shadow Meld',
    selectValue: 'shadow-meld',
    learn_sp: 6,
    season: 2,
    tags: ['Active'],
    level_speed: 'Fixed',
    description: "As a Move Action, and at the cost of 4 Stamina, you may meld into the shadows to hide, even if you are being directly observed. While one with the shadow, you cannot attack, but you add 1 to any stealth rolls. Maintaining a shadow meld costs 4 Stamina per round. Ending a shadow meld requires a Move Action."
  },
  'size-up': {
    name: 'Size Up',
    selectValue: 'size-up',
    learn_sp: 3,
    learn_value: 1,
    season: 1,
    tags: ['Active'],
    level_speed: 'Fast',
    level_sp: 1,
    level_value: 1,
    description: "As a Support Action, make an Intuition roll against up to #{calc} #{pluralize(target)}. The target may defend with Intuition or Resolve. If you succeed, you learn the target's current Health, Stamina, Active Attributes, and Flaws."
  },
  'spirit-sight': {
    name: 'Spirit Sight',
    selectValue: 'spirit-sight',
    learn_sp: 5,
    season: 1,
    tags: ['Active'],
    level_speed: 'Fixed',
    description: "As a Support Action, and at the cost of 2 Stamina, you may activate your spiritual sense. While your spiritual sense is active, you know whether any enemies are Clones, you can see the location of any invisible or otherwise concealed targets and attack them without penalty, you ignore all penalties from darkness, and you add 1 to any roll you make to observe or notice. Maintaining Spirit Sight costs an additional 1 Stamina per round."
  },
  'stamina-transference': {
    name: 'Stamina Transference',
    selectValue: 'stamina-transference',
    learn_sp: 4,
    season: 2,
    tags: ['Active'],
    level_speed: 'Fixed',
    //#{si} is Stamina Increment.
    description: "As a Support Action, you may expend #{si} Stamina to restore an ally's Stamina by their Health Increment."
  },
  'swift-jump': {
    name: 'Swift Jump',
    selectValue: 'swift-jump',
    learn_sp: 3,
    season: 3,
    tags: ['Active', 'Jump'],
    level_speed: 'Fixed',
    description: "As a Free Action, and at the cost of 4 Stamina, you can attack flying enemies with melee attacks until the end of your turn."
  },
  'swift-step': {
    name: 'Swift Step',
    selectValue: 'swift-step',
    learn_sp: 5,
    learn_value: 4,
    season: 2,
    tags: ['Active'],
    level_speed: 'Slow',
    level_sp: 2,
    level_value: 1,
    description: "As a Support Action or a Move Action, you may expend up to #{calc} Stamina and move an equal number of spaces. Swift Step movement is affected by Zone of Control. You may use Swift Step multiple times in one turn."
  },
  'toss': {
    name: 'Toss',
    selectValue: 'toss',
    learn_sp: 5,
    learn_value: 4,
    season: 1,
    tags: ['Active'],
    level_speed: 'Slow',
    level_sp: 2,
    level_value: 2,
    description: "As a Support Action, move one ally in your Zone of Control to any open space within #{calc} spaces of you, ignoring any terrain or Zones of Control."
  },
  //The book classifies this as Reaction, but it works with something
  //you chose to do yourself; other skills that affect Swift Step
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
    tags: ['Reaction', 'Clash']
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
