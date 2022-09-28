import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'

export default function AllRoutes() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="" element></Route>
                <Route path="" element></Route>
                <Route path="" element></Route>
                <Route path="" element></Route>
                <Route path="" element></Route>
                <Route path="" element></Route>
            </Routes>
        </div>
    )
}
