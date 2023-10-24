import React, { Component } from 'react';
import axios from 'axios';
import Global from '../Global';

export default class DetalleDoctor extends Component {
    urlDoctor = Global.urlApiDoctores;

    state = {
        doctor: null,
        status: false
    }

    llamarDoctor = () => {

        var request = "api/doctores/" + this.props.iddoctor;

        axios.get(this.urlDoctor+request).then(response => {
            this.setState({
                doctor: response.data,
                status: true,
            })
        })
    }

    componentDidMount = () => {
        this.llamarDoctor();
    }

    componentDidUpdate = (oldProps) => {
        if (oldProps.iddoctor != this.props.iddoctor){
            this.llamarDoctor();
            console.log("actualizando");
        }
    }

  render() {
    return (
      <div>
        <h1>Detalle del doctor: {this.props.iddoctor}</h1>

        {
            this.state.status == true &&
            (<div>
            <h2 style={{color: "purple"}}>ID: {this.state.doctor.idDoctor}</h2>
            <h2 style={{color: "purple"}}>Apellido: {this.state.doctor.apellido}</h2>
            <h2 style={{color: "purple"}}>Especialidad: {this.state.doctor.especialidad}</h2>
            <h2 style={{color: "purple"}}>Salario: {this.state.doctor.salario}</h2>
            <h2 style={{color: "purple"}}>ID Hospital: {this.state.doctor.idHospital}</h2>
                
            </div>)
        }

      </div>
    )
  }
}
