const crearSistemaGestionTurnos = () => {
    let colaEspera = [];
    let contadorTurnos = 0;

    const tomarTurno = () => {
        contadorTurnos++;
        const nuevoTurno = {
            numero: contadorTurnos,
            timestamp: new Date()
        };
        colaEspera.push(nuevoTurno);
        return nuevoTurno.numero;
    };

    const llamarCliente = () => {
        if (colaEspera.length === 0) {
            return "No hay clientes en espera.";
        }
        const clienteLlamado = colaEspera.shift();
        return `Llamando al cliente con turno número ${clienteLlamado.numero}`;
    };

    const mostrarColaEspera = () => {
        return colaEspera.map(turno => turno.numero);
    };

    const obtenerContadorTurnos = () => {
        return contadorTurnos;
    };

    return {
        tomarTurno,
        llamarCliente,
        mostrarColaEspera,
        obtenerContadorTurnos
    };
};

const sistema = crearSistemaGestionTurnos();

console.log("Cliente 1 toma un turno:", sistema.tomarTurno());
console.log("Cliente 2 toma un turno:", sistema.tomarTurno());
console.log("Cliente 3 toma un turno:", sistema.tomarTurno());

console.log("Cola de espera actual:", sistema.mostrarColaEspera());
console.log("Contador de turnos:", sistema.obtenerContadorTurnos());

console.log(sistema.llamarCliente());
console.log(sistema.llamarCliente());

console.log("Cola de espera actualizada:", sistema.mostrarColaEspera());