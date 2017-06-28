import React, {Component} from 'react';
import SkillView from './views/SkillView';

class SkillContainer extends Component {
  remove() {
    this.props.removeSkill(this.props.id);
  }

  update(data) {
    this.props.updateSkill(data);
  }

  changeSkill(newSkill) {
    this.update(Object.assign(this.props.skill,
      {selectValue: newSkill,
       id: this.props.id,
       name: this.props.skill.name}));
  }

  render() {
    return <SkillView
              skillId = {this.props.id}
              skillName = {this.props.skill.name}
              skillCost = {this.props.skill.cost}
              skillLevel = {this.props.skill.level}
              skillSelectValue = {this.props.skill.selectValue}
              remove = {this.remove.bind(this)}
              changeSkill = {this.changeSkill.bind(this)}
              includeTags = {['Flaw', 'Passive', 'Active', 'Situational', 'Challenge', 'Reaction', 'Overdrive']}
              excludeTags = {this.props.exclude}
              is_npc={this.props.is_npc}
              season={this.props.season}/>;
  }
}

export default SkillContainer;
