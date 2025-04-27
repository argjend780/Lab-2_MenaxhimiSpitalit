import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux'; // Importoni Provider nga react-redux
import store from './store';

import SidebarMenu from './components/SlidebarMenu';
import QytetiList from './components/qytetelist';

const App = () => {
  return (
    <Provider store={store}> {/* Kaloni store-in në Provider */}
      <Router>
        <div style={{ display: 'flex' }}>
          <SidebarMenu />
          <main style={{ padding: '20px', flexGrow: 1 }}>
            <Routes>
              <Route path="/documentation" element={<h1>Documentation Page</h1>} />
              <Route path="/calendar" element={<h1>Calendar Page</h1>} />
              <Route path="/e-commerce" element={<h1>E-commerce Page</h1>} />
              <Route path="/qytetetlist" element={<QytetiList />} />
            </Routes>
          </main>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
