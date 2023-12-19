
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Failure from './pages/Failure';
import Success from './pages/Success';

function App() {
 
  return (
    <div className="App">
      <Router>
      
      
      <Routes>
        
        
        <Route path="/success"  element={<Success/>}></Route>
        <Route path="/failure"  element={<Failure/>}></Route>
        

        </Routes>

      
      
      </Router>
    </div>
  );
}

export default App;