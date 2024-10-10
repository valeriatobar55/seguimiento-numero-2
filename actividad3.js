
let totalUsuarios = 0;
let usuariosAsesoria = 0;
let usuariosLlamadaTelefonica = 0;
let usuariosTransferidos = 0;

function registrarAtencion() {
    let cedula = prompt("Ingrese su número de cédula:");
    let tipoAtencion = prompt("Seleccione el tipo de atención (1: Asesoría, 2: Llamada telefónica):");

    if (tipoAtencion === "1") {
        
        usuariosAsesoria++;
        console.log("Cédula: " + cedula + " Atendido en asesoría.");
        totalUsuarios++;
    } else if (tipoAtencion === "2") {
        
        usuariosLlamadaTelefonica++;
        console.log("Cédula: " + cedula + " Atendido por llamada telefónica.");
        totalUsuarios++;

        let transferir = prompt("¿Desea transferir a asesoría? (1: Sí, 2: No):");
        if (transferir === "1") {
            usuariosAsesoria++;
            usuariosTransferidos++;
            console.log("Cédula: " + cedula + "Transferido a asesoría.");
        }
    } else {
        console.log("Tipo de atención no válida.");
    }
}


function mostrarEstadisticas() {
    console.log("Estadísticas de atención:");
    console.log("Total de usuarios atendidos: " + totalUsuarios);
    console.log("Usuarios atendidos en asesoría: " + usuariosAsesoria);
    console.log("Usuarios atendidos por llamada telefónica: " + usuariosLlamadaTelefonica);
    console.log("Transferencias de llamada telefónica a asesoría: " + usuariosTransferidos);
}

function iniciarAtencion() {
    let continuar = true;
    while (continuar) {
        registrarAtencion();
        let seguir = prompt("¿Desea registrar otra atención? (1: Sí, 2: No):");
        if (seguir !== "1") {
            continuar = false;
        }
    }
    mostrarEstadisticas();
}


iniciarAtencion();