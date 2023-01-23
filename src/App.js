import React from "react";
import { Route, Routes } from "react-router-dom";
import Signin  from './components/Signin';
import Signup from './components/Signup';
import Account from './components/Account.jsx'
import { AuthContextProvider } from "./context/AuthContext";
import ProtectRoute from "./components/ProtectRoute";
import PageError from "./components/PageError";
function App() {
  return (
    <div >
      <h1 className="text-center text-3x1 font-bold">
         firenase Auth & Conte
      </h1>
      <AuthContextProvider>
      <Routes>
        <Route path ="/" element={<Signin/>}/>
        <Route path ="/signup" element={<Signup/>}/>
        <Route path = '/error' element={<PageError/>}/>
        <Route path ="/account" element={<ProtectRoute>
          <Account/>
        </ProtectRoute>}/>
      </Routes>
      </AuthContextProvider>
      
    </div>
  );
}

export default App;
