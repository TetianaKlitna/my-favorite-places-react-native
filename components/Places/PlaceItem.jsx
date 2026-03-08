import { View, Image, Text } from "react-native";

function PlaceItem({ place }) {
  return (
    <View>
      <Image source={{ uri: place.imageUri }} style={{ width: 100, height: 100 }} />
      <View>
        <Text>{place.title}</Text>
        <Text>{place.address}</Text>
      </View>
    </View>
  );
}

export default PlaceItem;