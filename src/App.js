import logo from './logo.svg';
import Home from './pages/home';
import About from './pages/about';
import Logement from './pages/logement';
import NotFound from './pages/notfound';

import Layout from './components/Layout/Layout';

import { Routes, Route, Link } from "react-router-dom";
import './App.css';



function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="logement/:id" element={<Logement />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
