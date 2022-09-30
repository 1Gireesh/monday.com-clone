import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Work from "../pages/Work"
export default function AllRoutes() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/login" element={<Login></Login>}></Route>
                <Route path="/work" element={<Work></Work>}></Route>
                <Route path="" element></Route>
                <Route path="" element></Route>
                <Route path="" element></Route>
                <Route path="" element></Route>
            </Routes>
        </div>
    )
}
