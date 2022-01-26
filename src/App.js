import React, {Fragment, useState, useEffect} from 'react';
import Navbar from './Components/Navbar'
import ListConts from './Components/ListCont';
import Form from './Components/Form';

function App() {

  
  const [contacto, setcontacto] = useState({
    nombre: '',
    apellido: '',
    correo: '',
    telefono: '',
    celular: '',
    direccion: '',
    id_ciudad: 0
  })



  const [contactos ,setcontactos] = useState([])
  const [listUpdated, setListUpdated] = useState(false)
    useEffect(() => {
      const getcontactos = () => {
        fetch('http://localhost:5000')
        .then(res => res.json())
       // .then(res => console.log(res))
        .then(res => setcontactos(res))
      }
      getcontactos()
      setListUpdated(false)
  },[listUpdated]) 
  return (
    <Fragment>
      <Navbar brand= 'Libreta de Contactos APP'/>
      <div className="container">
        <div className="row">
          <div className="col-10">
            <h2 style={{textAlign: 'center'}}>Lista de Contactos</h2>
            <ListConts contacto={contacto} setcontacto={setcontacto} contactos={contactos} setListUpdated={setListUpdated}/>
            
            
          </div>  
          
          <div className="col-10">
          <br ></br>
          <br ></br>
          <br ></br>
          <br ></br>
          <br ></br>
          <br ></br>
            <h2 style={{textAlign: 'center'}}>Formulario Contactos</h2>
            <Form contacto={contacto} setcontacto={setcontacto}/>
          </div>  
       </div>  
      </div>        
    </Fragment>
  );
}

export default App;
