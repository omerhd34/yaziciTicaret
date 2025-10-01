export const temizleTelefon = (telefon) => {
  return telefon.replace(/\D/g, "");
};

export const validateForm = (formData, setMesaj) => {
  if (!formData.adSoyad.trim()) {
    setMesaj("Lütfen ad ve soyadınızı girin.");
    return false;
  }

  const temizTelefon = temizleTelefon(formData.telefon);

  if (!temizTelefon) {
    setMesaj("Lütfen telefon numaranızı girin.");
    return false;
  }

  if (temizTelefon.length !== 11) {
    setMesaj("Telefon numarası 11 haneli olmalıdır (örn: 05553332211)");
    return false;
  }

  if (!temizTelefon.startsWith("0")) {
    setMesaj("Telefon numarası 0 ile başlamalıdır.");
    return false;
  }

  if (!formData.teslim) {
    setMesaj("Lütfen istenilen teslim tarihini seçin.");
    return false;
  }

  const parseDate = (dateStr) => {
    if (!dateStr) return null;
    const parts = dateStr.split(".");
    if (parts.length === 3) {
      const [day, month, year] = parts;
      return new Date(year, month - 1, day);
    }
    return null;
  };

  const selectedDate = parseDate(formData.teslim);
  if (!selectedDate || isNaN(selectedDate.getTime())) {
    setMesaj("Geçerli bir tarih girin (DD.MM.YYYY formatında).");
    return false;
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  if (selectedDate < today) {
    setMesaj("Teslim tarihi bugünden önce olamaz.");
    return false;
  }

  if (!formData.adres.trim()) {
    setMesaj("Lütfen adres bilgisini girin.");
    return false;
  }

  if (formData.adres.trim().length < 5) {
    setMesaj("Lütfen daha detaylı bir adres girin.");
    return false;
  }

  if (!formData.aciklama.trim()) {
    setMesaj("Lütfen açıklama girin.");
    return false;
  }

  if (formData.aciklama.trim().length < 5) {
    setMesaj("Açıklama en az 5 karakter olmalıdır.");
    return false;
  }

  return true;
};
