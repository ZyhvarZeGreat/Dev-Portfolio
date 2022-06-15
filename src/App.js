import './App.css';
import { Routes,Route } from 'react-router-dom';
import {Homepage,Dashboard,Signup,Sign_In}from './Pages/index'
function App() {
  return (
    <div className="App">
     <Routes>
      <Route exact path = "/" index element={<Homepage/>}/>
      <Route exact path = "Dashboard" element={<Dashboard/>}/>
      <Route exact path = "Sign up" element={<Signup/>}/>
      <Route exact path = "Sign in" element={<Sign_In/>}/>
     </Routes>
    </div>
  );
}

export default App;
