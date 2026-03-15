import { Pressable, Text, StyleSheet } from "react-native";
import { Colors } from "../../constants/colors";
import { Ionicons } from "@expo/vector-icons";

function OutlinedButton({ children, onPress, icon, size, color }) {
    return (
        <Pressable onPress={onPress} style={({ pressed }) => pressed ? [styles.button, styles.pressed] : styles.button}>
            {icon && <Ionicons name={icon} size={size} color={color} style={styles.icon} />}
            <Text style={styles.text}>{children}</Text>
        </Pressable>
    );
}

export default OutlinedButton;

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 6,
        paddingHorizontal: 12,
        margin: 4,
        borderRadius: 4,
        borderColor: Colors.primary500,
        borderWidth: 1,
    },
    pressed: {
        opacity: 0.75,    },
    text: {
        color: Colors.primary500,
    },
    icon: {
        marginRight: 6,
    },
});
