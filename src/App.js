import React from 'react';

import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/home-page/home-page.component';
import NotFound from './pages/not-found-page/not-found-page.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';

import './App.css';

const App = () => {
  return (
    <div className='app-container'>
      <ErrorBoundary>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='*' component={NotFound} />
        </Switch>
      </ErrorBoundary>
    </div>
  );
};

export default App;
