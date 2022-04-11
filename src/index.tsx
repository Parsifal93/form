import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import styled, {createGlobalStyle} from 'styled-components'


const Global = createGlobalStyle `
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
   
}
body {
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 0%, rgba(16,208,244,1) 100%);;
}
`

ReactDOM.render(
  <React.StrictMode>
    <Global />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

