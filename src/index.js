import React from 'react';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { render } from "react-pixi-fiber";
import * as PIXI from "pixi.js";

// Setup PixiJS Application
const canvasElement = document.getElementById("container")
const app = new PIXI.Application(800, 600, {
  backgroundColor: 0x10bb99,
  view: canvasElement
});

render(
  <App ticker={app.ticker} />,
  app.stage
);

registerServiceWorker();
