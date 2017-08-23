import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TechniqueView from './views/TechniqueView';
import Cores from './constants/TechniqueCoreConstants';

class TechniqueContainer extends Component {
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
        level: 0
      });
    this.update(data);
  }

  changePower(event) {
    const newPower = parseInt(event.target.value, 10);
    if (!this.powerIsValid(newPower)) return;
    let data = Object.assign(this.props.technique,
      {
        core: {
          power: newPower
        },
        level: this.calculateLevel(newPower)
      });
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

  render () {
    return (
      <TechniqueView
        technique = {this.props.technique}
        remove = {this.remove.bind(this)}
        changeName = {this.changeName.bind(this)}
        changeCore = {this.changeCore.bind(this)}
        changePower = {this.changePower.bind(this)}
        coreNames = {this.coreNames}/>
    );
  }
}

TechniqueContainer.prototype.coreNames = Object.values(Cores).map((core) => core.name);

TechniqueContainer.propTypes = {
  technique: PropTypes.object,
  removeTechnique: PropTypes.func.isRequired,
  updateTechnique: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  techLevelCap: PropTypes.number.isRequired,
  freeTp: PropTypes.number.isRequired
}

export default TechniqueContainer;
