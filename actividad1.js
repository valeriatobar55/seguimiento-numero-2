let cuentas = { 

    cedula: 1234567789, 
    pin: 1234,
    saldo: 880, 
    estado: true 
}
function realizarretiro (){
 console.log (saldo =- valorretiro)   
}
function realizarconsignacion (){
    console.log (saldo =+ saldo)
}


let pin = prompt ("ingrese el pin")
let cedula = prompt ("ingrese su cedula")

if (pin == cuentas.pin && cedula == cuentas.cedula){
  
    switch (transanccion) {
        case (1): realizarretiro
            let valorretiro = prompt ("ingrese valor del retiro")
            if (valorretiro % 50000 == 0)
            
            break;

        case (2): realizarconsignacion
           let valordelaconsignacion = prompt ("ingrese el valor de la consignacion")
           let efectivoocheque = prompt (" ¿efectivo o cheque? ")
           if (efectivoocheque == efectivo )
           console.log ("va pagar con efectivo")
           else (efectivoocheque == cheque)
           console.log ("va pagar con cheque")

        break;
    }

}