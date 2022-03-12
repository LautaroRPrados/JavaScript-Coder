alert("BIENVENIDO A PROYECTO WALLET")
alert("Por favor ingrese su cuenta o registrese")

function iniciarSesion(a) {
    let mail = undefined
    let contrasena = undefined
    console.log(a)
    while (a != isNaN) {
        console.log(a)
        if (a == 1) {
            let ingresarMail = (prompt("ingrese el mail de su cuenta porfavor"))
            let ingresarContra = (prompt("Ingrese su contrasena"))
            if (ingresarMail == "juanCarlos@gmail.com" && ingresarContra == 1234) {
                mail == ingresarMail
                contrasena == ingresarContra
                alert("Bienvenido Rey")
                break
            }
            else if (ingresarMail || ingresarContra==null){
                break
            }
             else {
                alert("Ese mail o contrasena son invalidos, por favor ingrese uno valido o registrese")
                continue
            }

        } else if (a == 2) {
            window.location.href = "https://support.google.com/?hl=es";
        } else {
            alert("Ingrese un numero valido")
            break
        }
    }
}

let cuenta = (prompt("Ingrese '1' para iniciar sesion o ingrese '2' para ir a ayuda del usuario"))
iniciarSesion(cuenta)

let coins=[];
let cantidad = 5;

do{
    let cargarCoins = prompt("Ingrese sus coins favoritas");
    coins.push (cargarCoins.toUpperCase());
    document.write(coins.length)
}while(coins.length!=cantidad)
let coinsDos=coins.concat(['STABLECOINS:','USDT','BUSD'])
alert(coinsDos.join("\n"))

