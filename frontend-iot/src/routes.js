
import Home from './components/MenuHome';
import {Fragment} from "react";
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CadastrarPessoa from './components/CadastrarPessoa';
import Lampada1 from './components/Lampada1';
import Lampada2 from './components/Lampada2';
import Lampada3 from './components/Lampada3';
import Lampada4 from './components/Lampada4';
import MenuHome from './components/MenuHome';


const AppRoutes = () =>{
    return(
        <Router>
            <Fragment>
            <Routes>
                <Route path="/" element={<CadastrarPessoa />} />
                <Route path="/home" element={<MenuHome/>} />
                <Route path='/home/Lampada1' element={<Lampada1/>}/>
                <Route path='/home/Lampada2' element={<Lampada2/>}/>
                <Route path='/home/Lampada3' element={<Lampada3/>}/>
                <Route path='/home/Lampada4' element={<Lampada4/>}/>
                
                
            </Routes>
            </Fragment>
        </Router>
    );
}

export default AppRoutes;