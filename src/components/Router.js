import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Home from './Home';
import Doctores from './Doctores';
import Menu from './Menu';
import DetalleDoctor from './DetalleDoctor';
import CreateHospital from './CreateHospital';
import ListaHospitales from './ListaHospitales';


export default class Router extends Component{

    render(){
        //aqui funciones de parámetros

        function DoctoresElement() {
            //aqui vamos a procesar parametros
            var { idhospital } = useParams();

            return <Doctores idhospital={idhospital}/>
        }

        function DetalleDoctorElement() { 
            var { iddoctor } = useParams();

            return <DetalleDoctor iddoctor={iddoctor} />

        }
        return(

            <BrowserRouter>
            <Menu />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/doctores/:idhospital" element={<DoctoresElement />} />
                    <Route path="/detallesdoctor/:iddoctor" element={<DetalleDoctorElement />} />
                    <Route path="/createhospital" element={<CreateHospital />} />
                    <Route path="/listahospitales" element={<ListaHospitales />} />
                </Routes>
            </BrowserRouter>
        )

    }
}