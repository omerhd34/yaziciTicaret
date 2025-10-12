"use client"
import { useState } from "react";
import MagazaCard from "@/components/Iletisim/MagazaCard";
import CalismaSaatleri from "@/components/Iletisim/CalismaSaatleri";
import SirketBilgileri from "@/components/Iletisim/SirketBilgileri";
import ImageModal from "@/components/Iletisim/ImageModal";

export default function IletisimPage() {
 const [selectedImage, setSelectedImage] = useState(null);

 const openImage = (src, alt) => {
  setSelectedImage({ src, alt });
 };

 const closeImage = () => {
  setSelectedImage(null);
 };

 const magaza1 = {
  title: "Mağaza 1 - Profilo",
  adres: "Kemalpaşa, Atatürk Blv. No:54/E, İnegöl/Bursa",
  telefon: "0544 796 77 70",
  whatsappLink: "https://wa.me/905447967770",
  email: "info@yazici.gen.tr",
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d763.2495888466105!2d29.50960293840372!3d40.075448782807726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cbcbe261a787e9%3A0xeaaf69fe9fc53432!2zS2VtYWxwYcWfYSwgQXRhdMO8cmsgQmx2LiBObzo1NCBEOkUsIDE2NDAwIMSwbmVnw7ZsL0J1cnNh!5e0!3m2!1str!2str!4v1760307949632!5m2!1str!2str",
  images: [
   { url: "/prof2_ibo.jpg", alt: "Mağaza 1 - Görsel 1" },
   { url: "/prof1_ibo.png", alt: "Mağaza 1 - Görsel 2" }
  ]
 };

 const magaza2 = {
  title: "Mağaza 2 - Profilo",
  adres: "Cuma mah. Atatürk Blv. No:51, İnegöl/Bursa",
  telefon: "0501 349 69 91",
  whatsappLink: "https://wa.me/905013496991",
  email: "info@yazici.gen.tr",
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1526.4792750305462!2d29.50977807551087!3d40.07633667155123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cbcbe26d13d6b1%3A0xf747693e7d275e1!2zQ3VtYSwgQXRhdMO8cmsgQmx2LiBOTzo1MSwgMTY0MDAgxLBuZWfDtmwvQnVyc2E!5e0!3m2!1str!2str!4v1760308051136!5m2!1str!2str",
  images: [
   { url: "/prof2_bedo.jpg", alt: "Mağaza 2 - Görsel 1" },
   { url: "/prof1_bedo.jpg", alt: "Mağaza 2 - Görsel 2" }
  ]
 };

 return (
  <div className="py-10 sm:py-16 bg-gray-50">
   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h1 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-blue-800">İletişim</h1>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
     <MagazaCard {...magaza1} onImageClick={openImage} />
     <MagazaCard {...magaza2} onImageClick={openImage} />
    </div>

    <div className="mb-12">
     <CalismaSaatleri />
    </div>

    <SirketBilgileri />
   </div>

   <ImageModal selectedImage={selectedImage} onClose={closeImage} />
  </div>
 );
}