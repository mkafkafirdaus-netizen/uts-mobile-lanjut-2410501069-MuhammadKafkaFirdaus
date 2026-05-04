import { useEffect, useState, useContext } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Image,
  ScrollView,
  Button
} from "react-native";
import { FavoritesContext } from "../context/FavoritesContext";

export default function DetailScreen({ route, navigation }) {
  const { category, id } = route.params || {};
  const [data, setData] = useState(null);
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const { dispatch } = useContext(FavoritesContext);

  useEffect(() => {
    setLoading(true);

    if (category) {
      fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
        .then(res => res.json())
        .then(json => setList(json.meals || []))
        .catch(() => alert("Gagal memuat data"))
        .finally(() => setLoading(false));
    } else if (id) {
      fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then(res => res.json())
        .then(json => setData(json.meals ? json.meals[0] : null))
        .catch(() => alert("Gagal memuat data"))
        .finally(() => setLoading(false));
    }
  }, [category, id]);

  if (loading) return <ActivityIndicator size="large" />;

  // 📋 LIST CATEGORY
  if (category) {
    return (
      <FlatList
        contentContainerStyle={{ padding: 10, backgroundColor: "#f5f5f5" }}
        data={list}
        keyExtractor={(item) => item.idMeal}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              backgroundColor: "#fff",
              borderRadius: 10,
              marginBottom: 10,
              padding: 10,
              elevation: 2,
            }}
            onPress={() =>
              navigation.navigate("RecipeDetail", { id: item.idMeal })
            }
          >
            <Image
              source={{ uri: item.strMealThumb }}
              style={{ width: "100%", height: 120, borderRadius: 10 }}
            />

            <Text style={{ fontWeight: "bold", marginTop: 5 }}>
              {item.strMeal}
            </Text>
          </TouchableOpacity>
        )}
      />
    );
  }

  // ❌ DATA NOT FOUND
  if (!data) {
    return (
      <View style={{ padding: 10 }}>
        <Text>Data tidak ditemukan</Text>
      </View>
    );
  }

  // 🍽️ DETAIL
  return (
    <ScrollView style={{ padding: 10 }}>
      <Text style={{ fontSize: 22, fontWeight: "bold" }}>
        {data.strMeal}
      </Text>

      <Image
        source={{ uri: data.strMealThumb }}
        style={{
          width: "100%",
          height: 200,
          borderRadius: 10,
          marginVertical: 10
        }}
      />

      <Text style={{ lineHeight: 20 }}>
        {data.strInstructions}
      </Text>

      <View style={{ marginTop: 20 }}>
        <Button
          title="Tambah ke Favorit"
          onPress={() =>
            dispatch({ type: "ADD", payload: data })
          }
        />
      </View>
    </ScrollView>
  );
}