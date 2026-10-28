import { View, Text, StyleSheet } from "react-native";
import { colors, spacing, typography } from "../theme";

const AppHeader = ({ title, subtitle }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
      {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  header: {
    paddingTop: spacing.s4,
    paddingBottom: spacing.s4,
  },
  title: {
    fontSize: typography.hero.fontSize,
    fontWeight: typography.hero.fontWeight,
    lineHeight: typography.hero.lineHeight,
    color: colors.dark,
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: typography.bodyNormal.fontSize,
    lineHeight: typography.bodyNormal.lineHeight,
    color: colors.stone,
    marginTop: spacing.s1,
  },
});
