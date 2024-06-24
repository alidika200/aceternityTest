import React from 'react';
import ReactVivus from 'react-vivus';
import svg from './example.svg';
import './landingsec1.css';

const MyComponent = () => (
<div>
  <ReactVivus
    id="foo"
    option={{
      file: svg,
      animTimingFunction: 'EASE',
      duration: 300,
      type: 'scenario',
      onReady: console.log
    }}
    style={{ height: '900px', width: '900px',}}
    callback={console.log}
  />
  </div>
 
);
export default MyComponent;
 