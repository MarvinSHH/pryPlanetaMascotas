import React, { useState } from "react";
import colores from './paletaColores.js'; // Ajusta la ruta de importación según tu estructura de directorios

const Producto = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <div style={{...styles.container, backgroundColor: colores.fondoPrincipal}}>
      <div style={styles.mobileScreen}>
        <div style={styles.todo}>
          <h2 style={{...styles.categoryTitle, color: colores.textoHeader}}>Categorías</h2>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            style={{...styles.picker, borderColor: colores.bordeInput, color: colores.textoInput}}
          >
            <option value="none">Selecciona la categoría</option>
            <option value="cat1">Razas pequeñas</option>
            <option value="cat2">Razas Grandes</option>
          </select>
          
          <button
            style={{...styles.irButton, backgroundColor: colores.boton}}
            onClick={() => console.log("Ir a la categoría:", selectedCategory)}
          >
            <span style={{ color: colores.textoBoton }}>Ir</span>
          </button>

          <img
            src={require("../assets/OIP.jpg")} // Ajusta la ruta según sea necesario. Podrías necesitar importar la imagen en lugar de usar `require`.
            alt="Pet"
            style={styles.petImage}
          />
        </div>
      </div>
    </div>
  );
};

// Ajuste los estilos para usar colores de la paleta y simplificar para web
const styles = {
  container: {
    padding: "20px",
  },
  mobileScreen: {
    margin: "auto",
    maxWidth: "600px",
  },
  todo: {
    textAlign: "center",
  },
  categoryTitle: {
    margin: "40px 0 20px",
  },
  picker: {
    padding: "10px",
    marginBottom: "20px",
    width: "100%",
  },
  irButton: {
    padding: "10px",
    margin: "10px 0",
    width: "calc(100% - 20px)",
    cursor: "pointer",
  },
  petImage: {
    width: "90%",
    height: "200px",
    objectFit: "contain",
    margin: "20px 0",
  },
};

export default Producto;
