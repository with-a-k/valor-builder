import React from 'react';
import PropTypes from 'prop-types';
import VBButton from './VBButton';
import VBLabeledValue from './VBLabeledValue';
import TechniqueContainer from '../TechniqueContainer';

const TechniquesView = (props) => {
  var techniquesDisplay = props.techniques.map(function (technique) {
    return <TechniqueContainer
              key={technique.id}
              id={technique.id}
              technique={technique}
              removeTechnique={props.removeTechnique}
              updateTechnique={props.updateTechnique}
              techLevelCap={props.techLevelCap}
              freeTp={props.freeTp}
              is_npc={props.is_npc}
              season={props.season}/>
  });

  return (
    <div>
      <VBButton
        buttonAction={props.addTechnique}
        buttonName="Add Technique"/>
      <VBLabeledValue
        labeledName="Available TP"
        labeledValue={props.freeTp}/>
      {techniquesDisplay}
    </div>
  )
};

TechniquesView.propTypes = {
  techniques: PropTypes.array,
  freeTp: PropTypes.number,
  addTechnique: PropTypes.func.isRequired,
  removeTechnique: PropTypes.func.isRequired,
  updateTechnique: PropTypes.func.isRequired,
  techLevelCap: PropTypes.number.isRequired,
  is_npc: PropTypes.bool.isRequired,
  season: PropTypes.number.isRequired
}

export default TechniquesView;
