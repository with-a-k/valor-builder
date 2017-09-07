module.exports = {
  'blast-radius': {
    //The classification of this particular modifier.
    //The Targeting classification affects the range and area of the Technique.
    order: 'Targeting',
    //The displayed name.
    name: 'Blast Radius',
    //The list of Cores this modifier can apply to.
    applies: ['damage', 'weaken', 'boost', 'barrier', 'healing', 'ultimate-damage'],
    //The list of other modifiers this Core can't coexist with.
    excludes: ['chain-attack', 'indirect-attack'],
    //A list of modifiers the technique must have at least one of in order to take this one.
    requires: [],
    //The number of levels this modifier adds to the technique at rank 1.
    learnLevelPlus: 2,
    //The number of levels this modifier adds to the technique with additional ranks.
    rankLevelPlus: 2,
    //The season requirement for this modifier.
    season: 1,
    //What does this do to the technique?
    traits: {
      static: {},
      perLevel: {}
    },
    //special alterations to the technique based on its key stat
    special: {
      strength: {},
      agility: {},
      spirit: {
        finalLevel: -1
      },
      mind: {},
      guts: {}
    }
    //should reduce final level additions by 1 if the Technique is Spirit-based
  },
  'chain-attack': {
    order: 'Targeting',
    name: 'Chain Attack',
    applies: ['damage', 'weaken', 'boost', 'healing', 'ultimate-damage'],
    excludes: ['blast-radius', 'indirect-attack'],
    requires: [],
    learnLevelPlus: 1,
    rankLevelPlus: 1,
    season: 1,
    traits: {
      static: {},
      perLevel: {}
    },
    special: {
      strength: {},
      agility: {},
      spirit: {},
      mind: {},
      guts: {}
    }
  },
  'line-attack': {
    order: 'Targeting',
    name: 'Line Attack',
    applies: ['damage', 'weaken', 'boost', 'barrier', 'healing', 'ultimate-damage'],
    excludes: ['indirect-attack'],
    requires: [],
    learnLevelPlus: 1,
    rankLevelPlus: 1,
    season: 1,
    traits: {
      static: {},
      perLevel: {}
    },
    special: {
      strength: {
        lengthPerRank: -1
      },
      agility: {
        lengthPerRank: -1
      },
      spirit: {
        finalLength: 1
      },
      mind: {},
      guts: {}
    }
  },
  'line-variation': {
    order: 'Targeting',
    name: 'Line Variation',
    applies: ['damage', 'weaken', 'boost', 'barrier', 'healing', 'ultimate-damage', 'ultimate-transformation'],
    excludes: [],
    requires: ['line-attack'],
    learnLevelPlus: 1,
    rankLevelPlus: 1,
    season: 2,
    traits: {
      static: {},
      perLevel: {}
    },
    special: {
      strength: {},
      agility: {},
      spirit: {},
      mind: {
        finalTurns: 1
      },
      guts: {}
    }
  },
  'multiple-targets': {
    order: 'Targeting',
    name: 'Multiple Targets',
    applies: ['damage', 'weaken', 'boost', 'healing', 'ultimate-damage'],
    excludes: [],
    requires: [],
    learnLevelPlus: 1,
    rankLevelPlus: 1,
    season: 1,
    traits: {
      static: {},
      perLevel: {}
    },
    special: {
      strength: {},
      agility: {
        finalTargets: 1
      },
      spirit: {},
      mind: {},
      guts: {}
    }
  },
  'indirect-attack': {
    order: 'Targeting',
    name: 'Indirect Attack',
    applies: ['damage', 'weaken', 'boost', 'healing', 'ultimate-damage'],
    excludes: ['blast-radius', 'chain-attack', 'line-attack', 'ranged-technique', 'rush-attack', 'whirlwind-attack', 'indirect-attack'],
    requires: [],
    learnLevelPlus: 3,
    //A rankLevelPlus of 0 indicates that the modifier is binary and can't be ranked up.
    rankLevelPlus: 0,
    season: 1,
    traits: {
      static: {},
      perLevel: {}
    },
    special: {
      strength: {
        invalid: true
      },
      agility: {
        invalid: true
      },
      spirit: {
        invalid: true
      },
      mind: {},
      guts: {
        invalid: true
      }
    }
  },
  'ranged-technique': {
    order: 'Targeting',
    name: 'Ranged Technique',
    applies: ['damage', 'weaken', 'boost', 'barrier', 'summon', 'mimic', 'healing', 'ultimate-damage', 'ultimate-transformation'],
    excludes: [],
    requires: [],
    learnLevelPlus: 1,
    rankLevelPlus: 1,
    season: 1,
    traits: {
      static: {},
      perLevel: {}
    },
    special: {
      strength: {
        rangePerRank: -1
      },
      agility: {
        rangePerRank: 1
      },
      spirit: {
        rangePerRank: 1
      },
      mind: {},
      guts: {}
    }
  },
  'rush-attack': {
    order: 'Targeting',
    name: 'Rush Attack',
    applies: ['damage', 'weaken', 'ultimate-damage'],
    excludes: [],
    requires: [],
    learnLevelPlus: 3,
    rankLevelPlus: 0,
    season: 1,
    traits: {
      static: {},
      perLevel: {}
    },
    special: {
      strength: {
        finalLevel: -1
      },
      agility: {
        finalLevel: -1
      },
      spirit: {},
      mind: {},
      guts: {}
    }
  },
  'smart-area-of-effect': {
    order: 'Targeting',
    name: 'Smart Area of Effect',
    applies: ['damage', 'weaken', 'boost', 'healing', 'ultimate-damage'],
    excludes: [],
    requires: ['blast-radius', 'line-attack'],
    learnLevelPlus: 2,
    rankLevelPlus: 0,
    season: 2,
    traits: {
      static: {},
      perLevel: {}
    },
    special: {
      strength: {},
      agility: {},
      spirit: {},
      mind: {
        season: 1,
        finalLevel: -1
      },
      guts: {}
    }
    //should reduce final level increase by 1 if the technique is Mind-based
    //should be available in season 1 if the technique is Mind-based
  },
  'whirlwind-attack': {
    order: 'Targeting',
    name: 'Whirlwind Attack',
    applies: ['damage', 'ultimate-damage'],
    //Odd that this is still compatible with most other targeting mods...
    excludes: [],
    requires: [],
    learnLevelPlus: 2,
    rankLevelPlus: 0,
    season: 1,
    traits: {
      static: {},
      perLevel: {}
    },
    special: {
      strength: {
        finalLevel: -1
      },
      agility: {
        finalLevel: -1
      },
      spirit: {},
      mind: {},
      guts: {}
    }
    //should reduce level increase by 1 if the technique is based on Strength or Agility.
  },
  'debilitating-strike': {
    //The Special Attack classification sacrifices some power for added effects.
    order: 'Special Attack',
    name: 'Debilitating Strike',
    applies: ['damage', 'ultimate-damage'],
    excludes: [],
    requires: [],
    //Special Attack modifiers never add to a Technique's level, but only one can be attached.
    learnLevelPlus: 0,
    rankLevelPlus: 0,
    season: 1,
    traits: {
      static: {
        skills: true
      },
      perLevel: {}
    },
    special: {
      strength: {},
      agility: {},
      spirit: {},
      mind: {},
      guts: {}
    }
  },
  'drain': {
    order: 'Special Attack',
    name: 'Drain',
    applies: ['damage', 'ultimate-damage'],
    excludes: [],
    requires: [],
    learnLevelPlus: 0,
    rankLevelPlus: 0,
    season: 1,
    traits: {
      static: {},
      perLevel: {}
    },
    special: {
      strength: {},
      agility: {},
      spirit: {},
      mind: {},
      guts: {}
    }
  },
  'persistent-effect': {
    order: 'Special Attack',
    name: 'Persistent Effect',
    applies: ['damage', 'ultimate-damage', 'boost', 'weaken'],
    excludes: [],
    requires: [],
    learnLevelPlus: 0,
    rankLevelPlus: 0,
    season: 1,
    traits: {
      static: {},
      perLevel: {}
    },
    special: {
      strength: {},
      agility: {},
      spirit: {},
      mind: {},
      guts: {}
    }
  },
  'piercing-strike': {
    order: 'Special Attack',
    name: 'Piercing Strike',
    applies: ['damage', 'ultimate-damage'],
    excludes: [],
    requires: [],
    learnLevelPlus: 0,
    rankLevelPlus: 0,
    season: 1,
    traits: {
      static: {},
      perLevel: {}
    },
    special: {
      strength: {},
      agility: {},
      spirit: {},
      mind: {},
      guts: {}
    }
  },
  'sapping-strike': {
    order: 'Special Attack',
    name: 'Sapping Strike',
    applies: ['damage', 'ultimate-damage'],
    excludes: [],
    requires: [],
    learnLevelPlus: 0,
    rankLevelPlus: 0,
    season: 1,
    traits: {
      static: {},
      perLevel: {}
    },
    special: {
      strength: {},
      agility: {},
      spirit: {},
      mind: {},
      guts: {}
    }
  },
  'accurate-strike': {
    order: 'Alteration',
    name: 'Accurate Strike',
    applies: ['damage', 'ultimate-damage', 'weaken'],
    excludes: [],
    requires: [],
    learnLevelPlus: 4,
    rankLevelPlus: 0,
    season: 1,
    traits: {
      static: {
        toHit: 2
      },
      perLevel: {}
    },
    special: {
      strength: {},
      agility: {
        //except for Weaken
        finalLevel: -1
      },
      spirit: {},
      mind: {},
      guts: {}
    }
  },
  'aura-strike': {
    order: 'Alteration',
    name: 'Aura Strike',
    applies: ['damage', 'ultimate-damage'],
    excludes: [],
    requires: [],
    learnLevelPlus: 1,
    rankLevelPlus: 0,
    season: 1,
    traits: {
      static: {},
      perLevel: {}
    },
    special: {
      strength: {},
      agility: {},
      spirit: {
        invalid: true
      },
      mind: {},
      guts: {}
    }
    //should be unavailable for Spirit-based techniques
  },
  'damage-shift': {
    order: 'Alteration',
    name: 'Damage Shift',
    applies: ['damage', 'ultimate-damage'],
    excludes: [],
    requires: [],
    learnLevelPlus: 1,
    rankLevelPlus: 0,
    season: 1,
    traits: {
      static: {},
      perLevel: {}
    },
    special: {
      strength: {},
      agility: {},
      spirit: {},
      mind: {},
      guts: {}
    }
  },
  'darkness-zone': {
    order: 'Alteration',
    name: 'Darkness Zone',
    applies: ['damage', 'ultimate-damage', 'weaken'],
    excludes: [],
    requires: [],
    learnLevelPlus: 2,
    rankLevelPlus: 0,
    season: 1,
    traits: {
      static: {},
      perLevel: {}
    },
    special: {
      strength: {},
      agility: {},
      spirit: {},
      mind: {},
      guts: {}
    }
  },
  'dash': {
    order: 'Alteration',
    name: 'Dash',
    applies: ['damage', 'ultimate-damage'],
    excludes: [],
    requires: [],
    learnLevelPlus: 1,
    rankLevelPlus: 1,
    season: 1,
    traits: {
      static: {},
      perLevel: {}
    },
    special: {
      strength: {},
      agility: {
        moveDistance: 1
      },
      spirit: {},
      mind: {},
      guts: {}
    }
  },
  'destruction': {
    order: 'Alteration',
    name: 'Destruction',
    applies: ['damage', 'ultimate-damage'],
    excludes: [],
    requires: [],
    learnLevelPlus: 1,
    rankLevelPlus: 1,
    season: 1,
    traits: {
      static: {},
      perLevel: {}
    },
    special: {
      strength: {},
      agility: {},
      spirit: {},
      mind: {},
      guts: {}
    }
  },
  'dexterous-strike': {
    order: 'Alteration',
    name: 'Dexterous Strike',
    applies: ['damage', 'ultimate-damage'],
    excludes: [],
    requires: [],
    learnLevelPlus: 1,
    rankLevelPlus: 0,
    season: 1,
    traits: {
      static: {},
      perLevel: {}
    },
    special: {
      strength: {},
      agility: {
        invalid: true
      },
      spirit: {},
      mind: {},
      guts: {}
    }
    //should be unavailable for Agility-based techniques
  },
  'drop-attack': {
    order: 'Alteration',
    name: 'Drop Attack',
    applies: ['damage', 'ultimate-damage'],
    excludes: [],
    requires: [],
    learnLevelPlus: 1,
    rankLevelPlus: 0,
    season: 1,
    traits: {
      static: {},
      perLevel: {}
    },
    special: {
      strength: {},
      agility: {},
      spirit: {},
      mind: {},
      guts: {}
    }
  },
  'high-barrier': {
    order: 'Alteration',
    name: 'High Barrier',
    applies: ['barrier'],
    excludes: [],
    requires: [],
    learnLevelPlus: 1,
    rankLevelPlus: 0,
    season: 1,
    traits: {
      static: {},
      perLevel: {}
    },
    special: {
      strength: {},
      agility: {},
      spirit: {},
      mind: {},
      guts: {}
    }
  },
  'immobilizing-strike': {
    order: 'Alteration',
    name: 'Immobilizing Strike',
    applies: ['damage', 'ultimate-damage', 'weaken'],
    excludes: [],
    requires: [],
    learnLevelPlus: 3,
    rankLevelPlus: 0,
    season: 1,
    traits: {
      static: {},
      perLevel: {}
    },
    special: {
      strength: {},
      agility: {},
      spirit: {},
      mind: {},
      guts: {}
    }
  },
  'intuitive-strike': {
    order: 'Alteration',
    name: 'Intuitive Strike',
    applies: ['damage', 'ultimate-damage'],
    excludes: [],
    requires: [],
    learnLevelPlus: 1,
    rankLevelPlus: 0,
    season: 1,
    traits: {
      static: {},
      perLevel: {}
    },
    special: {
      strength: {},
      agility: {},
      spirit: {},
      mind: {
        invalid: true
      },
      guts: {}
    }
    //should be unavailable for Mind-based techniques
  },
  'knock-down': {
    order: 'Alteration',
    name: 'Modifier',
    applies: ['damage', 'ultimate-damage'],
    excludes: [],
    requires: [],
    learnLevelPlus: 3,
    rankLevelPlus: 0,
    season: 1,
    traits: {
      static: {},
      perLevel: {}
    },
    special: {
      strength: {},
      agility: {},
      spirit: {},
      mind: {},
      guts: {}
    }
  },
  'launching-attack': {
    order: 'Alteration',
    name: 'Launching Attack',
    applies: ['damage', 'ultimate-damage'],
    excludes: [],
    requires: [],
    learnLevelPlus: 3,
    rankLevelPlus: 0,
    season: 2,
    traits: {
      static: {},
      perLevel: {}
    },
    special: {
      strength: {},
      agility: {},
      spirit: {},
      mind: {},
      guts: {}
    }
  },
  'light-zone': {
    order: 'Alteration',
    name: 'Modifier',
    applies: ['damage', 'ultimate-damage', 'weaken'],
    excludes: [],
    requires: [],
    learnLevelPlus: 1,
    rankLevelPlus: 0,
    season: 1,
    traits: {
      static: {},
      perLevel: {}
    },
    special: {
      strength: {},
      agility: {},
      spirit: {},
      mind: {},
      guts: {}
    }
  },
  'muscular-strike': {
    order: 'Alteration',
    name: 'Muscular Strike',
    applies: ['damage', 'ultimate-damage'],
    excludes: [],
    requires: [],
    learnLevelPlus: 1,
    rankLevelPlus: 0,
    season: 1,
    traits: {
      static: {},
      perLevel: {}
    },
    special: {
      strength: {
        invalid: true
      },
      agility: {},
      spirit: {},
      mind: {},
      guts: {}
    }
    //should be unavailable to Strength-based techniques
  },
  'phasing-attack': {
    order: 'Alteration',
    name: 'Phasing Attack',
    applies: ['damage', 'ultimate-damage'],
    excludes: [],
    requires: [],
    learnLevelPlus: 1,
    rankLevelPlus: 0,
    season: 2,
    traits: {
      static: {},
      perLevel: {}
    },
    special: {
      strength: {},
      agility: {},
      spirit: {},
      mind: {},
      guts: {}
    }
  },
  'quick-summon': {
    order: 'Alteration',
    name: 'Quick Summon',
    applies: ['summon'],
    excludes: [],
    requires: [],
    learnLevelPlus: 3,
    rankLevelPlus: 0,
    season: 2,
    traits: {
      static: {},
      perLevel: {}
    },
    special: {
      strength: {},
      agility: {},
      spirit: {},
      mind: {},
      guts: {}
    }
  },
  'ramming-attack': {
    order: 'Alteration',
    name: 'Ramming Attack',
    applies: ['damage', 'ultimate-damage'],
    excludes: ['ranged-technique', 'chain-attack', 'indirect-attack', 'line-attack', 'multiple-targets', 'rush-attack'],
    requires: [],
    learnLevelPlus: 2,
    rankLevelPlus: 0,
    season: 1,
    traits: {
      static: {},
      perLevel: {}
    },
    special: {
      strength: {
        finalLevel: -1
      },
      agility: {},
      spirit: {},
      mind: {},
      guts: {}
    }
    //should reduce the level increase by 1 for Strength-based techniques
  },
  'reposition': {
    order: 'Alteration',
    name: 'Reposition',
    applies: ['damage', 'ultimate-damage'],
    excludes: [],
    requires: [],
    learnLevelPlus: 1,
    rankLevelPlus: 1,
    season: 1,
    traits: {
      static: {},
      perLevel: {}
    },
    special: {
      strength: {
        moveDistance: 1
      },
      agility: {},
      spirit: {},
      mind: {},
      guts: {}
    }
  },
  'selective-barrier': {
    order: 'Alteration',
    name: 'Selective Barrier',
    applies: ['barrier'],
    excludes: [],
    requires: [],
    learnLevelPlus: 1,
    rankLevelPlus: 0,
    season: 2,
    traits: {
      static: {},
      perLevel: {}
    },
    special: {
      strength: {},
      agility: {},
      spirit: {},
      mind: {},
      guts: {}
    }
  },
  'terrain-disruption': {
    order: 'Alteration',
    name: 'Terrain Disruption',
    applies: ['damage', 'ultimate-damage'],
    excludes: [],
    requires: [],
    learnLevelPlus: 1,
    rankLevelPlus: 0,
    season: 2,
    traits: {
      static: {},
      perLevel: {}
    },
    special: {
      strength: {},
      agility: {},
      spirit: {},
      mind: {},
      guts: {}
    }
  },
  'terrain-repair': {
    order: 'Alteration',
    name: 'Terrain Repair',
    applies: ['damage', 'ultimate-damage', 'healing', 'boost'],
    excludes: [],
    requires: [],
    learnLevelPlus: 1,
    rankLevelPlus: 0,
    season: 2,
    traits: {
      static: {},
      perLevel: {}
    },
    special: {
      strength: {},
      agility: {},
      spirit: {},
      mind: {},
      guts: {}
    }
  },
  'throw': {
    order: 'Alteration',
    name: 'Modifier',
    applies: ['damage', 'ultimate-damage'],
    excludes: [],
    requires: ['reposition'],
    learnLevelPlus: 1,
    rankLevelPlus: 0,
    season: 1,
    traits: {
      static: {},
      perLevel: {}
    },
    special: {
      strength: {},
      agility: {},
      spirit: {},
      mind: {},
      guts: {}
    }
  },
  'violent-barrier': {
    order: 'Alteration',
    name: 'Modifier',
    applies: ['barrier'],
    excludes: [],
    requires: [],
    learnLevelPlus: 1,
    rankLevelPlus: 0,
    season: 1,
    traits: {
      static: {},
      perLevel: {}
    },
    special: {
      strength: {},
      agility: {},
      spirit: {},
      mind: {},
      guts: {}
    }
  }
}
