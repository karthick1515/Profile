import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/experience' element={<Experience/>}/>
      <Route path='/skills' element={<Skills/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/education' element={<Education/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
