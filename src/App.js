import './App.css';
import { Routes,Route, Outlet } from 'react-router-dom';
import {Homepage,Dashboard,Signup,Sign_In}from './Pages/index'
import {Dashboard_Home,Analytics,Wallets,Portfolio,Exchange,Settings,Help} from './Dashboard_Components/index'
function App() {
  return (
    <div className="App">
     <Routes>
      <Route path = "/" index element={<Homepage/>}/>
      <Route path = "Dashboard" element={<Dashboard/>}>
      <Route path = "Home" element={<Dashboard_Home/>}/>
      <Route path = "Analytics" element={<Analytics/>}/>
        <Route path = "Portfolio" element={<Portfolio/>}/>
        <Route path = "Wallets" element={<Wallets/>}/>
        <Route path = "Exchanges" element={<Exchange/>}/>
        <Route path = "Settings" element={<Settings/>}/>
        <Route path = "Help" element={<Help/>}/>
      </Route>
      <Route path = "Signup" element={<Signup/>}/>
      <Route path = "Signin" element={<Sign_In/>}/>
     </Routes>
    </div>
  );
}

export default App;
