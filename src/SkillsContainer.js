import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SkillsView from './views/SkillsView';
import Skills from './constants/SkillsConstants';

class SkillsContainer extends Component {
  determineIncludes() {

  }

  determineExcludes() {
    var propSkillNames = this.props.skills.map(function(skill){
      return skill.selectValue.label;
    });
    var propSkillTags = new Set(this.props.skills.filter(function(skill) {
      return skill.selectValue.value.length > 0;
    }).reduce(function(tagCollection, skill){
      return tagCollection.concat(Skills[skill.selectValue.value].tags);
    }, []));
    var excludes = this.props.excludes;
    if (!this.props.is_npc) {
      excludes.push('NPC');
    }
    excludes = this.excludeByPrerequisites(excludes, propSkillNames);
    excludes = this.excludeByOpposites(excludes, propSkillTags);
    return excludes;
  }

  //Add tags to the excludes array based on the names of the parent's skills.
  excludeByPrerequisites(excludes, names) {
    if (!names.includes('Companion')) {
      excludes.push('Companion');
    }
    if (!names.includes('Jump')) {
      excludes.push('Jump');
    }
    if (!names.includes('Clone')) {
      excludes.push('Clone');
    }
    if (!names.includes('Malevolent Entity')) {
      excludes.push('Malevolent Entity');
    }
    if (!names.includes('Attack Node') &&
        !names.includes('Refraction Point') &&
        !names.includes('Portal')) {
      excludes.push('Creation');
    }
    if (!names.includes('Area Shield')) {
      excludes.push('Area Shield');
    }
    if (!names.includes('Line Deflect')) {
      excludes.push('Line Deflect');
    }
    if (!names.includes('Counterattack')) {
      excludes.push('Counterattack');
    }
    if (!names.includes('Clash')) {
      excludes.push('Clash');
    }
    if (!names.includes('Swift Step')) {
      excludes.push('Swift Step');
    }
    if (!names.includes('Cover')) {
      excludes.push('Cover');
    }
    if (!names.includes('Interrupt Attack')) {
      excludes.push('Interrupt Attack');
    }
    if (!names.includes('Mount')) {
      excludes.push('Mount');
    }
    if (!names.includes('Protect Master')) {
      excludes.push('Protect Master');
    }
    if (!names.includes('Toss')) {
      excludes.push('Toss');
    }
    return excludes;
  }

  excludeByOpposites(excludes, tags) {
    const excluderTags = ['MaxHealth', 'MaxStamina', 'PhysicalAttack', 'EnergyAttack',
                          'Defense', 'Resistance', 'Movement', 'Initiative',
                          'StartingValor', 'Knockout', 'Size', 'DamageIncrement'];
    excluderTags.forEach(function(tag) {
      if (tags.has(tag)) {
        excludes.push(tag);
      }
    })
    return excludes;
  }

  render() {
    return <SkillsView
              skills={this.props.skills}
              addSkill={this.props.addSkill}
              updateSkill={this.props.updateSkill}
              removeSkill={this.props.removeSkill}
              is_npc={this.props.is_npc}
              season={this.props.season}
              exclude={this.determineExcludes()}
              flawCap = {this.props.flawCap}
              freeSkillPoints={this.props.freeSkillPoints}
              flawPoints={this.props.flawPoints}
              skillNames={this.props.skills.map((skill) => skill.selectValue.value)}
              level={this.props.level}/>;
  }
}

SkillsContainer.propTypes = {
  skills: PropTypes.array,
  is_npc: PropTypes.bool.isRequired,
  addSkill: PropTypes.func.isRequired,
  updateSkill: PropTypes.func.isRequired,
  removeSkill: PropTypes.func.isRequired,
  season: PropTypes.number.isRequired,
  flawCap: PropTypes.number.isRequired,
  freeSkillPoints: PropTypes.number.isRequired,
  flawPoints: PropTypes.number.isRequired,
  level: PropTypes.number.isRequired,
  excludes: PropTypes.arrayOf(PropTypes.string),
}

export default SkillsContainer;
