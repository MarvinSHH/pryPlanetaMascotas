import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

const Producto = () => {
  const [selectedCategory, setSelectedCategory] = useState();

  // Placeholder para la función de navegación
  const navigateTo = (screen) => {
    // Aquí iría la lógica de navegación
    console.log(`Navigating to ${screen}`);
  };

  return (
    <View style={styles.container}>
      
      <ScrollView style={styles.scrollView}>
        <View style={styles.mobileScreen}>
          <View style={styles.todo}>
            <Text style={styles.categoryTitle}>Categorías</Text>
            <Picker
              selectedValue={selectedCategory}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedCategory(itemValue)
              }
              style={styles.picker}
            >
              {/* Aqui podrwmos añadir  más opciones de Picker.Item*/}
              <Picker.Item label="Selecciona la categoría" value="none" />
              {/* Simulación de categorías */}
              <Picker.Item label="Razas pequeñas" value="cat1" />
              <Picker.Item label="Razas Grandes" value="cat2" />
            </Picker>

            <TouchableOpacity
              style={styles.irButton}
              onPress={() =>
                console.log("Ir a la categoría:", selectedCategory)
              }
            >
              <Text style={styles.irButtonText}>Ir</Text>
            </TouchableOpacity>

            <Image
              source={require("../assets/OIP.jpg")}
              style={styles.petImage}
            />

          
          </View>
         
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(5, 7, 12, 0.75)",
  },
  scrollView: {
    backgroundColor: "transparent",
  },
  mobileScreen: {
    marginHorizontal: 2,
    backgroundColor: "white",
    borderRadius: 10,
    overflow: "hidden",
  },
  header: {
    backgroundColor: "#c56d16e0",
    alignItems: "center",
    height: 100,
  },
  headerText: {
    color: "#fff",
    fontSize: 22,
    padding: 30,
    borderColor: "#fff",
  },
  navBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "rgb(37, 40, 37)",
    paddingVertical: 20,
  },
  navText: {
    color: "#fff",
    fontSize: 16,
  },

  boxText: {
    fontSize: 14,
  },
  footer: {
    backgroundColor: "#4a4646",
    padding: 10,
    alignItems: "center",
  },
  footerText: {
    color: "#fff",
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 40,
  },
  picker: {
    height: 50,
    width: "80%",
    marginLeft: 40,
    marginTop: 10,
    marginBottom: 10,
  },
  irButton: {
    backgroundColor: "#0CB7F2",
    borderRadius: 5,
    padding: 10,
    alignItems: "center",
    marginVertical: 10,
    width: 200,
    marginLeft: 60,
  },
  irButtonText: {
    color: "white",
    fontSize: 16,
  },
  petImage: {
    width: "90%",
    height: 200,
    resizeMode: "contain",
    marginTop: 20,
    marginLeft: 20,
  },
  facebookButton: {
    backgroundColor: "#4267B2",
    borderRadius: 50,
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  facebookButtonText: {
    color: "white",
    fontSize: 24,
  },
  todo: {
    padding: 20,
    height: 580,
  },
});

export default Producto;
