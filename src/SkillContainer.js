import React, {Component} from 'react';
import SkillView from './views/SkillView';
import Skills from './constants/SkillsConstants';

class SkillContainer extends Component {
  remove() {
    this.props.removeSkill(this.props.id);
  }

  update(data) {
    this.props.updateSkill(data);
  }

  changeSkill(newSkill) {
    if (newSkill) {
      this.update(Object.assign(this.props.skill,
        {selectValue: newSkill,
         id: this.props.id,
         name: this.props.skill.name,
         cost: Skills[newSkill.value].learn_sp}));
    } else {
      this.update({
        selectValue: '',
        id: this.props.id,
        name: '',
        cost: 0
      });
    }
  }

  //The Free SP prop is the sum of the SP used for each skill.
  //Thus, here I add the cost of this skill back to Free SP for the purposes of replacing the skill.
  //This determines what skills this one can be replaced with.
  retrainSkillPoints() {
    return this.props.freeSkillPoints + this.props.skill.cost;
  }

  //The Flaw Points prop is the total negative SP cost of Flaws.
  //Thus, here I subtract the cost of this skill back to Flaw Points for the purposes of retraining it.
  //However, non-Flaws don't contribute SP to this cap (obviously).
  flawPoints() {
    return this.props.flawPoints - (this.props.skill.cost < 0 ? this.props.skill.cost : 0);
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
              season={this.props.season}
              retrainSkillPoints={this.retrainSkillPoints()}
              flawCap={this.props.flawCap}
              freeSkillPoints={this.props.freeSkillPoints}
              flawPoints={this.flawPoints()}/>;
  }
}

export default SkillContainer;
