
import './App.css';
import Profile from './components/Profile';

import {Routes,Route,BrowserRouter} from 'react-router-dom';
function App() {
  return (
    <div className="bg">
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Profile/>}/> 
               
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
