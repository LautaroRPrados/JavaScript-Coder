alert("Hola usuario bienvenido! :)")
i=true
iniciar = prompt("Para iniciar el programa ingrese '1'. De lo contrario presione el boton 'Cancelar'")

while (i==true)

if (iniciar == 1){
    alert("Programa iniciado")
    break
}
else if (iniciar != Number && iniciar != null){
    alert("Por favor ingrese un caracter valido")
    iniciar = prompt("Para iniciar el programa ingrese '1'. De lo contrario presione el boton 'Cancelar'")
}

else{
    var response = confirm("Esta seguro?");
    if ( response == true )
    {
    alert("Programa Finalizado")
    break
    }else{
    alert("Genial!")
    iniciar = prompt("Para iniciar el programa ingrese '1'. De lo contrario presione el boton 'cancelar'")
    
    
}
}