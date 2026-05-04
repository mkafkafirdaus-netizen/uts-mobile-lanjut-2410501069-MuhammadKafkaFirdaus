import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
  Image
} from "react-native";

export default function SearchScreen({ navigation }) {
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!query) {
      setError("Tidak boleh kosong");
      return;
    }

    if (query.length < 3) {
      setError("Minimal 3 karakter");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      );
      const json = await res.json();
      setResults(json.meals || []);
    } catch (err) {
      alert("Gagal mencari data");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#f5f5f5" }}>
      
      {/* SEARCH INPUT */}
      <View style={{ padding: 10 }}>
        <TextInput
          placeholder="Cari resep..."
          value={query}
          onChangeText={setQuery}
          style={{
            backgroundColor: "#fff",
            padding: 12,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: "#ddd",
          }}
        />

        {error ? (
          <Text style={{ color: "red", marginTop: 5 }}>{error}</Text>
        ) : null}

        <View style={{ marginTop: 10 }}>
          <Button title="Cari" onPress={handleSearch} />
        </View>
      </View>

      {/* RESULT */}
      <FlatList
        contentContainerStyle={{ padding: 10 }}
        data={results}
        keyExtractor={(item) => item.idMeal}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              backgroundColor: "#fff",
              borderRadius: 12,
              marginBottom: 12,
              padding: 10,
              elevation: 2,
            }}
            onPress={() =>
              navigation.navigate("Home", {
                screen: "RecipeDetail",
                params: { id: item.idMeal },
              })
            }
          >
            <Image
              source={{ uri: item.strMealThumb }}
              style={{ width: "100%", height: 150, borderRadius: 10 }}
            />

            <Text style={{ fontSize: 16, fontWeight: "bold", marginTop: 5 }}>
              {item.strMeal}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}