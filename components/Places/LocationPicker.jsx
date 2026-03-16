import { View, StyleSheet, Text } from "react-native";
import OutlinedButton from "../UI/OutlinedButton";
import { Colors } from "../../constants/colors";
import { getCurrentPositionAsync, useForegroundPermissions, PermissionStatus } from "expo-location";

function LocationPicker() {

    const [locationPermissionInformation, requestPermission] = useForegroundPermissions();

    const verifyPermissions = async () => {
        if (locationPermissionInformation.status === PermissionStatus.GRANTED) {
            const permissionResponse = await requestPermission();
            return permissionResponse.granted;
        }
        if (locationPermissionInformation.status === PermissionStatus.DENIED) {
            return false;
        }
        const permissionResponse = await requestPermission();
        return permissionResponse.granted;
    };

    const getLocationHandler = async () => {
        const hasPermission = await verifyPermissions();
        if (!hasPermission) {
            return;
        }
        const location = await getCurrentPositionAsync();
        console.log(location);
    };

    const pickOnMapHandler = () => {
        // Open a map to let the user pick a location
    };

    return (
        <View>
            <View style={styles.mapPreview}>
                <Text>Location Picker</Text>
            </View>
            <View style={styles.actions}>
                <OutlinedButton icon="location" size={24} color={Colors.primary500} onPress={getLocationHandler}>
                    Locate User
                </OutlinedButton>
                <OutlinedButton icon="map" size={24} color={Colors.primary500} onPress={pickOnMapHandler}>
                    Pick on Map
                </OutlinedButton>
            </View>
        </View>
    );
}   

export default LocationPicker;

const styles = StyleSheet.create({
    mapPreview: {
        width: '100%',
        height: 200,
        marginVertical: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primary100,
        borderRadius: 4,
        overflow: 'hidden',
    },  
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    
});