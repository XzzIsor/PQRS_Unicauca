import React, {useState} from "react";
import {CustomInput} from "../CustomInput/custom_input";
import { CustomInputLarge } from "../CustomInput/custom_input";
import DropdownCustom from "../Dropdown/dropdown";
import CustomButton from "../CustomButton/custom_button";
import checkInfoRegister from "../../Controllers/TransactController";
import './background_register.css';


const backgroundGradient = 'linear-gradient(335deg, rgba(202, 39,39, .91), rgba(202, 39,39, .91), #182F73,#182F73)';


function RegisterBackground() {
    
    const optionsTipoPeticionario = [
       'Docente',
       'Estudiante de Pregrado',
       'Estudiante de Posgrado',
       'Empleado',
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

    const [fechaVencimiento, setFechaVencimiento] = useState('Fecha Vencimiento');
    
    let tramite = {
      numeroVU: '',
      fechaRecepcion: '',
      tipoPeticionario: 'Tipo Peticionario',
      nombrePeticionario: '',
      tipoPQRSF: 'Tipo PQRSF',
      asunto: '',
      transladoA: '',
      dependencia: 'Dependencia',
      numeroOficio: '',
      direccion: '',
      telefono: '',
      celular: '',
      email: '',
      medioRecepcion: 'Medio de Recepción',
      descripcion: ''
    };

    return <div class= "backgroundRegister" style={{background: backgroundGradient}}> 
      <div className="form-Container">
        <div className = "form-Content" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridGap: 20}}>
          <div className='column-1' > 
            <div> 
                <CustomInput type="text" placeholder="Número VU" onChange={event=>{tramite.numeroVU = event.target.value}}/>
                <CustomInput type="date" placeholder="Fecha Recepcion" onChange={event=>{/*checkDate(event.target.value, setFechaVencimiento);*/
                                                                                             let fecha = new Date(event.target.value);
                                                                                             tramite.fechaRecepcion = fecha.getDate() + '/' + (fecha.getMonth() + 1) + '/' + fecha.getFullYear();
                                                                                             }}/>
                <CustomInput type="text" placeholder={fechaVencimiento} readOnly="true"/>
                <CustomInput type="text" placeholder="Peticionario" onChange={event=>{tramite.nombrePeticionario = event.target.value;}}/>
                <DropdownCustom options={optionsTipoPeticionario} value={optionsTipoPeticionario[0]} title = "Tipo Peticionario" onChange={event=>{tramite.tipoPeticionario = event.value;}}></DropdownCustom>
                <DropdownCustom options={optionsTipoPQRS} value={optionsTipoPQRS[0]} title = "Tipo PQRSF" onChange={event=>{tramite.tipoPQRSF = event.value;}}></DropdownCustom>
                <CustomInput type="text" placeholder="Asunto" onChange={event=>{tramite.asunto = event.target.value;}}/>
                <CustomInput type="text" placeholder="Traslado a" onChange={event=>{tramite.transladoA = event.target.value;}}/>
                
            </div>
          </div>
          <div className='column-2'>
            <div>
                <DropdownCustom options={optionsDependencia} value={optionsDependencia[0]} title = "Dependencia" onChange={event=>{tramite.dependencia = event.value}}></DropdownCustom>
                <CustomInput type="text" placeholder="No. Oficio" onChange={event=>{tramite.numeroOficio = event.target.value;}}/>
                <CustomInput type="text" placeholder="Direccion" onChange={event=>{tramite.direccion = event.target.value}}/>
                <CustomInput type="number" placeholder="Teléfono" onChange={event=>{tramite.telefono = event.target.value}}/>
                <CustomInput type="number" placeholder="Celular" onChange={event=>{tramite.celular = event.target.value}}/>
                <CustomInput type="email" placeholder="E-Mail" onChange={event=>{tramite.email = event.target.value}}/>
                <DropdownCustom options={optionMedioRecepcion} value={optionMedioRecepcion[0]} title = "Medio de Recepción" onChange={event=>{tramite.medioRecepcion = event.value}}></DropdownCustom>
            </div>
          </div>
        </div>
          <CustomInputLarge type="text" placeholder="Descripcion" onChange={event=>{tramite.descripcion = event.target.value;}}/>
          <CustomButton text="Guardar" onClick = {async () => await checkState(tramite)}></CustomButton>
      </div>
    </div>

}

