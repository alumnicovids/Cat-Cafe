import { View, Text, Pressable, StyleSheet } from "react-native";
import { colors, spacing, typography } from "../theme";

const QuantityStepper = ({ qty, onKurang, onTambah }) => {
  const isZero = qty === 0;

  return (
    <View
      style={styles.row}
      accessibilityRole="adjustable"
      accessibilityLabel={`Jumlah pesanan: ${qty}`}
    >
      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Kurangi satu item"
        accessibilityState={{ disabled: isZero }}
        disabled={isZero}
        onPress={onKurang}
        style={({ pressed }) => [
          styles.btn,
          pressed && !isZero && styles.btnPressed,
          isZero && styles.disabled,
        ]}
      >
        <Text style={[styles.btnText, isZero && styles.btnTextDisabled]}>
          -
        </Text>
      </Pressable>

      <View style={styles.qtyContainer}>
        <Text style={styles.qtyText}>{qty}</Text>
      </View>

      {onTambah && (
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Tambah satu item"
          onPress={onTambah}
          style={({ pressed }) => [
            styles.btn,
            styles.btnPlus,
            pressed && styles.btnPlusPressed,
          ]}
        >
          <Text style={styles.btnPlusText}>+</Text>
        </Pressable>
      )}
    </View>
  );
};

export default QuantityStepper;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  btn: {
    width: 48,
    height: 48,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: colors.primary500,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
  },
  btnPressed: {
    backgroundColor: colors.primary50,
  },
  disabled: {
    borderColor: colors.border,
    opacity: 0.35,
  },
  btnText: {
    fontSize: 22,
    color: colors.primary700,
    fontWeight: "600",
    lineHeight: 24,
  },
  btnTextDisabled: {
    color: colors.stone,
  },
  qtyContainer: {
    minWidth: 40,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: spacing.s2,
  },
  qtyText: {
    fontSize: typography.bodyLargeBold.fontSize,
    fontWeight: typography.bodyLargeBold.fontWeight,
    color: colors.dark,
    textAlign: "center",
  },
  btnPlus: {
    backgroundColor: colors.primary500,
    borderColor: colors.primary500,
  },
  btnPlusPressed: {
    backgroundColor: colors.primary600,
    borderColor: colors.primary600,
  },
  btnPlusText: {
    fontSize: 22,
    color: colors.white,
    fontWeight: "600",
    lineHeight: 24,
  },
});
