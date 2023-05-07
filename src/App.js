import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <div>
        <Header />
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
