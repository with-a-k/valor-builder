import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SkillView from './views/SkillView';
import Skills from './constants/SkillsConstants';

class SkillContainer extends Component {
  constructor() {
    super()
    this.state = {
      skill: {}
    }
  }

  remove() {
    this.props.removeSkill(this.props.id);
  }

  update(data) {
    this.props.updateSkill(data);
  }

  changeSkill(newSkill) {
    let data = {};
    if (!(newSkill instanceof Array) && newSkill !== null) {
      const nextSkill = Skills[newSkill.value];
      this.setState({skill: nextSkill});
      data = Object.assign(this.props.skill,
        {selectValue: newSkill,
         id: this.props.id,
         cost: nextSkill.learn_sp,
         level: 1});
      if (nextSkill.bonus) {
        data['bonus'][nextSkill.bonus] = nextSkill.learn_value;
      } else {
        data['bonus'] = {};
      }
    } else {
      data = {
        selectValue: '',
        id: this.props.id,
        name: '',
        cost: 0
      };
      this.setState({skill: {}});
    }
    this.update(data);
  }

  changeSkillLevel(event) {
    const newLevel = parseInt(event.target.value, 10);
    const bonusCategory = this.state.skill.bonus || false;
    if (this.validSkillLevel(newLevel)) {
      let data = Object.assign(this.props.skill,
        {
          level: newLevel,
          cost: this.state.skill.learn_sp + (this.state.skill.level_sp * (newLevel - 1))
        });
      if (bonusCategory) {
        data['bonus'][bonusCategory] = this.state.skill.learn_value +
          ((newLevel - 1) * this.state.skill.level_value);
      }
      this.update(data);
    }
  }

  validSkillLevel(level) {
    return 0 < level && level <= this.maxSkillLevel() &&
      this.state.skill.learn_sp + (this.state.skill.level_sp * (level - 1)) < this.retrainSkillPoints();
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

  maxSkillLevel() {
    switch(Skills[this.props.skill.selectValue.value].level_speed) {
      case 'Fixed':
        return 1;
      case 'Slow':
        return Math.floor((this.props.characterLevel - 1) / 5) + 1;
      case 'Fast':
        return Math.floor((this.props.characterLevel - 1) / 3) + 1;
      default:
        throw new Error(`${this.props.skill.selectValue.name} is missing a level speed.`);
    }
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
              changeSkillLevel = {this.changeSkillLevel.bind(this)}
              includeTags = {['Flaw', 'Passive', 'Active', 'Situational', 'Challenge', 'Reaction', 'Overdrive']}
              excludeTags = {this.props.exclude}
              is_npc={this.props.is_npc}
              season={this.props.season}
              retrainSkillPoints={this.retrainSkillPoints()}
              flawCap={this.props.flawCap}
              freeSkillPoints={this.props.freeSkillPoints}
              flawPoints={this.flawPoints()}
              skillNames={this.props.skillNames}/>;
  }
}

SkillContainer.propTypes = {
  id: PropTypes.number.isRequired,
  skill: PropTypes.shape({
    selectValue: PropTypes.shape({
      name: PropTypes.string,
      value: PropTypes.string,
    }),
    cost: PropTypes.number,
    name: PropTypes.string,
    level: PropTypes.number,
  }),
  updateSkill: PropTypes.func.isRequired,
  removeSkill: PropTypes.func.isRequired,
  freeSkillPoints: PropTypes.number,
  skillNames: PropTypes.array,
  flawCap: PropTypes.number,
  flawPoints: PropTypes.number,
  characterLevel: PropTypes.number.isRequired,
  season: PropTypes.number.isRequired,
  exclude: PropTypes.array,
  is_npc: PropTypes.bool.isRequired
}

export default SkillContainer;
