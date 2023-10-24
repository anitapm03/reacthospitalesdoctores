import React, { Component } from 'react';
import Global from '../Global';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

export default class CreateHospital extends Component {
    urlHospitales = Global.urlApiHospitales;

    cajaId = React.createRef();
    cajaNombre = React.createRef();
    cajaDireccion = React.createRef();
    cajaTelefono = React.createRef();
    cajaCamas = React.createRef();

    state = {
        mensaje: "",
        status: false
    }

    insertHospital = (e) => {
        if(e != null){
            e.preventDefault();
        }

        //debemos respetar los tipos de dato respecto al servicio
        var idhospital = parseInt(this.cajaId.current.value);
        var nombre = this.cajaNombre.current.value;
        var direccion = this.cajaDireccion.current.value;
        var telefono = this.cajaTelefono.current.value;
        var camas = parseInt(this.cajaCamas.current.value);

        var request = "webresources/hospitales/post";

        //debemos declarar un objeto JSON con mismo nombre de propiedades
        var hospital = {
            idhospital: idhospital,
            nombre: nombre,
            direccion: direccion,
            telefono: telefono,
            camas: camas
        }

        //post en axios recibe la url y el objeto
        axios.post(this.urlHospitales+request, hospital).then(response => {
            console.log("insertado!");
            this.setState({
                mensaje: "Hospital insertado correctamente",
                status: true
            })
        })
        
    }

    
  render() {
    return (
      <div>
        <h1 style={{color:"green"}}>Crear un hospital</h1>
        <h2 style={{color:"blue"}}>{this.state.mensaje}</h2><br></br>

        {
            this.state.status == true &&
            (<Navigate to="/listahospitales" />)
        }

        <form>
            <label>ID Hospital</label>
            <input type='text' className='form-control' ref={this.cajaId}/><br></br><br></br>

            <label>Nombre</label>
            <input type='text' className='form-control' ref={this.cajaNombre}/><br></br><br></br>

            <label>Dirección</label>
            <input type='text' className='form-control' ref={this.cajaDireccion}/><br></br><br></br>

            <label>Teléfono</label>
            <input type='text' className='form-control' ref={this.cajaTelefono}/><br></br><br></br>

            <label>Camas</label>
            <input type='text' className='form-control' ref={this.cajaCamas}/><br></br><br></br>

            <button className='btn btn-success' onClick={this.insertHospital}>Crear!</button>
        </form>
      </div>
    )
  }
}
