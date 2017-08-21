import React, { Component } from 'react';
import VirtualizedSelect from 'react-virtualized-select';
import PropTypes from 'prop-types';
import Skills from './constants/SkillsConstants';

import 'react-select/dist/react-select.css';
import 'react-virtualized/styles.css';
import 'react-virtualized-select/styles.css';

class SkillSelector extends Component {
  //does the skill have any tag in the include list?
  skillHasAnIncludeTag(skill) {
    return skill.tags.some(function(tag) {
      return this.props.includeTags.includes(tag);
    }, this);
  }

  //does it have NO tags in the exclude list?
  skillHasNoExcludeTags(skill) {
    return !skill.tags.some(function(tag) {
      return this.props.excludeTags.includes(tag);
    }, this);
  }

  //is the character's season equal to or higher than the skill's?
  //(or is the character an NPC?)
  skillMeetsSeasonRequirement(skill) {
    return this.props.is_npc || this.props.season >= skill.season;
  }

  //does the skill cost less SP than is available to the player?
  skillCostsLessSPThanIsAvailable(skill) {
    return skill.learn_sp <= this.props.retrainSkillPoints;
  }

  //does the skill award less SP than it would take to go over the Flaw cap?
  skillFitsWithinFlawCap(skill) {
    return skill.learn_sp + this.props.flawPoints >= this.props.flawCap;
  }

  skillIsRepeatableOrNotAlreadyOwned(skill) {
    return skill.tags.includes('Repeatable') ||
            !this.props.ownedSkillNames.includes(skill.selectValue);
  }

  render() {
    //determine what to include/exclude based on those props
    var options = [];
    Object.values(Skills).forEach(function(skill) {
      if (this.skillHasAnIncludeTag(skill) &&
          this.skillHasNoExcludeTags(skill) &&
          this.skillMeetsSeasonRequirement(skill) &&
          this.skillCostsLessSPThanIsAvailable(skill) &&
          this.skillFitsWithinFlawCap(skill) &&
          this.skillIsRepeatableOrNotAlreadyOwned(skill)) {
        options.push({label: skill.name, value: skill.selectValue});
      }
    }, this);

    return <VirtualizedSelect
              options={options}
              onChange={this.props.changeSkill}
              value={this.props.value}/>
  }
}

SkillSelector.propTypes = {
  changeSkill: PropTypes.func.isRequired,
  excludeTags: PropTypes.arrayOf(PropTypes.string),
  flawCap: PropTypes.number.isRequired,
  flawPoints: PropTypes.number.isRequired,
  includeTags: PropTypes.arrayOf(PropTypes.string),
  is_npc: PropTypes.bool.isRequired,
  ownedSkillNames: PropTypes.arrayOf(PropTypes.string),
  retrainSkillPoints: PropTypes.number.isRequired,
  season: PropTypes.number.isRequired,
  value: PropTypes.object.isRequired,
}

export default SkillSelector;
