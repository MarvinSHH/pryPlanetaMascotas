import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>
        &copy; Sitio desarrollado por PM-Planeta-Mascotas 2024
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: "#001449",
    padding: 10,
    alignItems: "center",
  },
  footerText: {
    color: "#17f9ff",
  },
});

export default Footer;
