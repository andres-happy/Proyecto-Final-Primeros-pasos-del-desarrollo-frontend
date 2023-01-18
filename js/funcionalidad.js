
let foto, nombre, apellido, genero, identificacion, nroIdentificacion, pais, provincia, ciudad, calle, numero, codPostal;
let zonaHoraria, hora, correoElect, fechaNac, edad, telMovil, telFijo, seed;


console.log("Inicia el JS");

$.ajax({
    url: 'https://randomuser.me/api/?nat=es',
    dataType: 'json',
    success: function(data) {
        console.log(data.results[0]);

        foto = data.results[0].picture.large;
        apellido = data.results[0].name.last;
        nombre = data.results[0].name.first;

        identificacion = data.results[0].id.name;
        nroIdentificacion = data.results[0].id.value;
        fechaNac = data.results[0].dob.date;
        edad = data.results[0].dob.age;
        pais = data.results[0].location.country;
        provincia = data.results[0].location.state;
        ciudad = data.results[0].location.city;
        calle = data.results[0].location.street.name;
        numeroCalle = data.results[0].location.street.number;
        codPostal = data.results[0].location.postcode;
        zonaHoraria = data.results[0].location.timezone.description;
        hora = data.results[0].location.timezone.offset;
        correoElect = data.results[0].email;
        telMovil = data.results[0].cell;
        telFijo = data.results[0].phone;

        fotoPerfil.src=foto;
        apellidoPersona.innerText=apellido;
        nombrePersona.innerText=nombre;

        identificacionPersona.innerText=identificacion + " _ " + nroIdentificacion;
        nacimientoPersona.innerText=fechaNac +" ("+edad+" años)";
        residenciaPersona.innerText=ciudad+", "+provincia+", "+pais;
        callePersona.innerText=calle +" "+numeroCalle;
        codPostPersona.innerText=codPostal;
        zonaHorariaPersona.innerText=zonaHoraria+ " ("+hora+")";
        correoElectPersona.innerText=correoElect;
        telMovilPersona.innerText=telMovil;
        telFijoPersona.innerText=telFijo;

        console.log('fin de los datos');
        console.log(data);
        seed = data.info.seed;
        
        console.log(foto);
    }
});


/**
 * script para ocultar los datos con flechas
 */
let botones = document.getElementsByClassName('fleVisibilidad');
for(let i=0; i<botones.length; i++){
    botones[i].addEventListener('click', function () {
        let identificador = botones[i].id;
        let padre = botones[i].parentNode;
        let abuelo= padre.parentNode;
        let elementoVisibilidad = abuelo.children[1];
        
        switch (identificador) {
            case 'mostrarInfo':
                elementoVisibilidad.style.display="block";
                mostrarInfo.style.display="none";
                ocultarInfo.style.display="block";
                break;
            case 'ocultarInfo':
                elementoVisibilidad.style.display="none";
                ocultarInfo.style.display="none";
                mostrarInfo.style.display="block";
                break;
            case 'mostrarExpLab':
                elementoVisibilidad.style.display="block";
                mostrarExpLab.style.display="none";
                ocultarExpLab.style.display="block";
                break;
            case 'ocultarExpLab':
                elementoVisibilidad.style.display="none";
                ocultarExpLab.style.display="none";
                mostrarExpLab.style.display="block";
                break;
            case 'mostrarComp':
                elementoVisibilidad.style.display="block";
                mostrarComp.style.display="none";
                ocultarComp.style.display="block";
                break;
            case 'ocultarComp':
                elementoVisibilidad.style.display="none";
                ocultarComp.style.display="none";
                mostrarComp.style.display="block";
                break;
            case 'mostrarCursos':
                elementoVisibilidad.style.display="block";
                mostrarCursos.style.display="none";
                ocultarCursos.style.display="block";
                break;
            case 'ocultarCursos':
                elementoVisibilidad.style.display="none";
                ocultarCursos.style.display="none";
                mostrarCursos.style.display="block";
                break;
        }
    }, false);
};
