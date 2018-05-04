import React from 'react';

export default function generateMutationGraph(variableArray) {
  return (
    <pre className="result-panel">
      {`
	      mutation createWateringProgram(
	        $wateringProgramName: String!,
	        $wateringProgramName: String!) {
	        createWateringProgram (
	          wateringProgramName: $wateringProgramName,
	          wateringProgramName: $wateringProgramName
	        )
	      }
	    `}
    </pre>
  );
}
