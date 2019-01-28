import React, { Component } from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './scss/main.scss';
import App from './components/App';

class Main extends Component {
  render() {
    return (
      <App/>
    );
  }
}

render(<Main />, document.getElementById('root'));

