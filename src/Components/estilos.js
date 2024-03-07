// Estilos.js
import colores from './paletaColores.js'; // Ajusta la ruta de importación según tu estructura de directorios

const styles = {
    
  body:{
    paddingTop:'100px',
    height:'100%',
  } ,
  header: {
    backgroundColor: colores.fondoHeader,
    color: colores.textoHeader,
    padding: '10px 0',
    textAlign: 'center',
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 1000,
  },
  head: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    backgroundColor: colores.fondoLogo,
    width: '190px',
    height: '80px',
    marginLeft: '10px',
  },
  navStyles: {
    display: 'flex',
    width: '100%',
    justifyContent: 'flex-end',
    paddingRight: '10px',
  },
  navLinks: {
    display: 'flex',
    justifyContent: 'right',
    padding: '10px 0',
  },
  navLink: {
    color: colores.textoNavLink,
    margin: '0 15px',
    textDecoration: 'none',
    fontSize: '20px',
  }
};

export default styles;
