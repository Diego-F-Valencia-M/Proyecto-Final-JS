//Creo las variables
const nombre = document.querySelector('.nombre');
const apellido = document.querySelector('.apellido');
const celular = document.querySelector('.celular');
const fijo = document.querySelector('.fijo');
const direccion = document.querySelector('.direccion');
const correo = document.querySelector('.correo');
const btnAgregarContacto = document.querySelector('.btn-agregar-contacto');

const listadoTareas = document.querySelector('.listado-contactos');

const localEst = window.localStorage

//creo mi objeto
btnAgregarContacto.onclick = () => {
    let contacto = {
        id: Math.random(1,100),
        nombre: nombre.value,
        apellido: apellido.value,
        celular: celular.value,
        fijo: fijo.value,
        direccion: direccion.value,
        correo: correo.value,
    }
    
    guardarContacto(localEst, contacto);
    
}

cargarContactos(localEst, listadoTareas);
