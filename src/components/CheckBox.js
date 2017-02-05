import React, { Component } from 'react';

class CheckBox extends Component {
  constructor(props) {
    super(props);

    this.state = { checked: props.checked || false }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.setState({ checked: !this.state.checked });
  }

  render() {
    return (
      <div>
        { this.props.label }
        <input
          type="checkbox"
          checked={this.props.checked}
          label={this.props.label}
          name={this.props.name} 
          value={this.props.value}
          onChange={this.handleChange}
        />
      </div>
    )
  }
}

export default CheckBox;
