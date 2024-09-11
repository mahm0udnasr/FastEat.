import "./App.scss";
// react router dom
import { BrowserRouter, Routes, Route } from "react-router-dom";
// pages
import { Home, Error, MealDetails, Category } from "./pages/index";
// components
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
export default function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
      <Sidebar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/meal/:id" element={<MealDetails/>}/>
        <Route path="/meal/category/:name" element={<Category/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}
