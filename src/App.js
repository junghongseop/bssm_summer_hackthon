import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from './pages/Main/page';
import Chat from './pages/Chat/page';
import Controller from './pages/Controller/page';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/controller" element={<Controller />} />
      </Routes>
    </Router>
  );
}

export default App;
