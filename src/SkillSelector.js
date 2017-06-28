import React, { Component } from 'react';
import VirtualizedSelect from 'react-virtualized-select';
import Skills from './constants/SkillsConstants';

import 'react-select/dist/react-select.css';
import 'react-virtualized/styles.css';
import 'react-virtualized-select/styles.css';

class SkillSelector extends Component {
  skillHasAnIncludeTag(skill) {
    return skill.tags.some(function(tag) {
      return this.props.includeTags.includes(tag);
    }, this);
  }

  skillHasNoExcludeTags(skill) {
    return !skill.tags.some(function(tag) {
      return this.props.excludeTags.includes(tag);
    }, this);
  }

  skillMeetsSeasonRequirement(skill) {
    return this.props.is_npc || this.props.season >= skill.season;
  }

  skillCostsLessThanFreeSP(skill) {
    return this.props.freeSp < skill.learn_sp;
  }

  render() {
    //determine what to include/exclude based on those props
    var options = [];
    Object.values(Skills).forEach(function(skill) {
      //first include all skills from included tags that can be taken at a certain season
      if (this.skillHasAnIncludeTag(skill) &&
          this.skillHasNoExcludeTags(skill) &&
          this.skillMeetsSeasonRequirement(skill)) {
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
