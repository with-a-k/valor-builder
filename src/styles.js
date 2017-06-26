/*
Style constants.
Positioning attributes are not included in these constants, as by design the view components are meant to be reusable.
(One exception is CharacterAttributesView.)
*/
module.exports = {
  'AttributeInput': {
    'width': '120px'
  },
  'AttributeView': {

  },
  'CharacterAttributesView': {
    'display': 'grid',
    'gridTemplateColumns': "repeat(5, '1fr')",
    'gridTemplateRows': "repeat(6, '75px')",
    'gridTemplateAreas': `
      ". level type npc ."
      "strength agility spirit mind guts"
      "muscle dexterity aura intuition resolve"
      "strength_attack agility_attack spirit_attack mind_attack damage_increment"
      "maxhp hpincrement criticalhp defense resistance"
      "maxst stincrement movement maxsp maxtp"
    `,
    'gridColumnGap': '16px',
    'gridRowGap': '16px',
    'alignItems': 'center',
    'alignContent': 'start',
    'justifyItems': 'center',
    'justifyContent': 'center'
  },
  'SelectorView': {

  },
  'SkillsView': {

  },
  'SkillView': {

  },
  'VBCheckbox': {

  },
  'VBTextfield': {

  }
}
