import React, { Component } from 'react';
import ButtonGroup from './components/ButtonGroup';

class App extends Component {
  myFunc() {
    console.log('hello');
  }

  render() {
    return (
      <div>
        <ButtonGroup
          options={
            [
              { 
                name: 'checkbox 1',
                value: 'checkbox 1',
                checked: true,
                label: 'checkbox 1'
              },
              { 
                name: 'checkbox 2',
                value: 'checkbox 2',
                checked: false,
                label: 'checkbox 2'
              },
              { 
                name: 'checkbox 3',
                value: 'checkbox 3',
                checked: true,
                label: 'checkbox 3'
              }
            ]
          }
          multiple={true}
          groupName={'mixed checkboxes'}
          groupLabel={'mixed checkboxes'}
          passedFunc={this.myFunc}
        />
        <ButtonGroup
          options={
            [
              { 
                name: 'checkbox 1',
                value: 'checkbox 1',
                label: 'checkbox 1'
              },
              { 
                name: 'checkbox 2',
                value: 'checkbox 2',
                label: 'checkbox 2'
              },
              { 
                name: 'checkbox 3',
                value: 'checkbox 3',
                label: 'checkbox 3'
              }
            ]
          }
          multiple={true}
          groupName={'imply all'}
          groupLabel={'imply all'}
          implyAll={true}
        />
        <ButtonGroup
          options={
            [
              { 
                name: 'checkbox 1',
                value: 'checkbox 1',
                label: 'checkbox 1'
              },
              { 
                name: 'checkbox 2',
                value: 'checkbox 2',
                label: 'checkbox 2'
              },
              { 
                name: 'checkbox 3',
                value: 'checkbox 3',
                label: 'checkbox 3'
              }
            ]
          }
          multiple={true}
          groupName={'imply none'}
          groupLabel={'imply none'}
          implyNone={true}
        />
        <ButtonGroup 
          options={
            [
              { 
                name: 'radio 1',
                value: 'radio 1',
                label: 'radio 1'
              },
              { 
                name: 'radio 2',
                value: 'radio 2',
                label: 'radio 2'
              },
              { 
                name: 'radio 3',
                value: 'radio 3',
                label: 'radio 3'
              }
            ]
          }
          multiple={false}
          groupName={'radio group'}
          groupLabel={'radio group'}
        />
      </div>
    );
  }
}

export default App;
