import React, { Component } from 'react';

class CheckButton extends Component {
  constructor(props) {
    super(props);

    this.state = { checked: this.props.checked }   
    this.onToggle = this.onToggle.bind(this); 
  }

  onToggle() {
    console.log(!this.state.checked)
    this.setState({ checked: !this.state.checked })
  }

  render() {
    return (
      <div>
        { this.props.label }
        <input
          name={this.props.name}
          value={this.props.value}
          checked={this.state.checked} 
          label={this.props.label}
          onChange={this.onToggle}
          type="checkbox"
          disabled={this.props.disabled}>
        </input>
      </div>
    )
  }  
};

export default CheckButton;
