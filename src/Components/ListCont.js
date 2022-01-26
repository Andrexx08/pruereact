import React from "react";

const ListConts = ({contacto,  setcontacto, contactos, setListUpdated}) => {

    const handleDelete = idcontacto => {
        const requestInit = {
            method: 'DELETE'
        }
        fetch('http://localhost:5000/' + idcontacto, requestInit)
        .then(res => res.text())
        .then(res => console.log(res))

        setListUpdated(true)
    }

    let{nombre, apellido, correo, telefono, celular, direccion, id_ciudad } = contacto

    const handleUpdate = idcontacto => {
        id_ciudad = parseInt(id_ciudad, 10)
        //validación de los datos
        if (nombre === '' || apellido === '' || correo === '' || telefono === '' || celular === '' || direccion === '' || id_ciudad <= 0 ) {
            alert('*Todos los campos son obligatorios*')
            return
        }
        const requestInit = {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(contacto)
        }
        fetch('http://localhost:5000/' + idcontacto, requestInit)
        .then(res => res.text())
        .then(res => console.log(res))

        //reiniciando los espacios de el formulario
        setcontacto({
            nombre: '',
            apellido: '',
            correo: '',
            telefono: '',
            celular: '',
            direccion: '',
            id_ciudad: 0
        })

        setListUpdated(true)
    }
    return(

    <table className="table">
        <thead>
        <tr>
          <th>Id_contacto</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Correo</th>
          <th>telefono</th>
          <th>Celular</th>
          <th>Direccion</th>
          <th>Ciudad</th>
        </tr>
        </thead>
        <tbody>
            {contactos.map(contacto => (
                <tr key={contacto.idcontacto}>
                <th>{contacto.idcontacto}</th>
                <td>{contacto.nombre}</td>
                <th>{contacto.apellido}</th>
                <th>{contacto.correo}</th>
                <th>{contacto.telefono}</th>
                <th>{contacto.celular}</th>
                <th>{contacto.direccion}</th>
                <th>{contacto.id_ciudad}</th>
                <td>
                            <div className="mb-3">
                                <button onClick={() => handleDelete(contacto.idcontacto)} className="btn btn-danger">Borrar</button>
                            </div>
                            <div className="mb-3">
                                <button onClick={() => handleUpdate(contacto.idcontacto)} className="btn btn-info">Actualizar</button>
                            </div>
                        </td>
                </tr>
            ))}
               
        </tbody>
    </table>
    );
}

export default ListConts;