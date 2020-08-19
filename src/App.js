import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import About from './routes/About';
import Home from './routes/Home';

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" component={Home} exact={true} />
      <Route path="/about" component={About} />
    </HashRouter>
  );
}

export default App;
