import React, { Component } from 'react';
import ButtonGroup from './components/ButtonGroup';

class App extends Component {
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
                checked: true,
                label: 'checkbox 2'
              },
              { 
                name: 'checkbox 3',
                value: 'checkbox 3',
                checked: false,
                label: 'checkbox 3'
              },
              { 
                name: 'checkbox 4',
                value: 'checkbox 4',
                checked: false,
                label: 'checkbox 4'
              },
              { 
                name: 'checkbox 5',
                value: 'checkbox 5',
                checked: false,
                label: 'checkbox 5'
              }
            ]
          }
          multiple={true}
          groupName={'button group 1'}
          groupLabel={'button group 1'}
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
          groupName={'button group 2'}
          groupLabel={'button group 2'}
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
              },
              { 
                name: 'checkbox 4',
                value: 'checkbox 4',
                label: 'checkbox 4'
              },
              { 
                name: 'checkbox 5',
                value: 'checkbox 5',
                label: 'checkbox 5'
              }
            ]
          }
          multiple={true}
          groupName={'button group 3'}
          groupLabel={'button group 3'}
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
              },
              { 
                name: 'checkbox 4',
                value: 'checkbox 4',
                label: 'checkbox 4'
              }
            ]
          }
          multiple={true}
          groupName={'button group 4'}
          groupLabel={'button group 4'}
          implyNone={true}
        />
      </div>
    );
  }
}

export default App;
