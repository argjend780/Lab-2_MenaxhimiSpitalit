import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux'; // Importoni Provider nga react-redux
import store from './store';

import SidebarMenu from './components/SlidebarMenu';
import QytetiList from './components/qytetelist';
import Dashboard from './pages/Dashboard'; // Importoni Dashboard nga faqja e dashboard-it
import AddQyteti from './components/Qytete/addQytete'; 
import UpdateQyteti from './components/Qytete/uptadeQyteti';
import SpitaliList from './components/spitalilist';
import UpdateSpitali from './components/Spitali/uptadespitali'; 
import AddSpitali from './components/Spitali/createSpitali';

<link href="./output.css" rel="stylesheet"></link>; // Importoni CSS-in e Tailwind

const App = () => {
  return (
    <Provider store={store}> {/* Kaloni store-in në Provider */}
      <Router>
        <div style={{ display: 'flex' }}>
          <SidebarMenu />
          <main style={{ padding: '20px', flexGrow: 1 }}>
            <Routes>
            <Route path="/" element={<Dashboard />} />
              <Route path="/documentation" element={<h1>Documentation Page</h1>} />
              <Route path="/calendar" element={<h1>Calendar Page</h1>} />
              <Route path="/e-commerce" element={<h1>E-commerce Page</h1>} />
              <Route path="/qytetetlist" element={<QytetiList />} />
              <Route exact path='/createQytetiForm' element={<AddQyteti />} />
              <Route exact path='/uptadeQytetiform/:id' element={<UpdateQyteti />} />
              <Route exact path='/spitaletlist/:qyteti_id' element={<SpitaliList />} />
              <Route exact path="/updateSpitaliForm/:qytetiId/:spitaliId" element={<UpdateSpitali />} />
              <Route exact path="/createSpitaliForm/:qytetiId" element={<AddSpitali />} />
              
            
            </Routes>
          </main>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
