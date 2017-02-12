import React from 'react';

const RadioButton = (props) => {
  return (
    <div>
      { props.label }
        <input
          type="radio"
          checked={props.checked} 
          label={props.label}
          name={props.name}
          value={props.value}
        />
      </div>
  )
}

export default RadioButton;
