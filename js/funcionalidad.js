
let foto, nombre, apellido, genero, identificacion, nroIdentificacion, pais, provincia, ciudad, calle, numero, codPostal;
let zonaHoraria, hora, correoElect, fechaNac, edad, telMovil, telFijo, seed;


/**
 * console.log("Inicia el JS");
 */

$.ajax({
    url: 'https://randomuser.me/api/?nat=es',
    dataType: 'json',
    success: function(data) {
        /**
         * console.log(data.results[0]);
         */

        foto = data.results[0].picture.large;
        apellido= data.results[0].name.last;
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
        apellidoPersona.innerText=apellido.toUpperCase();
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

        seed = data.info.seed;
        
    }
});


/**
 * script para mostrar u ocultar los datos de interés
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
            case 'mostrarEstudios':
                elementoVisibilidad.style.display="block";
                mostrarEstudios.style.display="none";
                ocultarEstudios.style.display="block";
                break;
            case 'ocultarEstudios':
                elementoVisibilidad.style.display="none";
                ocultarEstudios.style.display="none";
                mostrarEstudios.style.display="block";
                break;
        }
    }, false);
};

/*Modo oscuro*/
let modo=document.getElementById("modoVis")

modo.addEventListener ("click", function(){
    if (modo.className.includes("fa-sun")){
        modo.className= "fa-solid fa-moon";
        modo.title="Modo oscuro activo";
        document.documentElement.style.setProperty('--color-1', '#334f48');
        document.documentElement.style.setProperty('--color-2', '#172a21');
        document.documentElement.style.setProperty('--color-3', '#5d8883');
        document.documentElement.style.setProperty('--color-pagina', '#334f48');
        document.documentElement.style.setProperty('--color-texto', 'darkgray');
        document.getElementById('img-github').src='imagenes/github/github-mark-white.svg';
        document.getElementById('img-lin').src='imagenes/linked in/In-White-96@2x.png';
    } else {
        modo.className="fa-solid fa-sun";
        modo.title="Modo claro activo";
        document.documentElement.style.setProperty('--color-1', '#048A81');
        document.documentElement.style.setProperty('--color-2', '#6bada9');
        document.documentElement.style.setProperty('--color-3', '#54C6EB');
        document.documentElement.style.setProperty('--color-pagina', 'white');
        document.documentElement.style.setProperty('--color-texto', 'black');
        document.getElementById('img-github').src='imagenes/github/github-mark.svg';
        document.getElementById('img-lin').src='imagenes/linked in/In-Blue-128.png';

    }
})

/*Scroll to top*/
let btnToTop=document.getElementById("btnToTop");
window.onscroll=function(){visibilidadBtnToTopFunc()};

btnToTop.addEventListener("click",function(){
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;
});


function visibilidadBtnToTopFunc(){
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        btnToTop.style.display="block";
        setTimeout(function(){
            btnToTop.style.display="none";
        }, 2100);
    } else {
        btnToTop.style.display="none";
    }
}
