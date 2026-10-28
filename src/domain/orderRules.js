export const DISKON = {
  MIN_ITEM: 5,
  PERSEN: 10,
};

export const berhakDiskon = (totalCount) => totalCount >= DISKON.MIN_ITEM;

export const hitungHargaAkhir = (totalHarga, totalCount) =>
  berhakDiskon(totalCount)
    ? totalHarga * (1 - DISKON.PERSEN / 100)
    : totalHarga;

export const hitungSubtotal = (qty, harga) => qty * harga;

export const tambahJumlah = (jumlah) => jumlah + 1;

export const kurangiJumlah = (jumlah) => Math.max(0, jumlah - 1);
