import React, { PropTypes } from 'react';

const RadioButton = (props) => {
  return (
    <div>
      { props.label }
        <input
          name={props.name}
          value={props.value}
          checked={props.checked} 
          label={props.label}
          type="radio">
        </input>
      </div>
  )
}

RadioButton.propTypes = {
  name: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  onChange: PropTypes.func
}

export default RadioButton