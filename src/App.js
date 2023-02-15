import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import DolphinUniliver from './dashboard_1/DolphinUniliver';
import Dashboard1 from './dashboard_1/Dashboard1';
import Dashboard2 from './dashboard_2/Dashboard2';
import Dashboard3 from './dashboard_3/Dashboard3';
import Dashboard4 from './dashboard_4/Dashboard4';
import Dashboard5 from './dashboard_5/Dashboard5';
 
import Dashboard6 from './dashboard_6/Dashboard6';
import Dashboard7 from './dashboard_7/Dashboard7';
import Dashboard8 from './dashboard_8/Dashboard8';
import Dashboard9 from './dashboard_9/Dashboard9';
import Dashboard10 from './dashboard_10/Dashboard10';

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
            <Route path="/dashboard9" element={<Dashboard9/>} exact />
            <Route path="/dashboard10" element={<Dashboard10/>} exact />
            {/* <Route path="/:formtype" component={FormController} exact /> */}
        </Routes>
    </Router>
    </>
  );
}

export default App;
