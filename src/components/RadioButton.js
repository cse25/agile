import React from 'react';

const RadioButton = (props) => {
  return (
    <div>
      { props.label }
        <input
          name={props.name}
          value={props.value}
          checked={props.checked} 
          label={props.label}
          onChange={props.onChange}
          type="radio">
        </input>
      </div>
  )
}

export default RadioButton
