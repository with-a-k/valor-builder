import React, {Component} from 'react';
import SkillView from './views/SkillView';

class SkillContainer extends Component {
  remove() {
    this.props.removeSkill(this.props.id);
  }

  render() {
    return <SkillView
              skillId = {this.props.id}
              skillName = {this.props.skill.name}
              skillCost = {this.props.skill.cost}
              skillLevel = {this.props.skill.level}
              remove = {this.remove.bind(this)}/>;
  }
}

export default SkillContainer;
