import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors, spacing } from "../theme";
import {
  hitungSubtotal,
  tambahJumlah,
  kurangiJumlah,
} from "../../domain/orderRules";
import { formatRupiah } from "../../shared/formatRupiah";
import QuantityStepper from "./QuantityStepper";
import AppButton from "./AppButton";

const MenuItem = ({ nama, harga, onTambahPesanan, onKurangPesanan }) => {
  const [qty, SetQty] = useState(0);

  const handleTambah = () => {
    SetQty(tambahJumlah(qty));
    onTambahPesanan(harga);
  };

  const handleKurang = () => {
    if (qty === 0) return;
    SetQty(kurangiJumlah(qty));
    onKurangPesanan(harga);
  };

  return (
    <View style={styles.card}>
      <View style={styles.info}>
        <Text style={styles.nama}>{nama}</Text>
        <Text style={styles.harga}>{formatRupiah(harga)}</Text>
        {qty > 0 && (
          <Text style={styles.subtotal}>
            {qty} * {formatRupiah(harga)} ={" "}
            {formatRupiah(hitungSubtotal(qty, harga))}
          </Text>
        )}
      </View>

      <View style={styles.actions}>
        <QuantityStepper qty={qty} onKurang={handleKurang} />
        <AppButton
          label={"Tambah"}
          onPress={handleTambah}
          style={styles.btnTambah}
        />
      </View>
    </View>
  );
};

export default MenuItem;

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 16,
    padding: spacing.s4,
    marginBottom: spacing.s3,
    shadowColor: colors.dark,
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 2,
  },
  info: { marginBottom: spacing.s3 },
  nama: { fontSize: 18, fontWeight: "600", color: colors.dark },
  harga: { fontSize: 14, color: colors.stone, marginTop: spacing.s1 },
  subtotal: { fontSize: 12, color: colors.primary700, marginTop: spacing.s1 },
  actions: { flexDirection: "row", alignItems: "center" },
  btnTambah: { flex: 1 },
});
