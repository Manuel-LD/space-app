import Navbar from './components/Navbar.jsx'
import Astros from './components/Astros.jsx'
import Apod from './components/Apod.jsx'
import About from './components/About.jsx'
import { Routes, Route } from 'react-router-dom'
import './App.css'
 

function App() {
  const links = [
    { href: "/", text: "Home"},
    { href: "/astros", text: "Astros"},
    { href: "/apod", text: "Apod"},
    { href: "/about", text: "About"}
  ];

  return (
    <>
      <Navbar links={links}/>
      <Routes>
        <Route path='/astros' element={<Astros />} />
        <Route path='/apod' element={<Apod />} />
        <Route path='/about' element={<About />} />
      </Routes>
      
    </>
  );
}

export default App;
