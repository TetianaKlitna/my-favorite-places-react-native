import { View, Image, Text, Pressable, StyleSheet } from "react-native";

function PlaceItem({ place, onSelect }) {
  return (
    <Pressable onPress={onSelect} style={styles.placeItem}>
      <Image source={{ uri: place.imageUri }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{place.title}</Text>
        <Text style={styles.address}>{place.address}</Text>
      </View>
    </Pressable>
  );
}

export default PlaceItem;

const styles = StyleSheet.create({
  placeItem: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 12,
    padding: 12,
    backgroundColor: "#ccc",
    borderRadius: 6,
  },
  image: {
    width: 100,


    height: 100,
    borderRadius: 6,
    marginRight: 12,
  },
  infoContainer: {
    flex: 1,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 4,
  },
  address: {
    color: "#666",
  },
});