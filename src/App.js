import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Homepage, Dashboard, Signup, Sign_In } from "./Pages/index";
import {
  Appearances,
  Billing_Information,
  Personal_Information,
  Security,
} from "./Dashboard_Components/Settings/Settings Components/index";
import {
  Dashboard_Home,
  Analytics,
  Wallets,
  Portfolio,
  Exchange,
  Settings,
  Help,
} from "./Dashboard_Components/index";
import { AuthProvider } from "./Services/contexts/AuthContext";
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route path="/" index element={<Homepage />} />
          <Route path="Dashboard" element={<Dashboard />}>
            <Route exact path="Home" element={<Dashboard_Home />} />
            <Route path="Analytics" element={<Analytics />} />
            <Route path="Portfolio" element={<Portfolio />} />
            <Route path="Wallets" element={<Wallets />} />
            <Route path="Exchanges" element={<Exchange />} />
            <Route path="Settings" element={<Settings />}>
              <Route path="Appearances" element={<Appearances />} />
              <Route path="Security" element={<Security />} />
              <Route path="Billing" element={<Billing_Information />} />
              <Route path="Information" element={<Personal_Information />} />
            </Route>
            <Route path="Help" element={<Help />} />
          </Route>
          <Route path="Signup" element={<Signup />} />
          <Route path="Signin" element={<Sign_In />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
