import { use, useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

import { colors, spacing } from "./src/presentation/theme";
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
      <StatusBar style="dark" />
      <AppHeader title="Kafe Kucing" subtitle="Pilih menu favoritmu" />
      <OrderSummary totalCount={totalPesanan} totalHarga={totalHarga} />

      <FlatList
        data={DAFTAR_MENU}
        keyExtractor={(item) => `${item.id}-${resetKey}`}
        renderItem={({ item }) => (
          <MenuItem
            nama={item.nama}
            harga={item.harga}
            onTambahPesanan={handleTambah}
            onKurangPesanan={handleKurangi}
          />
        )}
        showsVerticalScrollIndicator={false}
      />

      <AppButton
        label="Reset Pesanan"
        variant="outline"
        onPress={handleReset}
        style={styles.btnReset}
      />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.sand,
    paddingHorizontal: spacing.s4,
  },
  btnReset: { marginVertical: spacing.s3 },
});
