import { Link } from "@inertiajs/react";
import { Rating } from "react-simple-star-rating";
import { IconRightArrow } from "./icon";

interface Card {
    title: string;
    slug: string;
    image: string;
    unit: string;
    normal_price: number;
    discount_price: number;
}

export default function Card(props: Card) {
    const hapus = 0;
    return (
        <div className="w-full h-full">
            <Link href={`/produk/${props.slug}`}>
                <div className="flex justify-center">
                    <img
                        className="min-h-44 object-cover"
                        src={props.image}
                        alt=""
                    />
                </div>
                <div className="p-2">
                    <h3 className="text-sm text-slate-900">{props.title}</h3>
                    <div className="flex justify-between">
                        <p className="font-bold text-green-600 overflow-hidden">
                            <span className="text-xs">Rp</span>
                            {props.discount_price.toLocaleString("id")}
                            <span className="text-xs">/{props.unit}</span>
                            <span className="ml-1 text-xs text-slate-400 line-through">
                                Rp{props.normal_price.toLocaleString("id")}/kg
                            </span>
                        </p>
                        <p className="px-1 bg-green-200 text-green-700 text-xs self-center">
                            -
                            {(
                                ((props.normal_price - props.discount_price) /
                                    props.normal_price) *
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
            </Link>
        </div>
    );
}

export function CardTitle({ name }: { name: string }) {
    return (
        <div className="flex justify-between items-center">
            <h2 className="font-bold text-green-700">{name}</h2>
            <Link href="/produk">
                <div className="flex items-center">
                    <p className="text-sm text-green-700">Lihat semua</p>
                    <IconRightArrow size="size-3" color="fill-green-700" />
                </div>
            </Link>
        </div>
    );
}
