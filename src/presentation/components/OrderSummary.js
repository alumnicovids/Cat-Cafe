import { View, Text, StyleSheet } from "react-native";
import { colors, spacing } from "../theme";
import {
  berhakDiskon,
  hitungHargaAkhir,
  DISKON,
} from "../../domain/orderRules";
import { formatRupiah } from "../../shared/formatRupiah";
import PromoBadge from "./PromoBadge";

const OrderSummary = ({ totalCount, totalHarga }) => {
  return (
    <View style={styles.box}>
      <Text style={styles.total}>Total Item Dipesan: {totalCount}</Text>
      <Text style={styles.harga}>
        Total Harga: {formatRupiah(hitungHargaAkhir(totalHarga, totalCount))}
      </Text>
      {berhakDiskon(totalCount) && (
        <PromoBadge
          text={`Selamat! Anda Mendapatkan Diskon ${DISKON.PERSEN}%`}
        />
      )}
    </View>
  );
};

export default OrderSummary;

const styles = StyleSheet.create({
  box: {
    backgroundColor: colors.primary100,
    borderRadius: 16,
    padding: spacing.s4,
    marginBottom: spacing.s4,
  },
  total: { fontSize: 16, fontWeight: "600", color: colors.dark },
  harga: { fontSize: 14, color: colors.primary700, marginTop: spacing.s1 },
});
