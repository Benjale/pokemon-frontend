import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/common/Navbar'


const App = () => {
  return (
    <>
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />}/>
        </Routes>
      </div>
    </Router>
    </>
    
    
  );
}

export default App;
