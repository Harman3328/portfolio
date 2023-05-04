import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./components/Home";
import ProjectPage from './components/ProjectPage';

function App() {
  return (
    <Router>
      <div>
        <Header />
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/project/:path" element={<ProjectPage />} />
      </Routes>
    </Router>
  );
}

export default App;
