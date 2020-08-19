import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import About from './routes/About';
import Home from './routes/Home';
import Navigation from './components/Navigation';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Route path="/" component={Home} exact={true} />
      <Route path="/about" component={About} />
    </BrowserRouter>
  );
}

export default App;
