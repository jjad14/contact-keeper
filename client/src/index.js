import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

// I just watched lecture 54. We used uuid to generate random id at this stage. However, uuid seems to not provide default export at version ("uuid": "^8.1.0"). I checked StackOverFlow, and change the import line to import {v4 as uuidv4} from "uuid"; and use uuidv4() in the functions.