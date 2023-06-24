import { Montserrat_600SemiBold } from "@expo-google-fonts/montserrat";
import React from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";

function InputText({ name }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{name}</Text>
      <TextInput style={styles.input} placeholder={`Enter your ${name}`} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    gap: "0.56rem",
  },
  label: {
    fontSize: "0.9375rem",
    fontFamily: "Montserrat_600SemiBold",
    textTransform: "capitalize",
    textAlign: "left",
    alignSelf: "flex-start",
  },
  input: {
    fontSize: "0.9375rem",
    fontFamily: "Montserrat_600SemiBold",
    borderWidth: "1px",
    borderRadius: "5px",
    borderColor: "#63646F",
    borderStyle: "solid",
    paddingHorizontal: "1.25rem",
    paddingVertical: "1.1875rem",
    color: "#63646F",
    alignSelf: "stretch",
  },
});

export default InputText;
