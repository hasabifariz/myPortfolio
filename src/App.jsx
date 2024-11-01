import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Project';
import Contact from './pages/Contact';
import Header from './pages/Header';

const App = () => {
  const Layout = ({ children }) => (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );

  localStorage.setItem('theme', 'light')

  return (
    <BrowserRouter>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<Layout><About /></Layout>} /> */}
          <Route path="/projects" element={<Layout><Projects /></Layout>} />
          {/* <Route path="/contact" element={<Layout><Contact /></Layout>} /> */}
        </Routes>
      </Router>
    </BrowserRouter>
  );
};

export default App;
