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
              updateTechnique={props.updateTechnique}/>
  });

  return (
    <div>
      <VBButton
        buttonAction={props.addTechnique}
        buttonName="Add Technique"/>
      <VBLabeledValue
        labeledName="Available TP"
        labeledValue={props.tp}/>
      {techniquesDisplay}
    </div>
  )
};

TechniquesView.propTypes = {
  techniques: PropTypes.array,
  tp: PropTypes.number,
  addTechnique: PropTypes.func.isRequired,
  removeTechnique: PropTypes.func.isRequired,
  updateTechnique: PropTypes.func.isRequired
}

export default TechniquesView;
