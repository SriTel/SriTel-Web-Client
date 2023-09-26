import React from "react"
import { Route, Routes } from "react-router-dom";
import Forgot from "./pages/Forgot";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Verify from "./pages/Verifyotp";
import MainPage from "./pages/Main";
import Bills from "./pages/Bills";
import Services from "./pages/Services";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import Header from "./components/Header";


function App() {
  return (
    <React.Fragment>
      <main>
        <Routes>
          <Route path="/"  element={<MainPage />} />
          <Route path="/login"  element={<Login />} />
          <Route path="/signup"  element={<Signup />} />
          <Route path="/verifyotp"  element={<Verify />} />  
          <Route path="/forogtpassword"  element={<Forgot />} />  
          <Route path="/home"  element={<><Header/> <Home /></>} />  
          <Route path="/bills"  element={<><Header/><Bills /></>} />  
          <Route path="/services"  element={<><Header/><Services /></>} /> 
          <Route path="/chat"  element={<><Header/><Chat /></>} /> 
          <Route path="/header"  element={<Header />} /> 
 
        </Routes>
      </main>
    </React.Fragment>
   

  );
}

export default App;
