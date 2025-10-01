import {
  FaHome,
  FaBoxOpen,
  FaTruck,
  FaLifeRing,
  FaEnvelope,
  FaUserShield,
} from "react-icons/fa";

export const menuItems = [
  {
    href: "/",
    icon: FaHome,
    label: "Ana Sayfa",
  },
  {
    href: "/urun-istegi",
    icon: FaBoxOpen,
    label: "Ürün İsteği",
  },
  {
    href: "/kargo-takip",
    icon: FaTruck,
    label: "İstek Takibi",
  },
  {
    href: "/destek",
    icon: FaLifeRing,
    label: "Destek",
  },
  {
    href: "/iletisim",
    icon: FaEnvelope,
    label: "İletişim",
  },
];

export const adminMenuItem = {
  href: "/admin/giris",
  icon: FaUserShield,
  label: "Admin",
};
