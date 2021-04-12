import React from "react";
import ReactDom from "react-dom";
import Grid from "./App";
import './Styling.css';

ReactDom.render(
  <React.StrictMode>
    <Grid />
  </React.StrictMode>,
  document.getElementById('root')
);