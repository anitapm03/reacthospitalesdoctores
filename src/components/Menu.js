import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import Global from '../Global';

export default class Menu extends Component {

    urlApiHospitales = Global.urlApiHospitales;

    state = {
        hospitales: [],
        status: false
    }

    generarHospitales = () => {

        var request = "webresources/hospitales";

        axios.get(this.urlApiHospitales+request).then(response => {
            this.setState({
                hospitales: response.data,
                status: true
            })
        })
    }

    componentDidMount = () => {
        this.generarHospitales();
    }
  render() {
    return (
      <div>
        <h1>Menu</h1>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">

        <NavLink className="navbar-brand" to="/">Home</NavLink>
        <NavLink className="navbar-brand" to="/createhospital">Crear Hospital</NavLink>

        <ul className="navbar-nav">
                
            <li className="nav-item dropdown">
            <NavLink className="nav-link dropdown-toggle" to="#" 
            role="button" data-bs-toggle="dropdown" aria-expanded="false">
             Hospitales
            </NavLink>
            <ul className="dropdown-menu">
                    
            {
            this.state.status == true &&
                (
                    this.state.hospitales.map((hospital, index)=>{
                        var enlace = "/doctores/" + hospital.idhospital;
                        //tbn puede hacerse to={"/doctores/" + hospital.idhospital}
                        return(<li key={index}>
                            <NavLink className="dropdown-item" to={enlace} >
                            {hospital.nombre}</NavLink></li>)
                    })
                )
            } 
                    
            </ul>
            </li>
        </ul>
        </div>
        </nav>
      </div>
    )
  }
}
