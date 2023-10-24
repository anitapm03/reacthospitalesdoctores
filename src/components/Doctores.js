import React, { Component } from 'react';
import Global from '../Global';
import axios from 'axios';
import DetalleDoctor from './DetalleDoctor';
import { NavLink } from 'react-router-dom';

export default class Doctores extends Component {

    urlDoctores = Global.urlApiDoctores;

    state = {
        doctores: [],
        status: false,
        idDoctor: -1
    }

    getDoctores = () => {

        var request = "/api/Doctores/DoctoresHospital/" + this.props.idhospital;

        axios.get(this.urlDoctores+request).then(response => {
            this.setState({
                doctores: response.data,
                status: true
            })
        })
    }

    componentDidMount = () => {
        this.getDoctores();
    }

    componentDidUpdate = (oldProps) => {
        //console.log("Actual PROPS... " + this.props.idhospital);
       //console.log("Old PROPS... " + oldProps.idhospital);

        if(oldProps.idhospital != this.props.idhospital){
            this.getDoctores();
            
        }
    }

    mostrarDetalleDoctor = (iddoctor) => {
        console.log(iddoctor);
        this.setState({
            idDoctor: iddoctor
        })
    }

  render() {
    return (
      <div>
        <h1>Doctores del hospital: {this.props.idhospital}</h1>

        <table border="1" className="table">
            <thead>
                <tr>
                    <th>Apellido</th>
                    <th>Especialidad</th>
                    <th>Detalle</th>
                    <th>Detalle por enlace</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.status == true &&
                    (
                        this.state.doctores.map((doctor, index) => {
                            return(<tr key={index}>
                                <td>{doctor.apellido}</td>
                                <td>{doctor.especialidad}</td>

                                <td><button className='btn btn-info' 
                                onClick={() => this.mostrarDetalleDoctor(doctor.idDoctor)}>Detalle
                                </button></td>

                                <td>
                                <NavLink to={"/detallesdoctor/" + doctor.idDoctor} >Detalle por enlace</NavLink>
                                </td>

                            </tr>)
                        })
                    )
                }
            </tbody>
        </table>
        {
            this.state.idDoctor != -1 &&
            (<DetalleDoctor iddoctor={this.state.idDoctor}/>)
        }
        
      </div>
    )
  }
}
