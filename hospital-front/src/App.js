// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SidebarMenu from './components/SlidebarMenu';

const App = () => {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <SidebarMenu />
        <main style={{ padding: '20px', flexGrow: 1 }}>
          <Routes>
            <Route path="/documentation" element={<h1>Documentation Page</h1>} />
            <Route path="/calendar" element={<h1>Calendar Page</h1>} />
            <Route path="/e-commerce" element={<h1>E-commerce Page</h1>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;