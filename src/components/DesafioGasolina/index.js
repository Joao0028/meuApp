import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import imagemBomba from "./img/logo.png";

export default function DesafioGasolina() {
  return (
    <View style={estilos.container}>
      <Image source={imagemBomba} />

      <Text style={estilos.titulo}>Qual a melhor opção?</Text>

      <View style={estilos.viewInputs}>
        <Text style={estilos.tituloInput}>Álcool (preço por litro):</Text>
        <TextInput
          selectionColor="white"
          style={estilos.input}
          keyboardType="numeric"
        />
        <Text style={estilos.tituloInput}>Gasolina (preço por litro):</Text>
        <TextInput
          selectionColor="white"
          style={estilos.input}
          keyboardType="numeric"
        />
        <TouchableOpacity style={estilos.botao}>
            <Text style={{color: "white", textTransform: "uppercase", fontWeight: "bold", textAlign: "center"}}>Calcular</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    backgroundColor: "#121212",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 30,
  },
  titulo: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 15,
  },
  tituloInput: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  viewInputs: {
    width: "100%",
    paddingHorizontal: 20,
    gap: 10,
  },
  input: {
    borderBottomColor: "white",
    borderBottomWidth: 2,
    fontSize: 18,
    paddingBottom: 8,
    color: "white",
  },
  botao: { 
    width: "100%",
    height: 60,
    justifyContent: "center",
    backgroundColor: "#df2d2d",
    marginTop: 10,
    borderRadius: 5
  }
});
