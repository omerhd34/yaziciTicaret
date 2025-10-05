import {
  FaHome,
  FaBoxOpen,
  FaTruck,
  FaEnvelope,
  FaUserShield,
} from "react-icons/fa";
import { BiSupport } from "react-icons/bi";

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
    icon: BiSupport,
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
