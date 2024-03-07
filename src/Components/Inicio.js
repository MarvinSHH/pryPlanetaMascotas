import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

const MainContent = () => {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.mobileScreen}>
        <View style={styles.todo}>
          <Image source={require("../assets/OIP.jpg")} style={styles.image} />
          <View style={styles.box}>
            <Text style={styles.boxTitle}>BIENVENIDO A PLANETA MASCOTAS</Text>
            <Text style={styles.boxText}>
              En esta pagina web pretendemos vender un dispensador de alimento
              para mascotas en el cual el cliente podrá visualizar y realizar
              compras, y el administrador dará de alta a los empleados y
              productos.
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "transparent",
  },
  mobileScreen: {
    marginHorizontal: 2,
    backgroundColor: "white",
    borderRadius: 10,
    overflow: "hidden",
  },
  todo: {
    padding: 20,
    height: 540,
    marginTop: 40,
  },
  box: {
    backgroundColor: "#eee",
    padding: 20,
  },
  boxTitle: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 10,
  },
  boxText: {
    fontSize: 14,
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
});

export default MainContent;
