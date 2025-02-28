import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './common/Navbar';
import { DarkModeProvider } from './common/DarkModeContext';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/Home/Home';
import AboutMe from './components/AboutMe/AboutMe';
import MySkills from './components/MySkills/MySkills';
import Projects from './components/Projects/Projects';
import ContactMe from './components/ContactMe/ContactMe';
import NotFound from './components/Home/NotFound';

function App() {
  return (
    <DarkModeProvider>
      <BrowserRouter>
        <div className="app-container">
          <Navbar />
    
          <main className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/aboutme" element={<AboutMe />} />
              <Route path="/myskills" element={<MySkills />} />
              <Route path="/myprojects" element={<Projects />} />
              <Route path="/contactme" element={<ContactMe />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </DarkModeProvider>
  );
}

export default App;

