import React from "react";
import { Card } from "../elements/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxes, faShoppingCart, faStore } from "@fortawesome/free-solid-svg-icons";

export const Services = () => {
  return (
    <section id="kenapakami" className="py-24 px-6 sm:px-10 max-w-6xl mx-auto w-full">
      <div className="flex flex-col gap-3 mb-16 text-center sm:text-left">
        <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Layanan Utama Kami</span>
        <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight">
          Solusi Digital Praktis Untuk Bisnis Anda
        </h3>
        <p className="text-slate-500 max-w-xl text-sm sm:text-base leading-relaxed">
          Kami menyediakan berbagai layanan pengembangan perangkat lunak berkualitas tinggi untuk membantu otomatisasi dan efisiensi bisnis Anda.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card
          title="Inventory Management"
          description="Aplikasi untuk memantau dan mengelola persediaan barang secara real-time dari mana saja."
          icon={<FontAwesomeIcon icon={faBoxes} />}
          className="hover:shadow-200 transition-shadow duration-300"
        />
        <Card
          title="Point of Sale"
          description="Aplikasi untuk mengelola transaksi penjualan, pencatatan otomatis, serta pembuatan laporan keuangan instan."
          icon={<FontAwesomeIcon icon={faShoppingCart} />}
          className="hover:shadow-200 transition-shadow duration-300"
        />
        <Card
          title="E-commerce"
          description="Platform toko online modern untuk mempermudah transaksi jual beli barang dan jasa secara aman."
          icon={<FontAwesomeIcon icon={faStore} />}
          className="hover:shadow-200 transition-shadow duration-300"
        />
      </div>
    </section>
  );
};