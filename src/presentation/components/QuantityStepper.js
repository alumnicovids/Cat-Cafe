import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { colors } from "../theme";

const QuantityStepper = ({ qty, onKurang }) => {
  const kosong = qty === 0;
  return (
    <View style={styles.row}>
      <TouchableOpacity
        style={[styles.btn, kosong && styles.disable]}
        onPress={onKurang}
        disabled={kosong}
      >
        <Text style={styles.btnText}>-</Text>
      </TouchableOpacity>
      <Text style={styles.qty}>{qty}</Text>
    </View>
  );
};

export default QuantityStepper;

const styles = StyleSheet.create({
  row: { flexDirection: "row", alignItems: "center" },
  btn: {
    width: 48,
    height: 48,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: colors.primary500,
    alignItems: "center",
    justifyContent: "center",
  },
  disable: { opacity: 0.4 },
  btnText: { fontSize: 22, color: colors.primary700, fontWeight: "600" },
  qty: {
    minWidth: 48,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
    color: colors.dark,
  },
});
