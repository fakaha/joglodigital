import React from "react";
import { Card } from "../elements/Card";
import inventoryImg from "../../assets/image/inventory.webp"
import cashierImg from "../../assets/image/cashier.webp"
import ecommerce from "../../assets/image/ecommerce.webp"

export const Services = () => {
  return (
    <section id="kenapakami" className="py-24 px-6 sm:px-10 max-w-6xl mx-auto w-full">
      <div className="flex flex-col gap-3 mb-16 text-center sm:text-left">
        <span className="text-xs font-bold text-stone-500 uppercase tracking-widest">Layanan Utama Kami</span>
        <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight">
          Solusi Digital Praktis Untuk Bisnis Anda
        </h3>
        <p className="text-slate-500 max-w-xl text-sm sm:text-base leading-relaxed">
          Kami menyediakan berbagai layanan pengembangan perangkat lunak berkualitas tinggi untuk membantu otomatisasi dan efisiensi bisnis Anda.
        </p>
      </div>


      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card
          image={inventoryImg}
          title="Inventory Management"
          description="Aplikasi untuk memantau dan mengelola persediaan barang secara real-time dari mana saja."
        />
        <Card
          image={cashierImg}
          title="Point of Sale"
          description="Aplikasi untuk mengelola transaksi penjualan, pencatatan otomatis, serta pembuatan laporan keuangan instan."
        />
        <Card
          image={ecommerce}
          title="E-commerce"
          description="Platform toko online modern untuk mempermudah transaksi jual beli barang dan jasa secara aman."
        />
      </div>
    </section>
  );
};

