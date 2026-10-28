import { View, Text, StyleSheet } from "react-native";
import { colors, spacing } from "../theme";

const PromoBadge = ({ text }) => {
  return (
    <View style={styles.badge}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default PromoBadge;

const styles = StyleSheet.create({
  badge: {
    backgroundColor: colors.terracotta,
    borderRadius: 12,
    paddingVertical: spacing.s2,
    paddingHorizontal: spacing.s3,
    marginTop: spacing.s3,
    alignSelf: "flex-start",
  },
  text: { color: colors.white, fontSize: 12, fontWeight: "600" },
});
