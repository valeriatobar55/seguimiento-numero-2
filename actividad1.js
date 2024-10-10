let cuentas = { 
    cedula: "123456789", 
    saldo: 88000, 
    estado: true,
    pin: 1234
};

let intentos = 0;
let pinCorrecto = false;

// Paso 1: Validamos el PIN con un máximo de 3 intentos
while (intentos < 3 && !pinCorrecto) {
    let pin = prompt("Ingrese su pin");
    if (cuentas.pin === parseInt(pin)) {
        alert("Pin correcto");
        pinCorrecto = true;
    } else {
        intentos++;
        if (intentos < 3) {
            alert("Pin incorrecto, intente de nuevo");
        } else {
            alert("Ha excedido el número de intentos, saliendo de la aplicación");
            break;
        }
    }
}

if (pinCorrecto) {
    // Paso 2: Validamos la cédula
    let cedula = prompt("Ingrese su cédula");
    if (cuentas.cedula === cedula) {
        alert("Cédula correcta");

        // Menú principal
        let opcion = prompt("Marque 1 para realizar una consignación, 2 para retirar, 3 para transferir, 4 para consultar saldo");

        if (opcion === "1") {
            // Consignación
            let tipoConsignacion = prompt("Indique 1 para efectivo, 2 para cheque");
            let valorConsignacion = parseInt(prompt("Ingrese el valor de la consignación"));
            cuentas.saldo += valorConsignacion;
            alert("Consignación exitosa. Su nuevo saldo es: $" + cuentas.saldo);
        } 
        else if (opcion === "2") {
            // Retiro
            let valorRetiro = parseInt(prompt("Ingrese el valor del retiro en múltiplos de 50,000"));
            if (valorretiro % 50000 === 0 && valorRetiro <= cuentas.saldo) {
                cuentas.saldo -= valorRetiro;
                alert("Retiro exitoso. Puede tomar $" + valorRetiro + " de la bandeja principal. Su saldo es: $" + cuentas.saldo);
            } else if (valorRetiro % 50000 !== 0) {
                alert("El valor del retiro debe ser múltiplo de 50,000.");
            } else {
                alert("Saldo insuficiente.");
            }
        } 
        else if (opcion === "3") {
            // Transferencia
            let cuentaDestino = prompt("Ingrese el número de la cuenta destino");
            let valorTransferencia = parseInt(prompt("Ingrese el valor de la transferencia"));
            if (valorTransferencia <= cuentas.saldo) {
                cuentas.saldo -= valorTransferencia;
                alert("Transferencia exitosa de $" + valorTransferencia + " a la cuenta " + cuentaDestino + ". Su nuevo saldo es: $" + cuentas.saldo);
            } else {
                alert("Saldo insuficiente para la transferencia.");
            }
        } 
        else if (opcion === "4") {
            // Consulta de saldo
            alert("Su saldo actual es: $" + cuentas.saldo);
        } 
        else {
            alert("Opción inválida.");
        }

    } else {
        alert("Cédula incorrecta");
    }
}


