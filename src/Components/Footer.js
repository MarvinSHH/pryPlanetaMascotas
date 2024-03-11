import React from "react";
import { View, Text, StyleSheet } from "react-native";
import styles from "./estilos";

const Footer = () => {
  return (
    <footer>
      <div style={styles.footerDatos}>
        <div style={styles.datos}>
          <a>¿Quienes Somos?</a>
          <a>Informacion Legal</a>
          <a>Ayuda</a>
        </div>
        <div style={styles.redes}>
          Redes Sociales<br />
          <div style={styles.icons}>
            <a>[  ]</a>
            <a>[  ]</a>
            <a>[  ]</a>
            <a>[  ]</a>
          </div>
        </div>
        <div style={styles.datos}>
          <a>Contactanos</a>
          Direccion: Av.Mexico<br />
          Telefono:7711223344<br />
          Correo:worldPet@gmail.com<br />

        </div>
      </div>

      <div style={styles.footer}>
        &copy; Sitio desarrollado por PM-Planeta-Mascotas 2024
      </div>
    </footer>

  );
};


export default Footer;
