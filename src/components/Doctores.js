import React, { Component } from 'react';
import Global from '../Global';
import axios from 'axios';
import DetalleDoctor from './DetalleDoctor';

export default class Doctores extends Component {

    urlDoctores = Global.urlApiDoctores;

    state = {
        doctores: [],
        status: false
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
        console.log("Actual PROPS... " + this.props.idhospital);
        console.log("Old PROPS... " + oldProps.idhospital);

        if(oldProps.idhospital != this.props.idhospital){
            this.getDoctores();
            
        }
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
                                <td><button>Detalle</button></td>
                            </tr>)
                        })
                    )
                }
            </tbody>
        </table>
        <DetalleDoctor />
      </div>
    )
  }
}
