import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
<<<<<<< HEAD
import { Provider } from 'react-redux'; 
import store from './store';

ReactDOM.render(
 <Provider store={store}>
    <App />
 </Provider>,
 document.getElementById('root')
);
=======
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux'
import store from '//store';
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
reportWebVitals();

 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
>>>>>>> parent of edb14e0 (5.5.24)
