import React from "react";
import { Card } from "../elements/Card";
import inventoryImg from "../../assets/image/inventory.webp"
import cashierImg from "../../assets/image/cashier.webp"
import ecommerce from "../../assets/image/ecommerce.webp"

export const Services = () => {
  return (
    <section id="kenapakami" className="relative py-28 px-6 sm:px-10 max-w-6xl mx-auto w-full overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl -z-10" />
      
      <div className="flex flex-col gap-4 mb-16 text-center sm:text-left">
        <div className="text-sm font-bold text-cyan-400 uppercase tracking-widest">Layanan Utama Kami</div>
        <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Solusi Digital <span className="text-gradient-cyan-indigo">Inovatif</span> Untuk Bisnis Anda
        </h3>
        <p className="text-zinc-400 max-w-xl text-sm sm:text-base">
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

