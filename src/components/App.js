import React from 'react';
import Panel from './Panel.js';

export default function App(props) {
  return (
    <div className="App">
      <h1>Noroff Task</h1>
      <Panel>
        <p>this is the child of the panel function</p>
        <p>How th fuck is this usefull</p>
        <div className="Undertekst">
          <p>Hmmm, maybe there would be nice</p>
        </div>
      </Panel>
      <Panel>
        <p>This makes it either clear or more confusing</p>
        <p>oh nice thats what I thought!</p>
        <h2>Perfect</h2>
      </Panel>
    </div>
  );
}
