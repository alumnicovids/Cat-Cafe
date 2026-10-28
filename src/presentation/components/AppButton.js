import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { colors, spacing } from "../theme";

const AppButton = ({ label, onPress, variant = "solid", style }) => {
  const isSolid = variant == "solid";
  return (
    <TouchableOpacity
      style={[styles.base, isSolid ? styles.solid : styles.outline]}
      onPress={onPress}
    >
      <Text
        style={[styles.text, isSolid ? styles.textSolid : styles.textOutline]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  base: {
    height: 48,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  solid: { backgroundColor: colors.primary500 },
  outline: { borderWidth: 1.5, borderColor: colors.primary500 },
  text: { fontSize: 16, fontWeight: "600" },
  textSolid: { color: colors.white },
  textOutline: { color: colors.primary700 },
});
