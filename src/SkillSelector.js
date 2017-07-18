import React, { Component } from 'react';
import VirtualizedSelect from 'react-virtualized-select';
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

  render() {
    //determine what to include/exclude based on those props
    var options = [];
    Object.values(Skills).forEach(function(skill) {
      if (this.skillHasAnIncludeTag(skill) &&
          this.skillHasNoExcludeTags(skill) &&
          this.skillMeetsSeasonRequirement(skill) &&
          this.skillCostsLessSPThanIsAvailable(skill) &&
          this.skillFitsWithinFlawCap(skill)) {
        options.push({label: skill.name, value: skill.selectValue});
      }
    }, this);

    return <VirtualizedSelect
              options={options}
              onChange={this.props.changeSkill}
              value={this.props.value}/>
  }
}

export default SkillSelector;
