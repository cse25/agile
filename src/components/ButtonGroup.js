import React, { Component } from 'react';
import CheckButton from './CheckButton';
import RadioButton from './RadioButton';

class ButtonGroup extends Component {
  constructor(props) {
    super(props);

    this.state = { selectedRadio: null, title: '' }
    this.handleRadioToggle = this.handleRadioToggle.bind(this); 
  }

  componentDidMount() {
    this.setState({ title: this.props.groupLabel })
  }

  handleRadioToggle(event) {
    console.log(event.target.value);
    this.setState({ selectedRadio: event.target.value });
  }

  renderButtons() {
    if (this.props.multiple) {
      if (this.props.implyAll) {
        return [
          <CheckButton label={'all'} key="0" disabled checked />, 
            this.props.options.map((item) => {
              return (
                <CheckButton
                  key={item.name}
                  name={item.name}
                  value={item.value}
                  label={item.label}
                  checked={true}
                  disabled={true}
                />
              )
            })
        ]
      } else if (this.props.implyNone) {
        return [
          <CheckButton label={'none'} key="0" disabled checked />, 
            this.props.options.map((item) => {
              return (
                <CheckButton
                  key={item.name}
                  name={item.name}
                  value={item.value}
                  label={item.label}
                  checked={false}
                  disabled={true}
                />
              )
            })
        ]
      } else {
        return this.props.options.map((item) => {
          return (
            <CheckButton
              key={item.name}
              name={item.name}
              value={item.value}
              checked={item.checked}
              label={item.label}
              onChange={item.onChange}
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
            onChange={this.handleRadioToggle}
          />
        )
      })
    }
  }
  
  render() {
    return (
      <div>
        <h2>{this.state.title}</h2>
        {this.renderButtons()}
      </div>
    )
  }
}

export default ButtonGroup;
