import { useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

import { colors, spacing, typography } from "./src/presentation/theme";
import { tambahJumlah, kurangiJumlah } from "./src/domain/orderRules";
import AppHeader from "./src/presentation/components/AppHeader";
import OrderSummary from "./src/presentation/components/OrderSummary";
import MenuItem from "./src/presentation/components/MenuItem";
import AppButton from "./src/presentation/components/AppButton";

const DAFTAR_MENU = [
  { id: "1", nama: "Kopi Susu Catnip", harga: 20000 },
  { id: "2", nama: "Matcha Paw Latte", harga: 25000 },
  { id: "3", nama: "Croissant Ikan Tuna", harga: 18000 },
];

const App = () => {
  const [totalPesanan, setTotalPesanan] = useState(0);
  const [totalHarga, setTotalHarga] = useState(0);
  const [resetKey, setResetKey] = useState(0);

  const handleTambah = (harga) => {
    setTotalPesanan(tambahJumlah);
    setTotalHarga((prev) => Math.max(0, prev + harga));
  };

  const handleKurangi = (harga) => {
    setTotalPesanan(kurangiJumlah);
    setTotalHarga((prev) => Math.max(0, prev - harga));
  };

  const handleReset = () => {
    setTotalPesanan(0);
    setTotalHarga(0);
    setResetKey((k) => k + 1);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" backgroundColor={colors.sand} />

      <FlatList
        data={DAFTAR_MENU}
        keyExtractor={(item) => `${item.id}-${resetKey}`}
        ListHeaderComponent={
          <View>
            <AppHeader
              title="Kafe Kucing"
              subtitle="Pesan makanan dan minuman hangat untuk menemanimu bersama kucing."
            />
            <OrderSummary totalCount={totalPesanan} totalHarga={totalHarga} />
            <Text style={styles.sectionTitle}>Pilihan Menu</Text>
          </View>
        }
        renderItem={({ item }) => (
          <MenuItem
            nama={item.nama}
            harga={item.harga}
            onTambahPesanan={handleTambah}
            onKurangPesanan={handleKurangi}
          />
        )}
        ListFooterComponent={
          <AppButton
            label="Reset Semua Pesanan"
            variant="outline"
            disabled={totalPesanan === 0}
            onPress={handleReset}
            style={styles.btnReset}
          />
        }
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.sand,
  },
  listContent: {
    paddingHorizontal: spacing.s4,
    paddingBottom: spacing.s6,
  },
  sectionTitle: {
    fontSize: typography.h2.fontSize,
    fontWeight: typography.h2.fontWeight,
    lineHeight: typography.h2.lineHeight,
    color: colors.dark,
    marginTop: spacing.s2,
    marginBottom: spacing.s3,
  },
  btnReset: {
    marginTop: spacing.s4,
    marginBottom: spacing.s6,
  },
});
