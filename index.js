import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ToDo from './component/main';
import registerServiceWorker from './registerServiceWorker';


var tasklist = ["check","Task2"];
ReactDOM.render(<ToDo task={tasklist} />, document.getElementById('todo'));
registerServiceWorker();