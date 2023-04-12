import { Component } from 'solid-js';
import { render } from 'solid-js/web';
import { Router } from "@solidjs/router";
import Routes from './Routes';

const root = document.getElementById("root")

const App: Component = () => {
  return (
    <Router>
      <Routes />
    </Router>
  );
};

render(() => <App />, root!)
