import { View, Text, StyleSheet } from "react-native";
import { colors, spacing } from "../theme";

const AppHeader = ({ title, subtitle }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: { paddingVertical: spacing.s6 },
  title: { fontSize: 30, fontWeight: "700", color: colors.dark },
  subtitle: { fontSize: 14, color: colors.stone, marginTop: spacing.s1 },
});
