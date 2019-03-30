import React from 'react';
import ReactDOM from 'react-dom';

import App from 'App.js';

//Setup viewport
window.addEventListener('load', (event) => {
  console.log("Preparing for \'" + process.env.NODE_ENV + "\' environment...");
  console.log("Loading web app version \'" + process.env.VERSION + "\'...");
  loadApplication();
  window.requestAnimationFrame(updateApplication);
});

//Setup application
const FRAMES_PER_SECOND = 60;
var prevtime = 0;
var root;
var dt;

//Load application
function loadApplication()
{
  root = document.getElementById("root");
}

//Update application
function updateApplication(time)
{
  dt = (time - prevtime) / FRAMES_PER_SECOND;
  {
    ReactDOM.render(React.createElement(App), root);
  }
  prevtime = time;
  window.requestAnimationFrame(updateApplication);
}
