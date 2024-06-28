import { BottomBarNav } from "@/Components/bottomBar";
import Card from "@/Components/card";
import { IconRightArrow } from "@/Components/icon";
import { Pagination } from "@/Components/pagination";
import { TopBarSearch } from "@/Components/topBar";
import LayoutMain from "@/Layouts/LayoutMain";
import { Link, router } from "@inertiajs/react";
import axios from "axios";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroller";

export default function Product({ paramSearch, product }: any) {
    const [search, setSearch] = useState(paramSearch);

    function handleSubmit(e: any) {
        e.preventDefault();
        router.get("produk", { search });
    }

    return (
        <LayoutMain>
            <TopBarSearch
                search={search}
                setSearch={setSearch}
                onSubmit={handleSubmit}
            />
            <BottomBarNav />
            <div className="p-2 ">
                <div className="grid grid-cols-2 gap-2">
                    {product.data.map((item: any) => (
                        <div key={item.title} className="bg-white p-1">
                            <Card
                                title={item.title}
                                slug={item.slug}
                                image={item.image}
                                discount_price={item.discount_price}
                                normal_price={item.normal_price}
                                unit={item.unit}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className="h-40 flex">
                <div className="mt-8 mx-auto">
                    <Pagination data={product} />
                </div>
            </div>
        </LayoutMain>
    );
}
