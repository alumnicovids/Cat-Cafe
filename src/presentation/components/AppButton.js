import { Pressable, Text, StyleSheet } from "react-native";
import { colors, spacing, typography } from "../theme";

const AppButton = ({
  label,
  onPress,
  variant = "solid",
  disabled = false,
  style,
  textStyle,
}) => {
  const isSolid = variant === "solid";

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={label}
      accessibilityState={{ disabled }}
      disabled={disabled}
      onPress={onPress}
      style={({ pressed }) => [
        styles.base,
        isSolid
          ? [styles.solid, pressed && styles.solidPressed]
          : [styles.outline, pressed && styles.outlinePressed],
        disabled && styles.disabled,
        style,
      ]}
    >
      <Text
        style={[
          styles.text,
          isSolid ? styles.textSolid : styles.textOutline,
          disabled && styles.textDisabled,
          textStyle,
        ]}
      >
        {label}
      </Text>
    </Pressable>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  base: {
    height: 48,
    minHeight: 48,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: spacing.s4,
  },
  solid: {
    backgroundColor: colors.primary500,
  },
  solidPressed: {
    backgroundColor: colors.primary600,
  },
  outline: {
    backgroundColor: "transparent",
    borderWidth: 1.5,
    borderColor: colors.primary500,
  },
  outlinePressed: {
    backgroundColor: colors.primary50,
  },
  disabled: {
    opacity: 0.45,
  },
  text: {
    fontSize: typography.bodyLargeBold.fontSize,
    fontWeight: typography.bodyLargeBold.fontWeight,
  },
  textSolid: {
    color: colors.white,
  },
  textOutline: {
    color: colors.primary700,
  },
  textDisabled: {
    opacity: 0.8,
  },
});
