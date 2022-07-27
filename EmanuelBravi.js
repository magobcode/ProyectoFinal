
   function enviar () {
        alert('Enviando...');
    }
    const TARIFAS = {
        'BS' : 150,
        'COR' : 190,
        'ROS' : 200
    }

    const Distribution = [
        {Business: 'Andreani', Rating: 6,},
        {Business: 'OCASA' , Rating: 10,},
        {Business: 'CorreoARG', Rating: 8,},
        {Business: 'Carolo.srl', Rating: 2,},
        {Business: 'Traverso', Rating: 4,},
        {Business: 'Fedex', Rating: 9,},
        {Business: 'Express', Rating: 7,},
    ]

    class Paquete {
        constructor ( destino, peso ) {
            this.destino = destino
            this.peso = peso
        }
        calcularTarifa (){
            const tarifaPorDestino = TARIFAS[this.destino]
            const tarifaTotal = tarifaPorDestino * this.peso
            document.write(`<br>vas a Enviar un paquete de: ${this.peso} Kg a ${this.destino} con un importe de $${tarifaTotal}`);

        }}

        const Business = Distribution.filter( p => p.Rating >= 7)
    function Empresas(Distribution) {
        for (const item of Distribution) 
        document.write('<li>'+'Empresa: '+item.Business + '   Calificacion: '+item.Rating+ '</li>' );
    }


const validarDestino = d => TARIFAS[d] ? true : false
const validarPeso = p => p >= 1 && p <= 100 ? true : false

const procesarPaquetes = ( n ) => {
    for (let i = 0; i < n; i++) {

        const destino = prompt(`Dame el destino del paquete ${i+1} BS - COR - ROS `)
        if ( !validarDestino(destino) ) {
            alert('Destino no válido')
            continue
        }
        const peso = parseInt(prompt(`Dame el peso del paquete ${i+1}`))
        if ( !validarPeso(peso) ) {
            alert('Peso no válido')
            continue
        }

        const paquete = new Paquete( destino, peso )
        paquete.calcularTarifa()
    }  
    
    let paso2 = prompt('¿Desea que su Envio lo realice una Empresa con una valoracion mayor a 5? Responda con SI o NO')
    if (paso2 == 'SI') {
       document.write('<br>Estas son las empresas que trabajan junto a nosotros con las mejores reseñas: ')
       Empresas(Business)
       document.write('te notificaremos cual de ellas es la responsable del envio. Gracias!.')
    }else if (paso2 == 'NO'){   
      document.write('<br>Estas son las empresas que trabajan junto a nosotros: ')
      Empresas(Distribution)
      document.write('te notificaremos cual de ellas es la responsable del envio. Gracias!.')
    }else{
       alert('El comando ingresado es invalido')
    }
   enviar();
     }




const Ejecut = ( nombreUsuario, func ) => {
    for (let i = 0; i < nombreUsuario.length; i++) {
        func( nombreUsuario[i] )
    }
}

const nombreUsuario = [prompt('ingresa tu Nombre')]

const saludar = (nombreUsuario) => { alert(`Bienvenido ${nombreUsuario}!!!`) }


Ejecut( nombreUsuario, saludar )

const login = (nombreUsuario) => { alert(`Preparando el camion para el Envio de: ${nombreUsuario}...`) }

Ejecut( nombreUsuario, login)




const totalPaquetes = parseInt(prompt('¿Cuantos paquetes quieres enviar'))

if ( totalPaquetes >= 1 && totalPaquetes <= 5 ) {
    procesarPaquetes( totalPaquetes )
} else {
    alert('No podemos enviar esos paquetes');
}
 

let valoracion = prompt('valora nuestro servicio - 10) PERFECTO - 7) BUENO - 4) REGULAR - 1) MALO.')
switch (valoracion) {
    case '10':
        alert('Nos alegra, haberte complacido')
        break;
    case '7':
        alert('quedamos algo confomes con tu experiencia pero esperamos mejorar')
        break;
    case '4':
        alert('ups, ¿porque no termino de gustarte el servicio?')
        break;
    case '1':
        alert('lamentamos mucho tu experiencia, ¿en que fallamos?')
        break;
 
    default:
        alert('COMANDO INVALIDO')
        break;
 }