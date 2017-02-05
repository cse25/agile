import React, { Component } from 'react';
import CheckBox from './CheckBox';
import RadioButton from './RadioButton';

class ButtonGroup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      groupTouched: false,
      selectedRadio: null
    }

    this.toggleButton = this.toggleButton.bind(this);
  }

  componentWillMount() {
    this.props.options.map((item) => {
      if (this.props.implyAll) {
        this.setState({ [item.value]: true });
      } else if (this.props.implyNone) {
        this.setState({ [item.value]: false });
      } else {
        this.setState({ [item.value]: item.checked });
      }
    })
  }

  toggleButton(event) {
    // Toggle RadioButton
    if (!this.props.multiple) {
      this.setState({ selectedRadio: event.target.value});
    }
    // Toggle CheckBox
    const checkbox = event.target.value;
    this.setState({ groupTouched: true });
    if (this.state[checkbox]) {
      this.setState({ [checkbox]: false });
    } else {
      this.setState({ [checkbox]: true });
    }
  }

  renderGroup() {
    // CheckButton
    if (this.props.multiple) {
      // All Checked
      if (this.props.implyAll) {
        return [
        <CheckBox key={0} label={"all"} checked={!this.state.groupTouched} />,
          this.props.options.map((item) => {
            return (
              <CheckBox
                key={item.name}
                name={item.name}
                value={item.value}
                checked={this.state[item.value]}
                label={item.label}
              />
            )
          })
        ]
        // None Checked
      } else if (this.props.implyNone) {
        return [
        <CheckBox key={0} label={"none"} checked={!this.state.groupTouched} />,
          this.props.options.map((item) => {
            return (
              <CheckBox
                key={item.name}
                name={item.name}
                value={item.value}
                checked={this.state[item.value]}
                label={item.label}
              />
            )
          })
        ]
        // CheckButtons - Specified in Options 
      } else {
        return this.props.options.map((item) => {
          return (
            <CheckBox
              key={item.name}
              name={item.name}
              value={item.value}
              checked={this.state[item.value]}
              label={item.label}
            />
          )
        })
      }
    } 
    if (!this.props.multiple) {
      return this.props.options.map((item) => {
        return (
          <RadioButton
            key={item.name}
            name={item.name}
            value={item.value}
            checked={this.state.selectedRadio === item.value}
            label={item.label}
          />
        )
      })
    }
  }

  render() {
    return (
      <div
        onChange={this.toggleButton}>
        <h2>{this.props.groupLabel}</h2>
        {this.renderGroup()}
      </div>
    )
  }
}

export default ButtonGroup;
