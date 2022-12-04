import React from "react";
import {CustomInput} from "../CustomInput/custom_input";
import { CustomInputLarge } from "../CustomInput/custom_input";
import { CustumInputSubmit } from "../CustomInput/custom_input";
import DropdownCustom from "../Dropdown/dropdown";
import './background_register.css';


const backgroundGradient = 'linear-gradient(335deg, rgba(202, 39,39, .91), rgba(202, 39,39, .91), #182F73,#182F73)';


function RegisterBackground() {
    
    const optionsTipoPeticionario = [
       'Estudiante Pregrado',
       'Estudiante Posgrado',
       'Docente',
       'Empleado',
       'Egresado',
       'Jubilado',
       'Persona Externa'   
    ];

    const optionsTipoPQRS = [
      'Peticion',
      'Queja',
      'Reclamo',
      'Sugerencia',
      'Felicitacion'
    ];

    const optionsDependencia = [
      'Dependencia 1',
      'Dependencia 2',
      'Dependencia 3',
      'Dependencia 4',
      'Dependencia 5'
    ];

    const optionMedioRecepcion = [
      'Digital',
      'Físico'
    ];

    var tramite = {
      numeroVU: '',
      fechaRecepcion: '',
      tipoPeticionario: '',
      nombrePeticionario: '',
      tipoPQRSF: '',
      asunto: '',
      transladoA: '',
      dependencia: '',
      numeroOficio: '',
      direccion: '',
      telefono: 0,
      celular: 0,
      email: '',
      medioRecepcion: '',
      descripcion: ''
    };

    return <div class= "backgroundRegister" style={{background: backgroundGradient}}> 
        <div className = "form-Content" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridGap: 20}}>
          <div className='column-1' > 
            <div> 
                <CustomInput type="text" placeholder="Número VU" onChange={(value)=>{tramite.numeroVU = value}}/>
                <CustomInput type="date" placeholder="Fecha Recepcion" onChange={(value)=>{tramite.fechaRecepcion = value}}/>
                <CustomInput type="text" placeholder="Fecha Vencimiento" readOnly="true"/>
                <CustomInput type="text" placeholder="Peticionario" onChange={(value)=>{tramite.nombrePeticionario = value}}/>
                <DropdownCustom options={optionsTipoPeticionario} value={optionsTipoPeticionario[0]} title = "Tipo Peticionario" onChange={(value)=>{tramite.tipoPeticionario = value}}></DropdownCustom>
                <DropdownCustom options={optionsTipoPQRS} value={optionsTipoPQRS[0]} title = "Tipo PQRSF" onChange={(value)=>{tramite.tipoPQRSF = value}}></DropdownCustom>
                <CustomInput type="text" placeholder="Asunto" onChange={(value)=>{tramite.asunto = value}}/>
                <CustomInput type="text" placeholder="Traslado a" onChange={(value)=>{tramite.transladoA = value}}/>
                <CustomInputLarge type="text" placeholder="Descripcion" onChange={(value)=>{tramite.descripcion = value}}/>
                <CustumInputSubmit type="button" value="Guardar" onClick={
                  ()=>{checkState()}
                }/>

            </div>
          </div>
          <div className='column-2'>
            <div>
                <DropdownCustom options={optionsDependencia} value={optionsDependencia[0]} title = "Dependencia" onChange={(value)=>{tramite.dependencia = value}}></DropdownCustom>
                <CustomInput type="text" placeholder="No. Oficio" onChange={(value)=>{tramite.numeroOficio = value}}/>
                <CustomInput type="text" placeholder="Direccion" onChange={(value)=>{tramite.direccion = value}}/>
                <CustomInput type="number" placeholder="Telefono" onChange={(value)=>{tramite.telefono = value}}/>
                <CustomInput type="number" placeholder="Celular" onChange={(value)=>{tramite.celular = value}}/>
                <CustomInput type="email" placeholder="E-Mail" onChange={(value)=>{tramite.email = value}}/>
                <DropdownCustom options={optionMedioRecepcion} value={optionMedioRecepcion[0]} title = "Medio de Recepción" onChange={(value)=>{tramite.medioRecepcion = value}}></DropdownCustom>
            </div>
          </div>
        </div>
        
    </div>

}

function checkState(tramite){
  console.log(tramite);
}

export default RegisterBackground;