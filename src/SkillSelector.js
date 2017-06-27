import React, { Component } from 'react';
import VirtualizedSelect from 'react-virtualized-select';
import Skills from './constants/SkillsConstants';

import 'react-select/dist/react-select.css';
import 'react-virtualized/styles.css';
import 'react-virtualized-select/styles.css';

class SkillSelector extends Component {
  constructor (props) = {
    super(props)
  }

  render() {
    //determine what to include/exclude based on those props
    var options = [];
    Object.keys(Skills).forEach(function(skill) {
      //first include all skills from included tags
      if (skill.tags.some(function(tag) {
        return this.props.includeTags.includes(tag);
      })) {
        options.push({label: skill.name, value: skill.value});
      }
    });
    //now remove all the skills with any exclude tags and skills
    //tagged as requiring the skill which the selector is currently set to
    //(this prevents weird detachments, hopefully)
    options.filter(function(option) {
      return !(Skills[option.value].tags.some(function(tag) {
        return this.props.excludeTags.includes(tag) || this.props.value === tag;
      }));
    });

    return <VirtualizedSelect
              options={options}
              onChange={this.props.changeSkill}
              value={this.props.value}/>
  }
}

export default SkillSelector;
