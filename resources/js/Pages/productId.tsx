import CardCheckout from "@/Components/cardCheckout";
import TopSearch from "@/Components/topsearch";
import { useState } from "react";
import { Rating } from "react-simple-star-rating";

export default function ProductId({ productId }: any) {
    const [search, setSearch] = useState("");
    return (
        <main className="relative max-w-md mx-auto">
            <div className="w-full max-w-md fixed top-0 z-10 flex place-items-center h-16 shadow-md bg-white">
                <TopSearch
                    onChange={(e: any) => setSearch(e.target.value)}
                    value={search}
                />
            </div>
            <div className="w-full max-w-md fixed bottom-0 z-10 bg-white">
                <CardCheckout
                    unit={productId.unit}
                    netPrice={productId.sellPrice}
                />
            </div>
            <div className="mt-16 mb-44 w-full">
                <div className="relative w-full">
                    <img className="size-full" src="/img/ikan.png" alt="" />
                    <div className="w-full px-4 absolute bottom-0 bg-orange-500">
                        <p className="text-white">Paling sering dibeli.</p>
                    </div>
                </div>
                <div className="p-4">
                    <h3 className="text-lg text-slate-700">
                        {productId.title}
                    </h3>
                    <div className="flex justify-between">
                        <p className="font-bold text-2xl text-green-600 overflow-hidden">
                            <span className="text-sm">Rp</span>
                            {productId.sellPrice.toLocaleString("id")}
                            <span className="text-sm">/kg</span>
                            <span className="ml-1 text-sm text-slate-400 line-through">
                                Rp{productId.adPrice.toLocaleString("id")}/kg
                            </span>
                        </p>
                        <p className="px-1 bg-green-200 text-green-700 text-xs self-center">
                            -
                            {(
                                ((productId.adPrice - productId.sellPrice) /
                                    productId.adPrice) *
                                100
                            ).toFixed(0)}
                            %
                        </p>
                    </div>
                    <div className="">
                        <Rating
                            initialValue={4}
                            size={18}
                            emptyStyle={{ display: "flex" }}
                            fillStyle={{ display: "-webkit-inline-box" }}
                            readonly
                        />
                    </div>
                </div>
                <div className="p-4 border-t border-gray-300">
                    <p>{productId.description}</p>
                </div>
            </div>
        </main>
    );
}
