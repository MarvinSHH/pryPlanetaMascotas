import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./estilos"; // Asegúrate de que este archivo contiene los estilos necesarios

const FrmRegistro = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [usuario, setUsuario] = useState("");
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [confirmaContrasena, setConfirmarContrasena] = useState("");
  const [telefono, setTelefono] = useState("");

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    if (contrasena !== confirmaContrasena) {
      alert("Las contraseñas no coinciden.");
      return;
    }

    const payload = {
      nombre,
      apellido,
      usuario,
      correo, // Asegúrate de que el campo 'correo' es el que tu esquema de Mongoose espera
      contrasena,
      telefono,
    };

    try {
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        const errorDetails = await response.text();
        throw new Error(`Error: ${errorDetails}`);
      }
      console.log(payload); // Esto te mostrará qué se está enviando realmente en la solicitud.

      alert("Registro exitoso! ahora puedes iniciar sesión!");
      setNombre("");
      setApellido("");
      setUsuario("");
      setCorreo("");
      setContrasena("");
      setConfirmarContrasena("");
      setTelefono("");
      // Aquí puedes implementar la redirección al login o limpiar el formulario
    } catch (error) {
      alert(error.message);
      console.error("Error durante el proceso de registro:", error);
    }
  };

  return (
    <div style={styles.formContainer}>
      <h2 style={styles.title}>Registro</h2>
      <form onSubmit={handleOnSubmit}>
        <div style={styles.cincuenta}>
          <div style={styles.inCincuenta}>
            <label style={styles.label}>Nombre:</label>
            <input
              style={styles.input}
              type="text"
              placeholder="Nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
          <div style={styles.inCincuenta}>
            <label style={styles.label}>Apellido:</label>
            <input
              style={styles.input}
              type="text"
              placeholder="Apellido"
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
            />
          </div>
        </div>

        <label style={styles.label}>Usuario:</label>
        <input
          style={styles.input}
          type="text"
          placeholder="Usuario"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />

        <label style={styles.label}>Correo:</label>
        <input
          style={styles.input}
          type="email"
          placeholder="Correo"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
        />

        <label style={styles.label}>Contraseña:</label>
        <input
          style={styles.input}
          type="password"
          placeholder="Contraseña"
          value={contrasena}
          onChange={(e) => setContrasena(e.target.value)}
        />

        <label style={styles.label}>Confirmar Contraseña:</label>
        <input
          style={styles.input}
          type="password"
          placeholder="Confirmar contraseña"
          value={confirmaContrasena}
          onChange={(e) => setConfirmarContrasena(e.target.value)}
        />

        <label style={styles.label}>Teléfono:</label>
        <input
          style={styles.input}
          type="tel"
          placeholder="Teléfono"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
        />

        <button style={styles.registerButton} type="submit">
          ¡Regístrate ahora!
        </button>
      </form>
      <Link to="/login" style={styles.loginButtonText}>
        ¿Ya tengo Cuenta?
      </Link>
    </div>
  );
};

export default FrmRegistro;
