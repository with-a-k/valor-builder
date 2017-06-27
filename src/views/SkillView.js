import React from 'react';
import PropTypes from 'prop-types';
import VBButton from './VBButton';

//An FSC that views a single Skill. This is a "high-level" FSC which
//has a number of children.
const SkillView = (props) => {
  return (
    <div>
      This is a Skill view. It is unfinished.
      <VBButton
        buttonAction={props.remove}
        buttonName="Remove this Skill"/>
    </div>
  )
}

SkillView.propTypes = {

};

export default SkillView;
