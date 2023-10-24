import React, { Component } from 'react';
import axios from 'axios';
import Global from '../Global';

export default class ListaHospitales extends Component {

    urlHospitales = Global.urlApiHospitales;
    
    state = {
        hospitales: [],
        status: false
    }

    loadHospitales = () => {
        var request = "webresources/hospitales";
        
        axios.get(this.urlHospitales+request).then(response => {
            this.setState({
                hospitales: response.data,
                status: true
            })
        })

    }

    componentDidMount = () => {
        this.loadHospitales();
    }


  render() {
    return (
      <div>
        <h1 style={{color:"purple"}}>Lista de hospitales</h1>

        <table className='table table-hover'>
            <thead>
                <tr>
                    <th>ID Hospital</th>
                    <th>Nombre</th>
                    <th>Dirección</th>
                    <th>Teléfono</th>
                    <th>Nº de camas</th>
                </tr>
            </thead>
            <tbody>
            {
                this.state.status == true &&
                (
                    this.state.hospitales.map((hospital, index) => {
                        return(<tr key={index}>
                            <td>{hospital.idhospital}</td>
                            <td>{hospital.nombre}</td>
                            <td>{hospital.direccion}</td>
                            <td>{hospital.telefono}</td>
                            <td>{hospital.camas}</td>
                            <td>
                                <button className='btn btn-info'>Editar</button>
                            </td>
                            <td>
                                <button className='btn btn-danger'>Eliminar</button>
                            </td>
                        </tr>)
                    })
                )
            }
            </tbody>
        </table>
      </div>
    )
  }
}
