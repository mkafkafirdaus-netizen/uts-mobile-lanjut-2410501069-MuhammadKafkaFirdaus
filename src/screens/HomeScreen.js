import { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  Image
} from "react-native";

export default function HomeScreen({ navigation }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCategories = async () => {
    try {
      setLoading(true);

      const res = await fetch(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      const json = await res.json();

      setData(json.categories);
    } catch (error) {
      alert("Gagal memuat data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  if (loading && data.length === 0) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <FlatList
      contentContainerStyle={{ padding: 10, backgroundColor: "#f5f5f5" }}
      data={data}
      keyExtractor={(item) => item.idCategory}
      refreshing={loading}
      onRefresh={fetchCategories}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={{
            backgroundColor: "#fff",
            borderRadius: 12,
            marginBottom: 12,
            padding: 10,
            elevation: 3,
          }}
          onPress={() =>
            navigation.navigate("Home", {
              screen: "RecipeDetail",
              params: { category: item.strCategory },
            })
          }
        >
          <Image
            source={{ uri: item.strCategoryThumb }}
            style={{ width: "100%", height: 150, borderRadius: 10 }}
          />

          <Text style={{ fontSize: 18, fontWeight: "bold", marginTop: 5 }}>
            {item.strCategory}
          </Text>

          <Text numberOfLines={2} style={{ fontSize: 12, color: "#555" }}>
            {item.strCategoryDescription}
          </Text>
        </TouchableOpacity>
      )}
    />
  );
}