import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Main from './routes/main';
import About from './routes/about';

import {BrowserRouter, Route, Routes} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main/>}>
          <Route path='about' element={<About/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
 </React.StrictMode>
);
reportWebVitals();
