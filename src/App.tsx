import React from 'react';
import './App.css';
import { ProjectListScreen } from 'screens/project-list';
import { TsReactTest } from 'screens/project-list/practice/practice-generics';

function App() {
  return (
    <div className="App">
      <ProjectListScreen />
      <TsReactTest />
    </div>
  );
}

export default App;
