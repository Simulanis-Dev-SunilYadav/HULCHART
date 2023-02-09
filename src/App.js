import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import DolphinUniliver from './Components/DolphinUniliver';
import Dashboard1 from './Components/charts/Dashboard1';
import Dashboard2 from './Components/charts/Dashboard2';
import Dashboard3 from './Components/charts/Dashboard3';
import Dashboard4 from './Components/charts/Dashboard4';
import Dashboard5 from './Components/charts/Dashboard5';
 
import Dashboard6 from './Components/charts/Dashboard6';
import Dashboard7 from './Components/charts/Dashboard7';
import Dashboard8 from './Components/charts/Dashboard8';

function App() {
  return (
    <>
    <Router>
        <Routes>
            <Route path="/" element={<Dashboard1/>} exact />
            <Route path="/dashboard1" element={<Dashboard1/>} exact />
            <Route path="/dashboard2" element={<Dashboard2/>} exact />
            <Route path="/dashboard3" element={<Dashboard3/>} exact />
            <Route path="/dashboard4" element={<Dashboard4/>} exact />
            <Route path="/dashboard5" element={<Dashboard5/>} exact />
            <Route path="/dashboard6" element={<Dashboard6/>} exact />
            <Route path="/dashboard7" element={<Dashboard7/>} exact />
            <Route path="/dashboard8" element={<Dashboard8/>} exact />
            {/* <Route path="/:formtype" component={FormController} exact /> */}
        </Routes>
    </Router>
    </>
  );
}

export default App;
