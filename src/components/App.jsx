import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Heroes from "./Heroes";
import FormLogin from "./FormLogin";
import FormRegister from "./FormRegister";
import DashBoard from "./DashBoard";
function App(){
    return(
        <Routes>
            <Route path="/" element={<Heroes/>}/>
            <Route path="/login" element={<FormLogin/>}/>
            <Route path="/register" element={<FormRegister/>}/>
            <Route path="/dashboard/*" element={<DashBoard/>}/>
        </Routes>
    ) ;
}
export default App;