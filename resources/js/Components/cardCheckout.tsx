import { useState } from "react";
import { IconChat, IconShare } from "./icon";
import { InputTextBox } from "./input";

export default function CardCheckout({ unit, netPrice }: any) {
    const [qty, setQty] = useState(1);
    return (
        <section className="w-full p-4 flex flex-col gap-4 bg-white border-t-2 border-gray-300">
            <div className="flex gap-2">
                <div className="w-1/2 flex items-center">
                    <p className="leading-5">Masukkan Berat Produk</p>
                </div>
                <div className="relative w-1/2">
                    <InputTextBox
                        id="qty"
                        type="number"
                        placeholder={0.5}
                        onChange={(e: any) => setQty(e.target.value)}
                    />
                    <div className="absolute w-fit h-full px-3 py-2 top-0 right-0 rounded-r-md bg-gray-200">
                        <p className="text-sm text-center text-slate-500 capitalize">
                            {unit}
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex gap-2">
                <div className="w-[50%] flex gap-2">
                    <div className="p-2 px-3  flex items-center border border-green-500 rounded-md">
                        <IconShare color="fill-green-600" />
                    </div>
                    <div className="w-full p-2 flex justify-center items-center gap-1 border border-green-500 rounded-md">
                        <IconChat color="fill-green-600" />{" "}
                        <p className="font-bold text-green-600">Chat</p>
                    </div>
                </div>
                <div className="w-[50%] p-2 text-center text-white font-bold bg-green-500 rounded-md">
                    <p>
                        <span className="text-sm">Rp</span>
                        {(qty * netPrice).toLocaleString("id")}
                    </p>
                </div>
            </div>
        </section>
    );
}
