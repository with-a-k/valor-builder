import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TechniqueView from './views/TechniqueView';
import Cores from './constants/TechniqueCoreConstants';

class TechniqueContainer extends Component {
  constructor() {
    super();
    this.state = {
      core: {
        name: "",
        skills: false
      },
      nextSkillId: 1,
      nextModId: 1,
      nextLimitId: 1,
    };
  }

  coreOptions() {
    return Object.keys(Cores).map(function(key) {
      return {
        label: Cores[key].name,
        value: key
      }
    });
  }

  remove() {
    this.props.removeTechnique(this.props.id);
  }

  update(data) {
    this.props.updateTechnique(data);
  }

  changeName(event) {
    const newName = event.target.value;
    let data = Object.assign(this.props.technique,
      {
        name: newName
      });
    this.update(data);
  }

  changeCore(event) {
    const newCore = event.target.value;
    this.setState({core: Cores[newCore]});
    let data = Object.assign(this.props.technique,
      {
        core: {
          name: newCore,
          power: 0
        },
        level: 0,
        skills: []
      });
    this.update(data);
  }

  changePower(event) {
    const newPower = parseInt(event.target.value, 10);
    if (!this.powerIsValid(newPower)) return;
    let data = this.props.technique;
    data.core = Object.assign(data.core, {
      power: newPower
    });
    data.level = this.calculateLevel(newPower);
    this.update(data);
  }

  powerIsValid(power) {
    return power >= 0 && this.calculateLevel(power) <= this.props.techLevelCap &&
      (this.props.freeTp > 0 || power < this.props.technique.core.power);
  }

  //Modifiers also contribute to level, but they're for Later
  calculateLevel(power) {
    return power;
  }

  excludeTypes() {
    //Challenge and Character skills should never be on Techniques.
    let tags = ['Character', 'Challenge'];
    //Positive skills shouldn't appear for Weaken techniques.
    if (this.state.core.name === "Weaken") {
      tags.push('Positive');
    } else {
      //but Flaws shouldn't appear for other kinds of Techniques.
      //(Domain will skip this once it's finalized; to my understanding it can use both.)
      tags.push('Flaw');
    }
    return tags;
  }

  maxSp() {
    if (this.spMap[this.state.core.name]) {
      return this.props.technique.core.power * this.spMap[this.state.core.name];
    } else {
      return 0;
    }
  }

  freeSkillPoints() {
    return this.maxSp() - this.props.technique.skills.reduce(function(total, skill) {
      return total + skill.cost;
    }, 0);
  }

  flawPoints() {
    return this.props.technique.skills.filter((skill) => skill.cost < 0).reduce((total, skill) => total + skill.cost, 0);
  }

  addSkill() {
    var data = this.props.technique;
    data.skills.push({
      id: this.state.nextSkillId,
      selectValue: {
        label: '',
        value: ''
      },
      cost: 0,
      level: 0,
      bonus: {}
    });
    this.setState({nextSkillId: this.state.nextSkillId + 1});
    this.update(data);
  }

  updateSkill(new_data) {
    var data = this.props.technique;
    data.skills = data.skills.map(function(skill) {
      //if the key of the new data is the same
      if (skill.id === new_data.id) {
        return new_data;
      } else {
        return skill;
      }
    });
    this.update(data);
  }

  removeSkill(id) {
    var data = this.props.technique;
    data.skills = this.props.technique.skills.filter(function(skill) {
      return skill.id !== id;
    });
    this.update(data);
  }

  addModifier() {
    var data = this.props.technique;
    data.modifiers.push({
      id: this.state.nextModId,
    });
    this.setState({nextModId: this.state.nextModId + 1});
    this.update(data);
  }

  updateModifier(new_data) {
    var data = this.props.technique;
    data.modifiers = data.modifiers.map(function(mod) {
      if (mod.id === new_data.id) {
        return new_data;
      } else {
        return mod;
      }
    });
    this.update(data);
  }

  removeModifier(id) {
    var data = this.props.technique;
    data.modifiers = this.props.technique.modifiers.filter(function(mod) {
      return mod.id !== id;
    });
    this.update(data);
  }

  render () {
    return (
      <TechniqueView
        technique = {this.props.technique}
        remove = {this.remove.bind(this)}
        changeName = {this.changeName.bind(this)}
        changeCore = {this.changeCore.bind(this)}
        changePower = {this.changePower.bind(this)}
        coreOptions = {this.coreOptions()}
        chooseSkills = {this.state.core.skills || false}
        is_npc = {this.props.is_npc}
        season = {this.props.season}
        exclude = {this.excludeTypes()}
        maxSp = {this.maxSp()}
        freeSp = {this.freeSkillPoints()}
        flawPoints = {this.flawPoints()}
        characterLevel = {this.props.characterLevel}
        addSkill = {this.addSkill.bind(this)}
        updateSkill = {this.updateSkill.bind(this)}
        removeSkill = {this.removeSkill.bind(this)}/>
    );
  }
}

TechniqueContainer.prototype.coreNames = Object.values(Cores).map((core) => core.name);

TechniqueContainer.prototype.spMap = {
  "Boost Core": 2,
  "Weaken Core": -1,
  "Transformation Core": 2
};

TechniqueContainer.propTypes = {
  technique: PropTypes.object,
  removeTechnique: PropTypes.func.isRequired,
  updateTechnique: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  techLevelCap: PropTypes.number.isRequired,
  freeTp: PropTypes.number.isRequired,
  is_npc: PropTypes.bool.isRequired,
  season: PropTypes.number.isRequired,
  characterLevel: PropTypes.number.isRequired
}

export default TechniqueContainer;
