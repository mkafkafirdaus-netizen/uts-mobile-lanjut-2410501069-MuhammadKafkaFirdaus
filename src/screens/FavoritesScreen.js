import { useContext } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet
} from "react-native";
import { FavoritesContext } from "../context/FavoritesContext";

export default function FavoritesScreen({ navigation }) {
  const { favorites, dispatch } = useContext(FavoritesContext);

  if (favorites.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>💔 Belum ada favorit</Text>
        <Text style={styles.emptySubText}>
          Tambahkan resep favorit kamu dari halaman detail
        </Text>
      </View>
    );
  }

  return (
    <FlatList
      data={favorites}
      keyExtractor={(item) => item.idMeal}
      contentContainerStyle={{ padding: 10, backgroundColor: "#f5f5f5" }}
      renderItem={({ item }) => (
        <View style={styles.card}>
          
          {/* IMAGE */}
          <Image
            source={{ uri: item.strMealThumb }}
            style={styles.image}
          />

          {/* CONTENT */}
          <View style={styles.content}>
            
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Home", {
                  screen: "RecipeDetail",
                  params: { id: item.idMeal }
                })
              }
            >
              <Text style={styles.title}>
                {item.strMeal}
              </Text>
            </TouchableOpacity>

            <Text style={styles.subtitle}>
              Tap nama untuk lihat detail
            </Text>

            <TouchableOpacity
              style={styles.button}
              onPress={() =>
                dispatch({ type: "REMOVE", payload: item.idMeal })
              }
            >
              <Text style={styles.buttonText}>
                Hapus dari Favorit
              </Text>
            </TouchableOpacity>

          </View>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5"
  },
  emptyText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5
  },
  emptySubText: {
    color: "#777",
    textAlign: "center"
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 15,
    marginBottom: 12,
    overflow: "hidden",
    elevation: 3
  },

  image: {
    width: "100%",
    height: 150
  },

  content: {
    padding: 10
  },

  title: {
    fontSize: 16,
    fontWeight: "bold"
  },

  subtitle: {
    fontSize: 12,
    color: "#777",
    marginTop: 3
  },

  button: {
    marginTop: 10,
    backgroundColor: "#ff4d4d",
    padding: 10,
    borderRadius: 8,
    alignItems: "center"
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold"
  }
});