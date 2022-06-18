import './App.css';
import { Routes,Route } from 'react-router-dom';
import {Homepage,Dashboard,Signup,Sign_In}from './Pages/index'
function App() {
  return (
    <div className="App">
     <Routes>
      <Route path = "/" index element={<Homepage/>}/>
      <Route path = "Dashboard" element={<Dashboard/>}/>
      <Route path = "Signup" element={<Signup/>}/>
      <Route path = "Signin" element={<Sign_In/>}/>
     </Routes>
    </div>
  );
}

export default App;
