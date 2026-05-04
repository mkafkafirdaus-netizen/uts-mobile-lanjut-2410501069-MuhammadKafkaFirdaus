import { View, Text, Image } from "react-native";

export default function AboutScreen() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#f5f5f5",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
      }}
    >
      <View
        style={{
          backgroundColor: "#fff",
          borderRadius: 15,
          padding: 20,
          width: "100%",
          alignItems: "center",
          elevation: 4,
        }}
      >
        <Image
          source={require("../../assets/profile.jpeg")}
          style={{
            width: 100,
            height: 100,
            borderRadius: 50,
            marginBottom: 10,
          }}
        />

        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          Muhammad Kafka Firdaus
        </Text>

        <Text style={{ color: "#777", marginBottom: 10 }}>
          Mobile Developer
        </Text>

        <View style={{ width: "100%", marginTop: 10 }}>
          <Text style={{ marginBottom: 5 }}>NIM: 2410501069</Text>
          <Text style={{ marginBottom: 5 }}>Kelas: B</Text>
          <Text style={{ marginBottom: 5 }}>Tema: ResepKita</Text>
          <Text style={{ marginBottom: 5 }}>API: TheMealDB</Text>
        </View>
      </View>
    </View>
  );
}