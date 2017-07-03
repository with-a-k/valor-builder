import React, {Component} from 'react';
import SkillsView from './views/SkillsView';

class SkillsContainer extends Component {
  determineExcludes() {
    var excludes = ['Boost', 'Weaken'];
    if (!this.props.is_npc) {
      excludes.push('NPC');
    }
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
              freeSkillPoints={this.props.freeSkillPoints}/>;
  }
}

export default SkillsContainer;
