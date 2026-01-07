import React from "react";
import { Card } from "../elements/Card";
import inventoryImg from "../../assets/image/inventory.webp"
import cashierImg from "../../assets/image/cashier.webp"
import ecommerce from "../../assets/image/ecommerce.webp"

export const Services = () => {
  return (
    <div id="kenapakami" className="flex flex-col gap-10 py-20 px-10">
      <h3 className="text-4xl font-bold">Layanan</h3>
      <div className="grid grid-cols lg:grid-cols-3 gap-4">
        <Card
          image={inventoryImg}
          title="Inventory Management"
          description="Aplikasi untuk memantau dan mengelola persediaan barang secara real-time."
        />
        <Card
          image={cashierImg}
          title="Point of Sale"
          description="Aplikasi untuk mengelola transaksi penjualan, pencatatan automatis dan laporan keuangan."
        />
        <Card
          image={ecommerce}
          title="E-commerce"
          description="Aplikasi untuk transaksi jual beli barang dan jasa secara online."
        />
      </div>
    </div>
  );
};
