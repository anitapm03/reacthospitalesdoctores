import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Home from './Home';
import Doctores from './Doctores';
import Menu from './Menu';


export default class Router extends Component{

    render(){
        //aqui funciones de parámetros

        function DoctoresElement() {
            //aqui vamos a procesar parametros
            var { idhospital } = useParams();

            return <Doctores idhospital={idhospital}/>
        }

        return(

            <BrowserRouter>
            <Menu />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/doctores/:idhospital" element={<DoctoresElement />} />
                </Routes>
            </BrowserRouter>
        )

    }
}