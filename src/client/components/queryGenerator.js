import React, { Component } from 'react';
import { Button, Form, FormGroup, ControlLabel, FormControl, Checkbox } from 'react-bootstrap';
import bindAll from 'lodash/bindAll';
import findIndex from 'lodash/findIndex';

class QueryGenerator extends Component {
  constructor() {
    super();
    this.state = ({
      variableName: '',
      variableType: 0,
      variableCompulsory: false,
	    variables: []
    });
    this.typeArray = [{ value: 0, label: 'String' }, { value: 1, label: 'Int' }, { value: 2, label: 'Boolean' }];
	  bindAll(this, ['submitVariable', 'findTypeLabelFromValue']);
  }

  findTypeLabelFromValue(typeValue) {
    const index = findIndex(this.typeArray, ['value', typeValue]);
    if (index !== -1) {
      return this.typeArray[index].label;
    }
    return 'unknown';
  }

  submitVariable() {
    const newVariable = { name: this.state.variableName, type: this.state.variableType, compulsory: this.state.variableCompulsory };
    const oldState = this.state.variables;
    oldState.push(newVariable);
    this.setState({ variables: oldState });
  }

  render() {
    return (
      <div className="container">
        <Form inline>
          <FormGroup className="m-r-5">
            <ControlLabel>Name</ControlLabel>
            <FormControl
              type="text"
              placeholder="Variable name"
              value={this.state.variableName}
              onChange={e => this.setState({ variableName: e.target.value })}
            />
          </FormGroup>
          <FormControl
            componentClass="select"
            className="m-r-5"
            value={this.state.variableType}
            onChange={e => this.setState({ variableType: e.target.value })}
          >
            {this.typeArray.map(type => (
              <option value={type.value}>{type.label}</option>
	          ))}
          </FormControl>
          <FormGroup>
            <Checkbox
              checked={this.state.variableCompulsory}
              className="m-r-5"
              onChange={e => this.setState({ variableCompulsory: e.target.checked })}
            >
	            Compulsory variable
	          </Checkbox>
            <Button bsStyle="primary" onClick={this.submitVariable}>Submit</Button>
          </FormGroup>
        </Form>
        <div className="row">
          <div className="col-sm-6">
            <h2 className="variables-title">Saved variables</h2>
            <table className="variables-container">{this.state.variables.map(variableSet => (
              <tr>
                <td>{variableSet.name}</td><td>{this.findTypeLabelFromValue(variableSet.type)}</td><td>{variableSet.compulsory ? 'Required' : ''}</td>
              </tr>
	          ))}
            </table>
          </div>
          <div className="col-sm-6">
            {123}
          </div>
        </div>
      </div>
    );
  }
}

export default QueryGenerator;
