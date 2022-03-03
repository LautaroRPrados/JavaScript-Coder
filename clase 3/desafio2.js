var precio = prompt("Introduzca Precio producto (en pesos): ");
var descuento = prompt("Introduzca descuento (en pesos): ");
 
document.write("Precio= " + calculoPVP(precio,descuento)[0] + " $ " + "<br>");
document.write("IVA = " + calculoPVP(precio,descuento)[1] + " $ " + "<br>" );
document.write("PVP= " + calculoPVP(precio,descuento)[2] + " $ ");
 
function calculoPVP(precio, descuento) {
      var IVA = 0.21;
      var precioNeto = precio - descuento;
      var cantidadIVA = precioNeto * IVA;
      var PVP = precioNeto + cantidadIVA;
      var calculo = [precioNeto, cantidadIVA, PVP];
 
      return calculo}