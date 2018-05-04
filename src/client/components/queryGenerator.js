import React, { Component } from 'react';
import { Button, Form, FormGroup, ControlLabel, FormControl, Checkbox } from 'react-bootstrap';
import bindAll from 'lodash/bindAll';
import findIndex from 'lodash/findIndex';
import generateMutationGraph from './mutationRule';

class QueryGenerator extends Component {
  constructor() {
    super();
    this.state = ({
      variableName: '',
      variableType: 0,
      variableCompulsory: false,
	    executeOption: 0,
	    variables: [],
      mutationKeyWord: '',
      results: null
    });
    this.typeArray = [{ value: 0, label: 'String' }, { value: 1, label: 'Int' }, { value: 2, label: 'Boolean' }];
    this.optionArray = [{ value: 0, label: 'ApolloMutation' }, { value: 1, label: 'ApolloQuery' }];
	  bindAll(this, ['submitVariable', 'findTypeLabelFromValue', 'saveToStorage', 'loadFromStorage', 'execute']);
  }

  findTypeLabelFromValue(typeValue) {
    const index = findIndex(this.typeArray, ['value', typeValue]);
    if (index !== -1) {
      return this.typeArray[index].label;
    }
    return 'unknown';
  }

  saveToStorage() {
    window.localStorage.variables = JSON.stringify(this.state.variables);
  }

  loadFromStorage() {
    if (window.localStorage.variables) {
      this.setState({ variables: JSON.parse(window.localStorage.variables) });
    }
  }
  execute() {
    if (this.state.executeOption === 0) {
      this.setState({ results: generateMutationGraph(this.state) });
    }
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
        <h1>Why not make it automatic</h1>
        <Form inline id="first-row">
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
            onChange={e => this.setState({ variableType: parseInt(e.target.value, 10) })}
          >
            {this.typeArray.map(type => (
              <option key={type.value} value={type.value}>{type.label}</option>
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

        <div className="row" id="second-row">
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
            <h2 className="result-title">Results</h2>
            {this.state.results}
          </div>
        </div>

        <div className="row btn-set" id="third-row">
          <Form inline>
            <FormGroup className="m-r-5">
              <FormControl
                componentClass="select"
                className="m-r-10"
                value={this.state.executeOption}
                onChange={e => this.setState({ executeOption: parseInt(e.target.value, 10) })}
              >
                {this.optionArray.map(option => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </FormControl>
              {this.state.executeOption === 0 ?
                <FormGroup className="m-r-5">
                  <ControlLabel>Mutation method name</ControlLabel>
                  <FormControl
                    type="text"
                    placeholder="Mutation method name"
                    value={this.state.mutationKeyWord}
                    onChange={e => this.setState({ mutationKeyWord: e.target.value })}
                  />
                </FormGroup> : ''
	            }
            </FormGroup>
            <Button onClick={this.saveToStorage} bsStyle="primary" className="m-r-5">
              Store input to local storage
            </Button>
            <Button onClick={this.loadFromStorage} bsStyle="primary" className="m-r-5">
              Load saved inputs to app
            </Button>
            <Button onClick={this.execute} bsStyle="primary">
              Execute
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default QueryGenerator;
