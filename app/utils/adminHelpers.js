export function getDurumRenk(durum) {
  switch (durum) {
    case "Yeni İstek":
      return "bg-yellow-50";
    case "İstek İnceleniyor":
      return "bg-purple-50";
    case "Başarılı İstek":
      return "bg-green-50";
    default:
      return "bg-white";
  }
}

export function formatTarih(tarihStr) {
  if (!tarihStr) return "-";
  try {
    return new Date(tarihStr).toLocaleString("tr-TR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch (error) {
    return tarihStr;
  }
}
