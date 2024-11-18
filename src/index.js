import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import About from './routes/about';
import OutletFill from './routes/outlet';

import {BrowserRouter, Route, Routes} from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<OutletFill/>}>
          <Route path='about' element={<About/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
 </React.StrictMode>
);
reportWebVitals();
