import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import NavBar from './Navbar';
import All from './pages/all';
import Your from './pages/your';
import Blocked from './pages/blocked';
import NotFoundPage from './pages/notfoundpage';
import ALL from './All';

import { useState, useEffect, useCallback } from "react";


function App() {

  
  return (
<BrowserRouter>
      <div className="App">
        <NavBar />
        <div id="page-body">
          <Routes>
            <Route path="/" element={<All><ALL /></All>}/>
            <Route path="/your" element={<Your />} />
            <Route path="/blocked" element={<Blocked />}/>
            <Route path="*" element={<NotFoundPage/>} />
          </Routes>
        </div>

      </div> 
    </BrowserRouter>
  );
}

export default App;
