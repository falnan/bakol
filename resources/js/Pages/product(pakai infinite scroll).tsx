import { BottomBarNav } from "@/Components/bottomBar";
import Card from "@/Components/card";
import { TopBarSearch } from "@/Components/topBar";
import LayoutMain from "@/Layouts/LayoutMain";
import { router } from "@inertiajs/react";
import axios from "axios";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroller";

export default function Product({ paramSearch, paramCategory }: any) {
    const prmSearch: string = paramSearch;
    const prmCategory: string = paramCategory;
    const [search, setSearch] = useState(paramSearch);
    const [page, setPage] = useState(1);
    const [data, setData] = useState<any>([]);
    const [pagetotal, setPagetotal] = useState<number>(10);

    function loadFunc() {
        axios
            .get(
                `/api/product?search=${prmSearch}&category=${prmCategory}&page=${page}`
            )
            .then((res: any) => {
                setData((val: any) => [...val, ...res.data.data]);
                setPagetotal(res.data.last_page);
                setPage((prev) => prev + 1);
            })
            .catch(() => {
                console.log("error ni");
            })
            .finally(() => {});
    }
    function handleSubmit(e: any) {
        e.preventDefault();
        router.get("produk", { search });
    }

    const loader = (
        <div className="w-full text-center">
            <div className="loader" key="loader">
                Loading ...
            </div>
        </div>
    );
    console.log({ d: data, p: page, pt: pagetotal, prm: prmSearch });

    return (
        <LayoutMain>
            <TopBarSearch
                search={search}
                setSearch={setSearch}
                onSubmit={handleSubmit}
            />
            <BottomBarNav />
            <div className="p-2 ">
                <InfiniteScroll
                    loadMore={loadFunc}
                    hasMore={page <= pagetotal ? true : false}
                    loader={loader}
                >
                    <div className="grid grid-cols-2 gap-2">
                        {data &&
                            data.map((item: any) => (
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
                </InfiniteScroll>
            </div>
        </LayoutMain>
    );
}
