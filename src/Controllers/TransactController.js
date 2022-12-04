import TransactModel from "../Models/TransactModel";

const url = "http://132.226.60.71:8080/api";


tramiteAux = {
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
    descripcion: ""
}

$(document).ready(function registerTransact(transact) {

    $('.btn').click(function () {
        $.ajax({
            url: url + "/tramite",
            type: "POST",
            data: TransactModel.transactToJson(transact),
            dataType: "json",
            sucess: function (data) {
                console.log(data);
                return TransactModel.toTransact(data);
            },
            error: function (data) {
                console.log(data);
            }
        });
    });

});

function checkInfo(tramite) {
    error = "";
    if(tramite.numeroVU == ""){
        error = "VU";
    }
    if(tramite.fechaRecepcion == "dd/mm/aaaa"){
        error = "Fecha Recepcion";
    }
    if(tramite.tipoPeticionario == "Tipo Peticionario"){
        error = "Tipo Peticionario";
    }
    if(tramite.nombrePeticionario == ""){
        error = "Peticionario";
    }
    if(tramite.tipoPQRSF == "Tipo PQRSF"){
        error = "Tipo PQRSF";
    }
    if(tramite.asunto == ""){
        error = "Asunto";
    }
    if(tramite.transladoA == ""){
        error = "Traslado";
    }
    if(tramite.dependencia == "Dependencia"){
        error = "Dependencia";
    }
    if(tramite.numeroOficio == ""){
        error = "Numero Oficio";
    }
    if(tramite.direccion == ""){
        error = "Direccion";
    }
    if(tramite.telefono == ""){
        error = "Telefono";
    }
    if(tramite.celular == ""){
        error = "Celular";
    }
    if(tramite.email == ""){
        error = "Email";
    }
    if(tramite.medioRecepcion == "Medio de Recepcion"){
        error = "Medio de Recepcion";
    }
    if(tramite.descripcion == ""){
        error = "Descripcion";
    }

    if(error != ""){
        return error;
    }else {
        tramiteAux.numeroVU = tramite.numeroVU;
        tramiteAux.fechaRecepcion = tramite.fechaRecepcion;
        tramiteAux.nombrePeticionario = tramite.nombrePeticionario;
        tramiteAux.asunto = tramite.asunto;
        tramiteAux.transladoA = tramite.transladoA;
        tramiteAux.numeroOficio = tramite.numeroOficio;
        tramiteAux.direccion = tramite.direccion;
        tramiteAux.telefono = tramite.telefono;
        tramiteAux.celular = tramite.celular;
        tramiteAux.email = tramite.email;
        tramiteAux.descripcion = tramite.descripcion;
        

        if(tramite.tipoPQRSF == "Peticion"){
            tramiteAux.idTipoTramite = 1;
        }else if(tramite.tipoPQRSF == "Queja"){
            tramiteAux.idTipoTramite = 2;
        }else if(tramite.tipoPQRSF == "Reclamo"){
            tramiteAux.idTipoTramite = 3;
        }else if(tramite.tipoPQRSF == "Sugerencia"){
            tramiteAux.idTipoTramite = 4;
        }else if(tramite.tipoPQRSF == "Felicitacion"){
            tramiteAux.idTipoTramite = 5;
        } 

        if(tramite.medioRecepcion == "Digital"){
            tramiteAux.idTipoRecepcion = 1;
        }else if(tramite.medioRecepcion == "Físico"){
            tramiteAux.idTipoRecepcion = 2;
        }

        if(tramite.dependencia == "Dependencia 1"){
            tramiteAux.idDependencia = 1;
        }else if(tramite.dependencia == "Dependencia 2"){
            tramiteAux.idDependencia = 2;
        }else if(tramite.dependencia == "Dependencia 3"){
            tramiteAux.idDependencia = 3;
        }else if(tramite.dependencia == "Dependencia 4"){
            tramiteAux.idDependencia = 4;
        }else if(tramite.dependencia == "Dependencia 5"){
            tramiteAux.idDependencia = 5;
        }

        this.registerTransact(tramiteAux);
        return error;
    }

}





