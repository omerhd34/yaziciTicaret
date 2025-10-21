# Yazıcı Ticaret - PROFiLO Dayanıklı Ev Aletleri

Beyaz eşya ve elektronik ürün talep yönetim sistemi. Müşterilerin ürün talep edebileceği, talep durumlarını takip edebileceği ve destek alabileceği modern bir web uygulaması.

## 🚀 Özellikler

### Müşteri Paneli
- 🛒 **Ürün Talep Formu**: Detaylı ürün talep oluşturma
- 📦 **İstek Takibi**: Telefon numarası ile talep sorgulama
- ❌ **Talep İptali**: Belirli durumlarda talep iptal etme
- 💬 **Destek Sistemi**: İletişim formu ile destek talep etme
- 📍 **İletişim Bilgileri**: Mağaza bilgileri, harita ve çalışma saatleri
- 📱 **Responsive Tasarım**: Mobil, tablet ve masaüstü uyumlu

### Admin Paneli
- 👤 **Güvenli Giriş**: Şifreli admin girişi
- 📊 **İstatistikler**: Talep durumlarının özet gösterimi
- ✏️ **Talep Yönetimi**: Talep düzenleme, durum güncelleme ve silme
- 💬 **Destek Mesajları**: Gelen destek mesajlarını görüntüleme ve yönetme
- 🔔 **Bildirimler**: Başarılı işlemler için görsel bildirimler

## 🛠️ Teknolojiler

- **Framework**: Next.js 15.5.4
- **React**: 19.1.0
- **Veritaritabanı**: MongoDB
- **Styling**: Tailwind CSS 4
- **İkonlar**: React Icons, Lucide React
- **Güvenlik**: bcryptjs (şifreleme)

## 📋 Gereksinimler

- Node.js 18.x veya üzeri
- MongoDB veritabanı
- npm veya yarn paket yöneticisi

## 🔧 Kurulum

1. **Projeyi klonlayın**
```bash
git clone <repository-url>
cd yaziciticaretteslimat
```

2. **Bağımlılıkları yükleyin**
```bash
npm install
# veya
yarn install
```

3. **Ortam değişkenlerini ayarlayın**

`.env.local` dosyası oluşturun ve aşağıdaki değişkenleri ekleyin:
```env
# MongoDB Bağlantısı
MONGODB_URI=mongodb://localhost:27017/yaziciticaret
# veya MongoDB Atlas bağlantı string'i
# MONGODB_URI=mongodb+srv://kullaniciadi:sifre@cluster.mongodb.net/yaziciticaret

# Admin Kimlik Bilgileri
ADMIN_USERNAME=admin
ADMIN_PASSWORD=güvenli_şifre_buraya
```

4. **Geliştirme sunucusunu başlatın**
```bash
npm run dev
# veya
yarn dev
```

Uygulama [http://localhost:3000](http://localhost:3000) adresinde çalışacaktır.

## 📦 Production Build
```bash
# Build oluştur
npm run build

# Production sunucusunu başlat
npm start
```

## 🗂️ Proje Yapısı
```
├── app/
│   ├── admin/              # Admin paneli sayfaları
│   ├── api/                # API route'ları
│   ├── destek/             # Destek sayfası
│   ├── iletisim/           # İletişim sayfası
│   ├── kargo-takip/        # Talep takip sayfası
│   ├── urun-istegi/        # Ürün talep formu
│   └── utils/              # Yardımcı fonksiyonlar
├── components/
│   ├── Admin/              # Admin bileşenleri
│   ├── Destek/             # Destek bileşenleri
│   ├── Footer/             # Footer bileşenleri
│   ├── Form/               # Form bileşenleri
│   ├── Home/               # Ana sayfa bileşenleri
│   ├── Iletisim/           # İletişim bileşenleri
│   ├── KargoTakip/         # Takip bileşenleri
│   └── Navbar/             # Navigasyon bileşenleri
├── lib/
│   └── mongodb.js          # MongoDB bağlantı ayarları
├── public/                 # Statik dosyalar (resimler vb.)
└── package.json
```

## 🔐 Güvenlik

- Admin paneli şifre korumalı
- Token tabanlı oturum yönetimi
- Telefon numarası doğrulama
- XSS koruması
- CSRF koruması (Next.js built-in)

## 📱 API Endpoints

### Müşteri API'leri
- `POST /api/urun-talepleri` - Yeni talep oluştur
- `GET /api/urun-talepleri` - Tüm talepleri listele
- `GET /api/kargo-sorgula?telefon=XXX` - Telefon ile sorgula
- `PUT /api/talep-iptal` - Talebi iptal et
- `POST /api/destek` - Destek mesajı gönder

### Admin API'leri
- `POST /api/auth` - Admin girişi
- `PUT /api/kargolar` - Talep güncelle
- `DELETE /api/kargolar` - Talep sil
- `GET /api/destek` - Destek mesajlarını listele
- `DELETE /api/destek` - Destek mesajı sil

## 🎨 Özelleştirme

### Renk Teması
Tailwind CSS kullanılmaktadır. Renk paletini `tailwind.config.js` dosyasından özelleştirebilirsiniz.

### Logo ve Marka
- Logo bileşenleri: `components/Logo.jsx` ve `components/Logo2.jsx`
- Navbar logosu: `components/Navbar/NavbarLogo.jsx`

## 🐛 Bilinen Sorunlar ve Sınırlamalar

- localStorage kullanımı (browser storage) - admin token yönetimi için
- Client-side form validasyonu
- Telefon numarası formatı Türkiye'ye özel (11 haneli, 0 ile başlayan)


## 👥 İletişim

**Yazıcı Ticaret**
- 📍 Adres: Kemalpaşa, Atatürk Blv. No:54/E, İnegöl/Bursa
- 📞 Telefon: 0544 796 77 70 / 0501 349 69 91
- 📧 Email: info@yazici.gen.tr

**Not**: Bu uygulama 1997'den beri hizmet veren Yazıcı Ticaret için geliştirilmiştir.
