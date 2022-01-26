import React from 'react';

const Form = ({contacto, setcontacto}) => {

    const handleChange = e => {
        setcontacto({
            ...contacto,
            [e.target.name]: e.target.value
        })
    }

    let{nombre, apellido, correo, telefono, celular, direccion, id_ciudad } = contacto

    const handleSubmit = () => {
        id_ciudad = parseInt(id_ciudad, 10)
        //validación de los datos
        if (nombre === '' || apellido === '' || correo === '' || telefono === '' || celular === '' || direccion === '' || id_ciudad <= 0 ) {
            alert('*Todos los campos son obligatorios*')
            return
        }

        //consulta
        const requestInit = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(contacto)
        }
        fetch('http://localhost:5000/', requestInit)
        .then(res => res.text())
        .then(res => console.log(res))

        //volver a colocar espacios en blanco
        setcontacto({
            nombre: '',
            apellido: '',
            correo: '',
            telefono: '',
            celular: '',
            direccion: '',
            id_ciudad: 0
        })



    }

    return ( 
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre</label>
                <input value={nombre} name="nombre" onChange={handleChange} type="text" id="nombre" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="apellido" className="form-label">Apellido</label>
                <input value={apellido} name="apellido" onChange={handleChange} type="text" id="apellido" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="correo" className="form-label">Correo</label>
                <input value={correo} name="correo" onChange={handleChange} type="text" id="correo" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="telefono" className="form-label">Telefono</label>
                <input value={telefono} name="telefono" onChange={handleChange} type="text" id="telefono" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="celular" className="form-label">Celular</label>
                <input value={celular} name="celular" onChange={handleChange} type="text" id="celular" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="direccion" className="form-label">Direccion</label>
                <input value={direccion} name="direccion" onChange={handleChange} type="text" id="direccion" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="ciudad" className="form-label">ciudad</label>
                <input value={id_ciudad}  name="id_ciudad" onChange={handleChange} type="number" id="ciudad" className="form-control"/>
            </div>
            <button type="submit" className="btn btn-success">Agregar</button>
        </form>
    );
}

 
export default Form;