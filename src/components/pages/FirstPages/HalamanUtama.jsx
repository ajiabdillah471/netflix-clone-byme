import React from "react";
import Head from "./Head";
import Features from "./Features";
import FeaturesSecond from "./FeaturesSecond";

const HalamanUtama = () => {
  return (
    <>
      <Head />

      <Features
        textMain="Nikmati di TV-mu"
        textSecond="Tonton di Smart TV, Playstation, Xbox, Chromecast, Apple TV, pemutar Blu-ray, dan banyak lagi"
      />
      <Features
        textMain="Download acara TV untuk menonton secara offline"
        textSecond="Simpan favoritmu dengan mudah agar selalu ada acara TV dan film yang bisa ditonton"
        addClassName="lg:order-last"
      />
      <Features
        textMain="Buat profil untuk anak"
        textSecond="Kirim anak-anak untuk bertualang bersama karakter favorit mereka di dunia yang dibuat khusus untuk mereka gratis dengan keanggotaanmu"
      />
      <FeaturesSecond textMain="Tanya Jawab Umum" />
    </>
  );
};

export default HalamanUtama;
