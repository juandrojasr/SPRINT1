class Usuario{
    constructor (u, d, t, cl){
        this.usuario = u
        this.documento = d
        this.tipoUsuario = t
        this.clave = cl
    }
}

let usuarios = [
    { usuario: "Mario Moreno", documento: 654321, tipoUsuario: "Cliente", clave: 1234 },
    { usuario: "Roberto Gomez Bolaños", documento: 9876543, tipoUsuario: "Cliente", clave: 4321 },
    { usuario: "Radamel Falcao", documento: 4567890, tipoUsuario: "Cliente", clave: 0987 },
    { usuario: "Gustavo Cerati", documento: 7890123, tipoUsuario: "Cliente", clave: 7890 },
    { usuario: "Leonel Messi", documento: 1357912, tipoUsuario: "Cliente", clave: 9876 },
    { usuario: "Cristiano Ronaldo", documento: 2468012, tipoUsuario: "Administrador", clave: 3456 }
]

class Billete {
    constructor(v, c) {
        this.valor = v;
        this.cantidad = c;
    }
}

let billetes = []
billetes.push(new Billete(100000, 10))
billetes.push(new Billete(50000, 10))
billetes.push(new Billete(20000, 10))
billetes.push(new Billete(10000, 10))
billetes.push(new Billete(5000, 10))

function dineroEnCajero() {
    total = 0
    for (let tot of billetes) {
        total = total + tot.valor * tot.cantidad;
    }
    console.log("Dinero disponible en el cajero es: $" + total);
}

console.table(billetes)
dineroEnCajero()
console.table(usuarios)

let ingresoUsuario = 0
let contraseña = 0

do{
ingresoUsuario = parseInt(prompt("ingrese documento del usuario por favor"))
let busquedaUsuario = usuarios.find(identificacion => identificacion.documento === ingresoUsuario)
contraseña = parseInt(prompt("ingrese la clave por favor"))
let busquedaContraseña = usuarios.find(password => password.clave === contraseña)

// Ingreso de administrador y deposito de dinero
if (ingresoUsuario === 2468012 && contraseña === 3456) {
    let cant_cien = prompt("Indica la cantidad de billetes de $100 a ingresar")
    billetes[0].cantidad = billetes[0].cantidad + parseInt(cant_cien)
    alert("Se ha depositado " + cant_cien + " Billetes de: $100")

    let cant_cincuenta = prompt("Indica la cantidad de billetes de $50 a ingresar")
    billetes[1].cantidad = billetes[1].cantidad + parseInt(cant_cincuenta)
    alert("Se ha depositado " + cant_cincuenta + " Billetes de: $50")

    let cant_veinte = prompt("Indica la cantidad de billetes de $20 a ingresar")
    billetes[2].cantidad = billetes[2].cantidad + parseInt(cant_veinte)
    alert("Se ha depositado " + cant_veinte + " Billetes de: $20")

    let cant_diez = prompt("Indica la cantidad de billetes de $10 a ingresar")
    billetes[3].cantidad = billetes[3].cantidad + parseInt(cant_diez)
    alert("Se ha depositado " + cant_diez + " Billetes de: $10")

    let cant_cinco = prompt("Indica la cantidad de billetes de $5 a ingresar")
    billetes[4].cantidad = billetes[4].cantidad + parseInt(cant_cinco)
    alert("Se ha depositado " + cant_cinco + " Billetes de: $5")
}

//Ingreso de cliente y retiro de dinero
if (busquedaUsuario != undefined && busquedaContraseña != undefined) {
    let _cant_cien = prompt("Indica la cantidad de billetes de $100 a ingresar inferior a: "+ billetes[0].cantidad +" billetes")
    if(billetes[0] >= _cant_cien){
    billetes[0].cantidad = billetes[0].cantidad - parseInt(_cant_cien)
    alert("Se ha retirado " + _cant_cien + " Billetes de: $100")
    }else{
        alert("Yuca mi perri no hay esa cantidad de villegas")
    }

    let _cant_cincuenta = prompt("Indica la cantidad de billetes de $50 a ingresar inferior a: "+ billetes[1].cantidad +" billetes")
    if(billetes[1] >= _cant_cincuenta){
    billetes[1].cantidad = billetes[1].cantidad - parseInt(_cant_cincuenta)
    alert("Se ha retirado " + _cant_cincuenta + " Billetes de: $50")
    }else{
        alert("Yuca mi perri no hay esa cantidad de villegas")
    }

    let _cant_veinte = prompt("Indica la cantidad de billetes de $20 a ingresar inferior a: "+ billetes[2].cantidad +" billetes")
    if(billetes[2] >= _cant_veinte){
    billetes[2].cantidad = billetes[2].cantidad - parseInt(_cant_veinte)
    alert("Se ha retirado " + _cant_veinte + " Billetes de: $20")
    }else{
        alert("Yuca mi perri no hay esa cantidad de villegas")
    }

    let _cant_diez = prompt("Indica la cantidad de billetes de $50 a ingresar inferior a: "+ billetes[3].cantidad +" billetes")
    if(billetes[3] >= _cant_diez){
    billetes[3].cantidad = billetes[3].cantidad - parseInt(_cant_diez)
    alert("Se ha retirado " + _cant_diez + " Billetes de: $10")
    }else{
        alert("Yuca mi perri no hay esa cantidad de villegas")
    }

    let _cant_cinco = prompt("Indica la cantidad de billetes de $5 a ingresar inferior a: "+ billetes[4].cantidad +" billetes")
    if(billetes[4] >= _cant_cinco){
    billetes[4].cantidad = billetes[4].cantidad - parseInt(_cant_cinco)
    alert("Se ha retirado " + _cant_cinco + " Billetes de: $5")
    }else{
        alert("Yuca mi perri no hay esa cantidad de villegas")
    }
}else{
    alert("usuario o clave incorrecta")
}
console.table(billetes)
dineroEnCajero()
}while(ingresoUsuario)
