import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Main from './pages/Main';
import Repositorio from './pages/Repositorio'
import ErrorNotFound from './404/ErrorNotFound';

export default function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
               
                    <Route exact path="/" element={<Main/>} />
                    <Route exact path="/repositorio/:repositorio" element={<Repositorio/>} />

                    <Route path="*" element={<ErrorNotFound/>} />
            </Routes>
        </BrowserRouter>
    )
}