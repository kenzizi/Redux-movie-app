import React from "react";
import { render } from "react-dom";
import store from '../Store'
import App from '../App'
import {Provider} from 'react-redux'
const Movieapplication = () => (
  <Provider store = { store }>
    <App />
  </Provider>
);

export default Movieapplication
