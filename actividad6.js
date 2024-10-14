let citas = [];
function agregarCita(nombre, fecha, hora, doctor) {
    let nuevaCita = {
        nombre: nombre,
        fecha: fecha,
        hora: hora,
        doctor: doctor
    };
    citas.push(nuevaCita);
    console.log("Cita agregada con éxito.");
}
function mostrarCitas() {
    if (citas.length === 0) {
        console.log("No hay citas programadas.");
    } else {
        console.log("Citas programadas:");
        for (let i = 0; i < citas.length; i++) {
            let cita = citas[i];
            console.log((i + 1) + ". " + cita.nombre + " - " + cita.fecha + " " + cita.hora + " con Dr. " + cita.doctor);
        }
    }
}
function cancelarCita(numero) {
    let indice = Number(numero) - 1;
    if (indice >= 0 && indice < citas.length) {
        let citaCancelada = citas.splice(indice, 1)[0];
        console.log("Cita cancelada: " + citaCancelada.nombre + " el " + citaCancelada.fecha);
    } else {
        console.log("Número de cita no válido.");
    }
}
function menu() {
    while (true) {
        prompt("--- Menú de Citas Médicas ---");
        prompt("1. Agregar cita");
        prompt("2. Ver citas");
        prompt("3. Cancelar cita");
        prompt("4. Salir");

        let opcion = prompt("Elige una opción (1-4):");

        if (opcion === "1") {
            let nombre = prompt("Nombre del paciente:");
            let fecha = prompt("Fecha de la cita (ejemplo: 2024-10-08):");
            let hora = prompt("Hora de la cita (ejemplo: 07:30):");
            let doctor = prompt("Nombre del doctor:");
            agregarCita(nombre, fecha, hora, doctor);
        } else if (opcion === "2") {
            mostrarCitas();
        } else if (opcion === "3") {
            mostrarCitas();
            let numero = prompt("Número de la cita a cancelar:");
            cancelarCita(numero);
        } else if (opcion === "4") {
            console.log("Gracias por usar el sistema. ¡Hasta luego!");
            break;
        } else {
            console.log("Opción no válida. Por favor, intenta de nuevo.");
        }
    }
}
menu();