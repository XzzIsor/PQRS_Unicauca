import React, {useState} from "react";
import {CustomInput} from "../CustomInput/custom_input";
import { CustomInputLarge } from "../CustomInput/custom_input";
import DropdownCustom from "../Dropdown/dropdown";
import CustomButton from "../CustomButton/custom_button";
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

    const [numeroVU, setNumeroVU] = useState('');
    const [fechaRecepcion, setFechaRecepcion] = useState('');
    const [tipoPeticionario, setTipoPeticionario] = useState('');
    const [nombrePeticionario, setNombrePeticionario] = useState('');
    const [tipoPQRSF, setTipoPQRSF] = useState('');
    const [asunto, setAsunto] = useState('');
    const [transladoA, setTransladoA] = useState('');
    const [dependencia, setDependencia] = useState('');
    const [numeroOficio, setNumeroOficio] = useState('');
    const [direccion, setDireccion] = useState('');
    const [telefono, setTelefono] = useState('');
    const [celular, setCelular] = useState('');
    const [email, setEmail] = useState('');
    const [medioRecepcion, setMedioRecepcion] = useState('');
    const [descripcion, setDescripcion] = useState('');

    var tramite = {
      numeroVU: numeroVU,
      fechaRecepcion: fechaRecepcion,
      tipoPeticionario: tipoPeticionario,
      nombrePeticionario: nombrePeticionario,
      tipoPQRSF: tipoPQRSF,
      asunto: asunto,
      transladoA: transladoA,
      dependencia: dependencia,
      numeroOficio: numeroOficio,
      direccion: direccion,
      telefono: telefono,
      celular: celular,
      email: email,
      medioRecepcion: medioRecepcion,
      descripcion: descripcion
    };

    return <div class= "backgroundRegister" style={{background: backgroundGradient}}> 
        <div className = "form-Content" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridGap: 20}}>
          <div className='column-1' > 
            <div> 
                <CustomInput type="text" placeholder="Número VU" onChange={event=>{setNumeroVU(event.target.value)}}/>
                <CustomInput type="date" placeholder="Fecha Recepcion" onChange={event=>{setFechaRecepcion(event.target.value)}}/>
                <CustomInput type="text" placeholder="Fecha Vencimiento" readOnly="true"/>
                <CustomInput type="text" placeholder="Peticionario" onChange={event=>{setNombrePeticionario(event.target.value)}}/>
                <DropdownCustom options={optionsTipoPeticionario} value={optionsTipoPeticionario[0]} title = "Tipo Peticionario" onChange={event=>{setTipoPeticionario(event.value)}}></DropdownCustom>
                <DropdownCustom options={optionsTipoPQRS} value={optionsTipoPQRS[0]} title = "Tipo PQRSF" onChange={event=>{setTipoPQRSF(event.value)}}></DropdownCustom>
                <CustomInput type="text" placeholder="Asunto" onChange={event=>{setAsunto(event.target.value)}}/>
                <CustomInput type="text" placeholder="Traslado a" onChange={event=>{setTransladoA(event.target.value)}}/>
                <CustomInputLarge type="text" placeholder="Descripcion" onChange={event=>{setDescripcion(event.target.value)}}/>
                <CustomButton text="Guardar" onClick = {checkState(tramite)}></CustomButton>

            </div>
          </div>
          <div className='column-2'>
            <div>
                <DropdownCustom options={optionsDependencia} value={optionsDependencia[0]} title = "Dependencia" onChange={event=>{setDependencia(event.value)}}></DropdownCustom>
                <CustomInput type="text" placeholder="No. Oficio" onChange={event=>{setNumeroOficio(event.target.value)}}/>
                <CustomInput type="text" placeholder="Direccion" onChange={event=>{setDireccion(event.target.value)}}/>
                <CustomInput type="number" placeholder="Telefono" onChange={event=>{setTelefono(event.target.value)}}/>
                <CustomInput type="number" placeholder="Celular" onChange={event=>{setCelular(event.target.value)}}/>
                <CustomInput type="email" placeholder="E-Mail" onChange={event=>{setEmail(event.target.value)}}/>
                <DropdownCustom options={optionMedioRecepcion} value={optionMedioRecepcion[0]} title = "Medio de Recepción" onChange={event=>{setMedioRecepcion(event.value)}}></DropdownCustom>
            </div>
          </div>
        </div>
        
    </div>

}

function checkState(tramite){
  if (checkInputData(tramite) === 1){
    alert("El campo Número VU no puede estar vacío");
    console.log(tramite);
  }
}


function checkInputData(tramite){
  if(tramite.numeroVU === ''){
    return 1;
  }
  if(tramite.fechaRecepcion === ''){
    return 2;
  }
  if(tramite.nombrePeticionario === ''){
    return 3;
  }
  if(tramite.asunto === ''){
    return 4;
  }
  if(tramite.transladoA === ''){
    return 5;
  }
  if(tramite.descripcion === ''){
    return 6;
  }
  if(tramite.numeroOficio === ''){
    return 7;
  }
  if(tramite.direccion === ''){
    return 8;
  }
  if(tramite.telefono === ''){
    return 9;
  }
  if(tramite.celular === ''){
    return 10;
  }
  if(tramite.email === ''){
    return 11;
  }
  if(tramite.tipoPQRSF === 'Tipo PQRSF'){
    return 12;
  }
  if(tramite.tipoPeticionario === 'Tipo Peticionario'){
    return 13;
  }
  if(tramite.dependencia === 'Dependencia'){
    return 14;
  }
  if(tramite.medioRecepcion === 'Medio de Recepción'){
    return 15;
  }

  return 0;
}

export default RegisterBackground;