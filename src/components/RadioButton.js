import React from 'react';

const RadioButton = (props) => {
  return (
    <div>
      { props.label }
        <input
          type="radio"
          name={props.name}
          value={props.value}
          checked={props.checked} 
          label={props.label}>
        </input>
      </div>
  )
}

export default RadioButton;
