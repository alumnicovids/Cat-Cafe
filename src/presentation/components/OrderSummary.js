import { View, Text, StyleSheet } from "react-native";
import { colors, spacing, typography } from "../theme";
import {
  berhakDiskon,
  hitungHargaAkhir,
  DISKON,
} from "../../domain/orderRules";
import { formatRupiah } from "../../shared/formatRupiah";
import PromoBadge from "./PromoBadge";

const OrderSummary = ({ totalCount, totalHarga }) => {
  const isDiscountActive = berhakDiskon(totalCount);
  const hargaAkhir = hitungHargaAkhir(totalHarga, totalCount);
  const potongan = totalHarga - hargaAkhir;
  const sisaUntukDiskon = Math.max(0, DISKON.MIN_ITEM - totalCount);

  return (
    <View style={styles.card}>
      <View style={styles.headerRow}>
        <Text style={styles.title}>Ringkasan Pesanan</Text>
        <View style={styles.countBadge}>
          <Text style={styles.countBadgeText}>{totalCount} item</Text>
        </View>
      </View>

      {totalCount === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>Belum ada menu yang dipilih</Text>
          <Text style={styles.emptySubtext}>
            Pilih menu favoritmu di bawah untuk memulai pesanan.
          </Text>
        </View>
      ) : (
        <View style={styles.detailsContainer}>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Subtotal</Text>
            <Text style={styles.detailValue}>{formatRupiah(totalHarga)}</Text>
          </View>

          {isDiscountActive && (
            <View style={styles.detailRow}>
              <Text style={styles.discountLabel}>
                Diskon Promo ({DISKON.PERSEN}%)
              </Text>
              <Text style={styles.discountValue}>
                -{formatRupiah(potongan)}
              </Text>
            </View>
          )}

          <View style={styles.divider} />

          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>Total Pembayaran</Text>
            <Text style={styles.totalValue}>{formatRupiah(hargaAkhir)}</Text>
          </View>

          {isDiscountActive ? (
            <PromoBadge
              text={`Diskon ${DISKON.PERSEN}% berhasil diterapkan!`}
            />
          ) : (
            <Text style={styles.hintText}>
              Tambah {sisaUntukDiskon} item lagi untuk mendapatkan diskon{" "}
              {DISKON.PERSEN}%.
            </Text>
          )}
        </View>
      )}
    </View>
  );
};

export default OrderSummary;

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 16,
    padding: spacing.s4,
    marginBottom: spacing.s4,
    borderWidth: 1,
    borderColor: colors.border,
    shadowColor: colors.cardShadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: typography.h3.fontSize,
    fontWeight: typography.h3.fontWeight,
    color: colors.dark,
  },
  countBadge: {
    backgroundColor: colors.primary100,
    paddingHorizontal: spacing.s2,
    paddingVertical: spacing.s1,
    borderRadius: 8,
  },
  countBadgeText: {
    fontSize: typography.bodySmall.fontSize,
    fontWeight: typography.bodySmall.fontWeight,
    color: colors.primary700,
  },
  emptyContainer: {
    marginTop: spacing.s2,
  },
  emptyText: {
    fontSize: typography.bodyNormal.fontSize,
    color: colors.stone,
  },
  emptySubtext: {
    fontSize: typography.bodySmall.fontSize,
    color: colors.stone,
    marginTop: spacing.s1,
  },
  detailsContainer: {
    marginTop: spacing.s3,
  },
  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: spacing.s1,
  },
  detailLabel: {
    fontSize: typography.bodyNormal.fontSize,
    color: colors.stone,
  },
  detailValue: {
    fontSize: typography.bodyNormal.fontSize,
    color: colors.dark,
    fontWeight: "500",
  },
  discountLabel: {
    fontSize: typography.bodyNormal.fontSize,
    color: colors.terracotta,
  },
  discountValue: {
    fontSize: typography.bodyNormal.fontSize,
    color: colors.terracotta,
    fontWeight: "600",
  },
  divider: {
    height: 1,
    backgroundColor: colors.border,
    marginVertical: spacing.s2,
  },
  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  totalLabel: {
    fontSize: typography.bodyLargeBold.fontSize,
    fontWeight: typography.bodyLargeBold.fontWeight,
    color: colors.dark,
  },
  totalValue: {
    fontSize: typography.h3.fontSize,
    fontWeight: "700",
    color: colors.primary700,
  },
  hintText: {
    fontSize: typography.bodySmall.fontSize,
    color: colors.clay,
    marginTop: spacing.s2,
    fontStyle: "italic",
  },
});
