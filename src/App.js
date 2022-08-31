import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Home, Browse, Signin, Signup} from "./pages";
import * as ROUTES from "./constants/routes"
export default function App() {
  return (
  <BrowserRouter>
     <Routes>
      <Route exact path ={ROUTES.HOME} element={<Home></Home>}></Route>
      <Route exact path = {ROUTES.BROWSE} element = {<Browse></Browse>}></Route>
      <Route exact path = {ROUTES.SIGN_IN} element={<Signin></Signin>}></Route>
      <Route exact path = {ROUTES.SIGN_UP} element = {<Signup></Signup>}></Route>
     </Routes>
   </BrowserRouter>
  )
}
 

