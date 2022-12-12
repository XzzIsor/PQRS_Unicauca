import {toTransact, transactToJson} from "../Models/TransactModel";
import urlApi from "../APIURL";


async function registerTransact(tramite) {
    let url = urlApi + "tramite";

    const response = await fetch('https://tramites-backend-production.up.railway.app/api/tramite', {
        method: 'POST',
        body: transactToJson(tramite),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    }).then(response => {
        return response.status === 200 ? true : false;
    }).catch(error => {
        return false;
    });

    return response === undefined ? false : true;
}

async function checkInfoRegister(tramite) {
    let tramiteAux = {
        nombrePeticionario: "",
        idTipoTramite: 0,
        correo: "",
        numeroVU: 0,
        celular: "",
        fechaRecepcion: "",
        telefono: "",
        direccion: "",
        asunto: "",
        numeroOficio: "",
        idDependencia: 0,
        idTipoRecepcion: 0,
        descripcion: "",
        idTipoTipoPeticionario: ""
    };

        tramiteAux.numeroVU = tramite.numeroVU;
        tramiteAux.fechaRecepcion = tramite.fechaRecepcion;
        tramiteAux.nombrePeticionario = tramite.nombrePeticionario;
        tramiteAux.asunto = tramite.asunto;
        tramiteAux.numeroOficio = tramite.numeroOficio;
        tramiteAux.direccion = tramite.direccion;
        tramiteAux.telefono = tramite.telefono;
        tramiteAux.celular = tramite.celular;
        tramiteAux.correo = tramite.email;
        tramiteAux.descripcion = tramite.descripcion;
        

        if(tramite.tipoPQRSF === "Peticion"){
            tramiteAux.idTipoTramite = 1;
        }else if(tramite.tipoPQRSF === "Queja"){
            tramiteAux.idTipoTramite = 2;
        }else if(tramite.tipoPQRSF === "Reclamo"){
            tramiteAux.idTipoTramite = 3;
        }else if(tramite.tipoPQRSF === "Sugerencia"){
            tramiteAux.idTipoTramite = 4;
        }else if(tramite.tipoPQRSF === "Felicitacion"){
            tramiteAux.idTipoTramite = 5;
        } 

        if(tramite.medioRecepcion === "Digital"){
            tramiteAux.idTipoRecepcion = 1;
        }else if(tramite.medioRecepcion === "Físico"){
            tramiteAux.idTipoRecepcion = 2;
        }

        if(tramite.dependencia === "Dependencia 1"){
            tramiteAux.idDependencia = 1;
        }else if(tramite.dependencia === "Dependencia 2"){
            tramiteAux.idDependencia = 2;
        }else if(tramite.dependencia === "Dependencia 3"){
            tramiteAux.idDependencia = 3;
        }else if(tramite.dependencia === "Dependencia 4"){
            tramiteAux.idDependencia = 4;
        }else if(tramite.dependencia === "Dependencia 5"){
            tramiteAux.idDependencia = 5;
        }

        if(tramite.tipoPeticionario === "Docente"){
            tramiteAux.idTipoTipoPeticionario = 1;
        }else if(tramite.tipoPeticionario === "Estudiante de pregrado"){
            tramiteAux.idTipoTipoPeticionario = 2;
        }else if(tramite.tipoPeticionario === "Estudiante de posgrado"){
            tramiteAux.idTipoTipoPeticionario = 3;
        }else if(tramite.tipoPeticionario === "Persona externa"){
            tramiteAux.idTipoTipoPeticionario = 4;
        }else if(tramite.tipoPeticionario === "Empleado"){
            tramiteAux.idTipoTipoPeticionario = 5;
        }else if(tramite.tipoPeticionario === "Jubilado"){
            tramiteAux.idTipoTipoPeticionario = 6;
        }
        
        //prueba();
        //return true;
        let res = await registerTransact(tramiteAux);
        return res;
    }

export default checkInfoRegister;



