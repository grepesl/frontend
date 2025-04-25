import React from 'react'
import { Routes, Route } from 'react-router'
import Home from "./pages/Home.jsx";
import CarsPage from "./pages/CarsPage.jsx";
import CarPage from "./pages/CarPage.jsx";
import AddCarPage from "./pages/AddCarPage.jsx";
import Header from "./components/Header.jsx";


const App = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cars" element={<CarsPage />}/>
                <Route path="/cars/:id" element={<CarPage />}/>
                <Route path="/cars/add" element={<AddCarPage />}/>
            </Routes>
        </>
    )
}
export default App
