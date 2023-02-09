import Home from './pages/Home/home';
import About from './pages/About/about';
import Logement from './pages/Logement/logement';
import NotFound from './pages/Notfound/notfound';

import Layout from './components/Layout/Layout';

import { Routes, Route } from "react-router-dom";
import './App.scss';



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
