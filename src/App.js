import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Homepage from './homepage.js';

function App() {
  return (
      <Router>
          <Route
            exact path="/"
            render={() => <Homepage />}
          />
      </Router>
  );
}

export default App;