function checkDate(date, setFechaVencimiento){
  let today = new Date();
  let dateToCheck = new Date(date);
  let month = 0;
  let day = 0;
  let year = 0;
  if(dateToCheck <= today){
    let newDay = dateToCheck.getDate() + 15;
    if(dateToCheck.getMonth() === 2 || dateToCheck.getMonth() === 5 || dateToCheck.getMonth() === 8 || dateToCheck.getMonth() === 10){
      if(newDay > 30){
        month = dateToCheck.getMonth() + 1;
        day = newDay - 30;
        dateToCheck.setMonth(month);
        dateToCheck.setDate(day);
      }else{
        dateToCheck.setDate(newDay);
      }
    }else if(dateToCheck.getMonth() === 1){
      if(newDay > 28){
        day = newDay - 28;
        dateToCheck.setMonth(2);
        dateToCheck.setDate(day);
      }else{
        dateToCheck.setDate(newDay);
      }
    }else if(dateToCheck.getMonth() === 11){
      if(newDay > 31){
        day = newDay - 31;
        year = dateToCheck.getFullYear() + 1;
        dateToCheck.setMonth(0);
        dateToCheck.setDate(day);
        dateToCheck.setFullYear(year);
      }else{
        dateToCheck.setDate(newDay);
      }
    }else{
      if(newDay > 31){
        month = dateToCheck.getMonth() + 1;
        day = newDay - 31;
        dateToCheck.setMonth(month);
        dateToCheck.setDate(day);
      }else{
        dateToCheck.setDate(newDay);
      }
    }
    setFechaVencimiento(dateToCheck.getDate().toString() + "/" + (dateToCheck.getMonth() + 1).toString() + "/" +  dateToCheck.getFullYear().toString());
  }else{
    setFechaVencimiento("");
    alert("La fecha de recepción no puede ser mayor a la fecha actual");
  }
}

async function checkState(tramite){

  if (checkInputData(tramite) === true){

    let res = await checkInfoRegister(tramite);
    if(res === true){
      alert("Tramite registrado con exito");
    }else{
      alert("Error al registrar el tramite");
    }
  }else{
    console.log("Error");
  }
}


function checkInputData(tramite){
  let response = '';

  if(tramite.numeroVU === ''){
    response += '- Número VU \n';
  }
  if(tramite.fechaRecepcion === ''){
    response += "- Fecha Recepción\n";
  }
  if(tramite.nombrePeticionario === ''){
    response += '- Nombre Peticionario\n';
  }
  if(tramite.asunto === ''){
    response += '- Asunto\n';
  }
  if(tramite.transladoA === ''){
    response += "- Traslado A\n";
  }
  if(tramite.descripcion === ''){
    response += "- Descripción\n";
  }
  if(tramite.numeroOficio === ''){
    response += "- Número Oficio\n";
  }
  if(tramite.direccion === ''){
    response += "- Dirección\n";
  }
  if(tramite.telefono === ''){
    response += "- Teléfono\n";
  }
  if(tramite.celular === ''){
    response += "- Celular\n";
  }
  if(tramite.email === ''){
    response += "- E-Mail\n";
  }
  if(tramite.tipoPQRSF === 'Tipo PQRSF'){
    response += "- Debe seleccionar un tipo de PQRSF\n";
  }
  if(tramite.tipoPeticionario === 'Tipo Peticionario'){
    response += "- Debe seleccionar un tipo de Peticionario\n";
  }
  if(tramite.dependencia === 'Dependencia'){
    response += "- Debe seleccionar una dependencia\n";
  }
  if(tramite.medioRecepcion === 'Medio de Recepción'){
    response += "- Debe seleccionar un medio de recepción\n";
  }

  return response === '' ? true : alert( "Ingrese un valor para los campos: \n"+ response);
}

export default RegisterBackground;