import { BottomBarCart, BottomBarNav } from "@/Components/bottomBar";
import { TopBarCart } from "@/Components/topBar";
import LayoutMain from "@/Layouts/LayoutMain";
import { useState } from "react";

export default function Cart({ cart }: any) {
    const [data, setData] = useState(cart);

    return (
        <LayoutMain>
            <TopBarCart title="Keranjang Saya" />
            <BottomBarNav />
            <BottomBarCart totalPrice={20000} />
            <div className="p-2 grid grid-cols-1 gap-2">
                {data.map((item: any, idx: any) => (
                    <div
                        key={idx}
                        className="w-full p-1 place-items-center rounded-md bg-white border"
                    >
                        <div className="w-full flex gap-2 place-items-center border-b ">
                            <div className="w-[25%]">
                                <img
                                    className="w-full rounded-md"
                                    src={item.product_relation.image}
                                    alt=""
                                />
                            </div>
                            <div className="w-[50%] flex flex-col ">
                                <div>
                                    <p className="text-sm">
                                        {item.product_relation.title}
                                    </p>
                                </div>
                                <div className="flex gap-1">
                                    <div className="flex font-bold text-green-600">
                                        <p className="text-sm self-center font-normal">
                                            Rp
                                        </p>
                                        <p>
                                            {(
                                                item.price * item.quantity
                                            ).toLocaleString("id")}
                                        </p>
                                    </div>
                                    <div className="flex">
                                        <p className="text-xs text-slate-600 line-through self-center">
                                            Rp20000
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-[25%] flex flex-col justify-between items-center gap-1 ">
                                <div>
                                    <p className="text-green-600 h-full font-bold text-xl">
                                        +
                                    </p>
                                </div>
                                <div className="flex items-center border border-green-300 rounded-md">
                                    <p className="px-2 rounded-l-md text-sm">
                                        {item.quantity + " "}
                                    </p>
                                    <p className="px-1 rounded-r-md text-green-600 bg-green-200">
                                        {item.product_relation.unit}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-green-600 font-bold text-2xl">
                                        -
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className="text-sm text-slate-700">
                                <span className="font-bold">Catatan:</span> Aku
                                endak sayounye yang segar{" "}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </LayoutMain>
    );
}
