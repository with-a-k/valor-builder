import React, {Component} from 'react';
import SkillsView from './views/SkillsView';

class SkillsContainer extends Component {
  render() {
    return <SkillsView
              skills={this.props.skills}
              addSkill={this.props.addSkill}
              updateSkill={this.props.updateSkill}
              removeSkill={this.props.removeSkill}/>;
  }
}

export default SkillsContainer;
