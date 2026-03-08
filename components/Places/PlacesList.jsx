import { FlatList } from "react-native";
import PlaceItem from "./PlaceItem";

function PlacesList({places}) {
  return (
    <FlatList
      data={places}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => <PlaceItem place={itemData.item} />}
    />  
  );
}

export default PlacesList;