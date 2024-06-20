import { BottomBarCart } from "@/Components/bottomBar";
import { TopBarCart } from "@/Components/topBar";
import LayoutMain from "@/Layouts/LayoutMain";
import { useState } from "react";

export default function Checkout({ cart }: any) {
    const [data, setData] = useState(cart);
    return (
        <LayoutMain>
            <TopBarCart title="Checkout" />
            <BottomBarCart totalPrice={20000} />
            <div className="w-full bg-white">Alamat</div>
            <div className="p-2 flex flex-col gap-4">
                <div className="grid grid-cols-1 gap-1">
                    {data.map((item: any, idx: any) => (
                        <div
                            key={idx}
                            className="w-full p-1 flex gap-2 place-items-center rounded-md bg-white border"
                        >
                            <div className="w-[25%]">
                                <img
                                    className="w-full rounded-md"
                                    src={item.product_relation.image}
                                    alt=""
                                />
                            </div>
                            <div className="w-[60%] flex flex-col">
                                <p className="text-sm">
                                    {item.product_relation.title}
                                </p>
                                <p className="font-bold">
                                    Rp
                                    {(
                                        item.price * item.quantity
                                    ).toLocaleString("id")}
                                </p>
                            </div>
                            <div className="w-[15%] h-full flex justify-center items-center">
                                <p className="text-sm">
                                    {item.quantity +
                                        " " +
                                        item.product_relation.unit}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-between rounded-md bg-white p-2">
                    <div className="flex gap-2">
                        <p className="font-bold">Metode Pembayaran </p>
                        <p> (COD)</p>
                    </div>
                    <p>Ganti</p>
                </div>
                <div className="flex flex-col rounded-md bg-white p-2">
                    <p className="font-bold">Rincian Pembayaran</p>
                    <div className="flex justify-between">
                        <p>Harga Produk</p>
                        <p>Rp120.000</p>
                    </div>
                    <div className="flex justify-between">
                        <p>Ongkos Kirim</p>
                        <p>Rp10.000</p>
                    </div>
                    <div className="flex justify-between">
                        <p>Total</p>
                        <p>Rp130.000</p>
                    </div>
                </div>
            </div>
        </LayoutMain>
    );
}
