import React from 'react';
import ReactComp from './components/ReactComp';
import FunctionalComp from './components/FunctionalComp';
import FunctionalCompArrow from './components/FunctionalCompArrow';
import PureComp from './components/PureComp';
import CreateElement from './components/CreateElement';

function App() {
  return (
    <div>
      <CreateElement />
      <ReactComp />
      <PureComp />
      <FunctionalComp />
      <FunctionalCompArrow />
    </div>
  );
}

export default App;
