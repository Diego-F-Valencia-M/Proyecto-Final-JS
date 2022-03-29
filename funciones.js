//creo funcion guardar contacto
const guardarContacto = (localEst, contacto) => {
    localEst.setItem(contacto.id, JSON.stringify(contacto));
    window.location.href = ' \ '
};

//creo funcion cargar contacto
const cargarContactos = (localEst, parentNode) => {
    let claves = Object.keys(localEst);
    for(clave of claves){
        let contacto = JSON.parse(localEst.getItem(clave))
        crearContacto(parentNode, contacto, localEst);    
    }
}

//creo una funcion la cual crea los elementos a mostras 
const crearContacto = (parentNode, contacto, localEst) => {
    //añado todos los elementos
    let divContacto = document.createElement ('div');
    let nombreContacto = document.createElement ('h3');
    let apellidoContacto = document.createElement ('h3');
    let celularContacto = document.createElement ('p');
    let fijoContacto = document.createElement ('p');
    let direccionContacto = document.createElement ('p');
    let correoContacto = document.createElement ('p');
    let iconoBorrar = document.createElement ('span');

    //añado todo el contenido
    nombreContacto.innerHTML = contacto.nombre;
    apellidoContacto.innerHTML = contacto.apellido;
    celularContacto.innerHTML = contacto.celular;
    fijoContacto.innerHTML = contacto.fijo;
    direccionContacto.innerHTML = contacto.direccion;
    correoContacto.innerHTML = contacto.correo;
    iconoBorrar.innerHTML = 'delete_forever';

    //añado las clases
    divContacto.classList.add('tarea');
    iconoBorrar.classList.add('material-icons', 'icono');

    //funcion que da manejo al boton de borrar
    iconoBorrar.onclick = () => {
        localEst.removeItem(contacto.id)
        window.location.href = ' \ '
    }

    //añado cada uno a su respectivo hijo
    divContacto.appendChild(nombreContacto);
    divContacto.appendChild(apellidoContacto);
    divContacto.appendChild(celularContacto);
    divContacto.appendChild(fijoContacto);
    divContacto.appendChild(direccionContacto);
    divContacto.appendChild(correoContacto);
    divContacto.appendChild(iconoBorrar);

    //añado todo al nodo padre
    parentNode.appendChild(divContacto);

}