import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import Header from './pages/Header';
import Home from './pages/Home';

const App = () => {
  const Layout = ({ children }) => (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );

  localStorage.setItem('theme', 'light')

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
