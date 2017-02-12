import React from 'react';

const CheckBox = (props) => {
  return (
    <div>
      { props.label }
        <input
          type="checkbox"
          checked={props.checked}
          label={props.label}
          name={props.name}
          value={props.value}
        />
    </div>
  )
}

export default CheckBox;
