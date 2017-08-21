import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TechniquesView from './views/TechniquesView';

class TechniquesContainer extends Component {
  render () {
    return <TechniquesView
              techniques={this.props.techniques}
              addTechnique={this.props.addTechnique}
              removeTechnique={this.props.removeTechnique}
              updateTechnique={this.props.updateTechnique}
              is_npc={this.props.is_npc}
              season={this.props.season}
              tp={this.props.tp}/>;
  }
}

TechniquesContainer.propTypes = {
  season: PropTypes.number.isRequired,
  is_npc: PropTypes.bool.isRequired,
  addTechnique: PropTypes.func.isRequired,
  removeTechnique: PropTypes.func.isRequired,
  updateTechnique: PropTypes.func.isRequired,
  techniques: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string,
    level: PropTypes.number.isRequired,
    attribute: PropTypes.string,
    core: PropTypes.object,
    modifiers: PropTypes.array,
    limits: PropTypes.array,
    cost: PropTypes.number
  })),
  tp: PropTypes.number.isRequired
}

export default TechniquesContainer;
