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

  render () {
    return (
      <TechniqueView
        technique = {this.props.technique}
        remove = {this.remove.bind(this)}
        changeName = {this.changeName.bind(this)}/>
    );
  }
}

TechniqueContainer.propTypes = {
  technique: PropTypes.object,
  removeTechnique: PropTypes.func.isRequired,
  updateTechnique: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired
}

export default TechniqueContainer;
