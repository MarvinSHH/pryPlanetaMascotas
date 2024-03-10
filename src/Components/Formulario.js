import React, { useState } from "react";
import { Link } from "react-router-dom"; // Importar desde react-router-dom para la navegación
import imgFondo from '../assets/bienvenido.jpg'

  const Formulario = () => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [usuario, setUsuario] = useState("");
    const [correo, setCorreo] = useState("");
    const [contrasena, setContrasena] = useState("");
    const [confirmaContrasena, setConfirmarContrasena] = useState("");
    const [telefono, setTelefono] = useState("");
  
    const handleRegister = (e) => {
      e.preventDefault();
      console.log("Registro:", {
        nombre,
        apellido,
        usuario,
        correo,
        contrasena,
        confirmaContrasena,
        telefono,
      });
    };
  
    return (
      <div style={styles.container}>
        <div style={styles.imgArea}>
          <img style={styles.ImagenFondo} src={imgFondo} alt="Fondo"/>
  
        </div>
  
        <div style={styles.formArea}>
          <div style={styles.formContainer}>
            <h2 style={styles.title}>Registro</h2>
            <form onSubmit={handleRegister}>
  
              <div style={styles.cincuenta}>
                <div style={styles.inCincuenta}>
                  <label style={styles.label}>Nombre</label>
                  <input style={styles.input} type="text" placeholder="Ingrese su Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                </div>
                <div style={styles.inCincuenta}>
                  <label style={styles.label}>Apellido</label>
                  <input style={styles.input} type="text" placeholder="Apellido " value={apellido} onChange={(e) => setApellido(e.target.value)} />
                </div>
              </div>
              
              <label style={styles.label}>Usuario</label>
              <input style={styles.input} type="text" placeholder="Usuario" value={usuario} onChange={(e) => setUsuario(e.target.value)} />
              
              <label style={styles.label}>Correo</label>
              <input style={styles.input} type="email" placeholder="Correo" value={correo} onChange={(e) => setCorreo(e.target.value)} />
              
              <label style={styles.label}>Contraseña</label>
              <input style={styles.input} type="password" placeholder="Contraseña" value={contrasena} onChange={(e) => setContrasena(e.target.value)} />
              
              <label style={styles.label}>Confirmar Contraseña</label>
              <input style={styles.input} type="password" placeholder="Confirmar contraseña" value={confirmaContrasena} onChange={(e) => setConfirmarContrasena(e.target.value)} />
              
              <label style={styles.label}>Teléfono</label>
              <input style={styles.input} type="tel" placeholder="Teléfono" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
              
              <button style={styles.registerButton} type="submit">¡Regístrate ahora!</button>
            </form>
            {/* Enlace a la página de login usando React Router */}
            <Link to="/login" style={styles.loginButtonText}>¿Ya tengo Cuenta?</Link>
          </div>
        </div>
  
        
      </div>
    );
  };


const styles = {
  container: {
    backgroundColor:'#daebff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width:'100%',
  },  
  imgArea:{
    width:'2500px',
    minWidth:'200px',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',  
    borderRight:'solid 3px #5a737d',
  },
  ImagenFondo:{
    
    paddingTop:'10px',
    paddingBottom:'10px',
    maxWidth:'780px',
    minHeight:'555px',
    minWidth:'300px'
  },
  formArea:{
    minWidth:'358px',
    width:'1360px',
    maxWidth:'1500px',
    display:'flex',
    justifyContent:'center',
  },
  formContainer: {
    backgroundColor: "#fafafa",
    borderRadius: 10,
    paddingLeft: '20px',
    paddingRight:'20px',
    width: '35%',
    minWidth: '290px',
  },
  cincuenta:{
    display:'flex',
    justifyContent:'space-between'
  },
  inCincuenta:{
    width:'45%',
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: "#000",
    marginBottom: 5,
  },
  input: {
    width: '93%',
    backgroundColor: "#fff",
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  registerButton: {
    backgroundColor: "#0CB7F2",
    color: "#fff",
    padding: 15,
    borderRadius: 5,
    border: 'none',
    cursor: 'pointer',
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    width: '100%',
  },
  loginButtonText: {
    display:'flex',
    justifyContent:'right',
    color: "blue",
    textAlign: "center",
    marginTop: 5,
    paddingBottom:'10px',
    cursor: 'pointer',
    backgroundColor: 'transparent',
    border: 'none',
    textDecoration: 'underline',
  },
};

export default Formulario;