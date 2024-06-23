import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';
import DrawerAppBar from './components/DrawerAppBar';
import SuccessPage from './pages/SuccessPage';

function App() {
  return (
    <Router>
    {/* <DrawerAppBar /> */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/success" element={<SuccessPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    {/* <Footer/> */}
  </Router>
  );
}

export default App;
