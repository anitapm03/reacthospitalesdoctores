import React, { Component } from 'react';
import axios from 'axios';
import Global from '../Global';

export default class DetalleDoctor extends Component {
    urlDoctor = Global.urlApiDoctores;

    state = {
        doctor: [],
        status: false
    }

    llamarDoctor = () => {

        var iddoctor = this.props.iddoctor;

        var request = "api/doctores/" + iddoctor;

        axios.get(this.urlDoctor+request).then(response => {
            this.setState({
                doctor: response.data,
                status: true,
            })
        })
    }

    

    componentDidUpdate = (oldProps) => {
        if (oldProps != this.props.iddoctor){

        }
    }

  render() {
    return (
      <div>
        <h1>Detalle del doctor: {this.props.iddoctor}</h1>

        {
            this.state.status == true &&
            (
                this.state.doctor.map((doctor, index) => {
                    return(<div>
                        <h2 style={{color: "purple"}}>ID: {doctor.idDoctor}</h2>
                        <h2 style={{color: "purple"}}>Apellido: {doctor.apellido}</h2>
                        <h2 style={{color: "purple"}}>Especialidad: {doctor.especialidad}</h2>
                        <h2 style={{color: "purple"}}>Salario: {doctor.salario}</h2>
                        <h2 style={{color: "purple"}}>ID Hospital: {doctor.idHospital}</h2>
                    </div>)
                })
            )
        }

      </div>
    )
  }
}
