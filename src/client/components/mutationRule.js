import React from 'react';
import findIndex from 'lodash/findIndex';

function findTypeLabelFromValue(typeValue) {
  const typeArray = [{ value: 0, label: 'String' }, { value: 1, label: 'Int' }, { value: 2, label: 'Boolean' }];
  const index = findIndex(typeArray, ['value', typeValue]);
  if (index !== -1) {
    return typeArray[index].label;
  }
  return 'unknown';
}

export default function generateMutationGraph(state) {
  const methodName = state.mutationKeyWord === '' ? 'unknownName' : state.mutationKeyWord;
  const variables = state.variables;
  return (
    <div className="result-panel">
      <div><span>{`mutation ${methodName}(`}</span></div>
      {variables.map(variable => (
        <div><span>&nbsp;&nbsp;{`$${variable.name}: ${findTypeLabelFromValue(variable.type)}${variable.compulsory ? '!' : ''}`}</span></div>
      ))}
      <div><span>{') {'}</span></div>
      <div><span>&nbsp;&nbsp;{`${methodName} (`}</span></div>
      {variables.map(variable => (
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;{`${variable.name}: $${variable.name}`}</span></div>
      ))}
      <div><span>{'}'}</span></div>
    </div>
  );
}
