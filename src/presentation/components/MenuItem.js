import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors, spacing, typography } from "../theme";
import {
  hitungSubtotal,
  tambahJumlah,
  kurangiJumlah,
} from "../../domain/orderRules";
import { formatRupiah } from "../../shared/formatRupiah";
import QuantityStepper from "./QuantityStepper";
import AppButton from "./AppButton";

const MenuItem = ({ nama, harga, onTambahPesanan, onKurangPesanan }) => {
  const [qty, setQty] = useState(0);

  const handleTambah = () => {
    setQty(tambahJumlah(qty));
    onTambahPesanan(harga);
  };

  const handleKurang = () => {
    if (qty === 0) return;
    setQty(kurangiJumlah(qty));
    onKurangPesanan(harga);
  };

  const isSelected = qty > 0;

  return (
    <View style={[styles.card, isSelected && styles.cardSelected]}>
      <View style={styles.contentRow}>
        <View style={styles.info}>
          <Text style={styles.nama}>{nama}</Text>
          <Text style={styles.harga}>{formatRupiah(harga)}</Text>
          {isSelected && (
            <View style={styles.subtotalBadge}>
              <Text style={styles.subtotalText}>
                Subtotal: {formatRupiah(hitungSubtotal(qty, harga))}
              </Text>
            </View>
          )}
        </View>

        <View style={styles.actions}>
          {qty === 0 ? (
            <AppButton
              label="Tambah"
              onPress={handleTambah}
              style={styles.btnTambah}
            />
          ) : (
            <QuantityStepper
              qty={qty}
              onKurang={handleKurang}
              onTambah={handleTambah}
            />
          )}
        </View>
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
    borderWidth: 1,
    borderColor: colors.border,
    shadowColor: colors.cardShadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,
  },
  cardSelected: {
    backgroundColor: colors.primary50,
    borderColor: colors.primary200,
  },
  contentRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  info: {
    flex: 1,
    marginRight: spacing.s3,
  },
  nama: {
    fontSize: typography.h3.fontSize,
    fontWeight: typography.h3.fontWeight,
    color: colors.dark,
    lineHeight: typography.h3.lineHeight,
  },
  harga: {
    fontSize: typography.bodyNormal.fontSize,
    color: colors.stone,
    marginTop: spacing.s1,
    lineHeight: typography.bodyNormal.lineHeight,
  },
  subtotalBadge: {
    marginTop: spacing.s2,
    alignSelf: "flex-start",
  },
  subtotalText: {
    fontSize: typography.bodySmall.fontSize,
    color: colors.primary700,
    fontWeight: "600",
  },
  actions: {
    alignItems: "flex-end",
    justifyContent: "center",
  },
  btnTambah: {
    minWidth: 96,
  },
});
