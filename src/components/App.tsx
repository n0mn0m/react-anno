import React from 'react';
import './App.css';
import { BrowserRouter, Route, } from 'react-router-dom';
import AnnotoriousLoader from './annotate';


const App: React.FC = () => {
    return (
        <BrowserRouter>
          <Route path="/">
              <AnnotoriousLoader />
          </Route>
        </BrowserRouter>
    );
};

export default App;