import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import NewPage from './components/NewPage';
import NewComponentePage from './components/NewComponentePage';
import Mascotas from './components/Mascotas';
import Persona from './components/Persona';
import Especies from './components/Especies';

function App() {


  return (
    <>
      <Router>
      <Routes>
        <Route exact path="/" element={<HomePage/>}/>
        <Route exact path="/about" element={<AboutPage/>}/>
        <Route exact path="/contact" element={<ContactPage/>}/>
        <Route exact path="/new" element={<NewPage/>}/>
        <Route exact path="/newPage" element={<NewComponentePage/>}/>
        <Route exact path="/especies" element={<Especies/>}/>
        <Route exact path="/mascota" element={<Mascotas/>}/>
        <Route exact path="/persona" element={<Persona/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
