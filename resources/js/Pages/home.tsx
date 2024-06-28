import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Card, { CardTitle } from "../Components/card";
import { useState } from "react";
import LayoutMain from "@/Layouts/LayoutMain";
import { BottomBarNav } from "@/Components/bottomBar";
import { TopBarHome } from "@/Components/topBar";
import { Link, router } from "@inertiajs/react";
import { IconRightArrow } from "@/Components/icon";

export default function Home({ product }: any) {
    const [search, setSearch] = useState("");
    const category = [
        {
            name: "Sayur",
            img: "/img/kategori/sayur.jpg",
            link: "/produk?category=sayur",
        },
        {
            name: "Buah",
            img: "/img/kategori/buah.jpg",
            link: "/produk?category=buah",
        },
        {
            name: "Protein Hewani",
            img: "/img/kategori/protein-hewani.jpg",
            link: "/produk?category=sayur",
        },
        {
            name: "Protein Nabati",
            img: "/img/buah/jagung.JPG",
            link: "/produk?category=sayur",
        },
        {
            name: "Sembako",
            img: "/img/kategori/sembako.jpg",
            link: "/produk?category=sayur",
        },
        {
            name: "Siap Saji",
            img: "/img/kategori/siap-saji.jpg",
            link: "/produk?category=sayur",
        },
        {
            name: "Bumbu dan Rempah",
            img: "/img/kategori/bumbu-dan-rempah.jpg",
            link: "/produk?category=sayur",
        },
    ];

    function handleSubmit(e: any) {
        e.preventDefault();
        router.get("/produk", { search });
    }

    return (
        <LayoutMain>
            <TopBarHome
                search={search}
                setSearch={setSearch}
                onSubmit={handleSubmit}
            />
            <BottomBarNav />
            <div>
                <Carousel
                    dynamicHeight={true}
                    showArrows={true}
                    infiniteLoop={true}
                    autoPlay={true}
                    interval={3000}
                    showThumbs={false}
                    showIndicators={true}
                    showStatus={false}
                >
                    <img src="/img/banner2.png" />
                    <img src="/img/banner2.png" />
                    {/* <img src="/img/banner1.jpeg" /> */}
                    {/* <img src="/img/image 10.png" />
                    <img src="/img/image 10.jpg" />
                    <img src="/img/image 12.jpg" />
                    <img src="/img/image 11.jpg" /> */}
                </Carousel>
            </div>
            <div className="w-full p-4 pt-8 bg-white grid grid-cols-4 justify-items-center gap-y-4">
                {category.map((item: any, idx) => (
                    <Link key={idx} href={item.link}>
                        <div className=" flex flex-col items-center">
                            <img
                                className="size-16 border rounded-lg"
                                src={item.img}
                                alt={item.name}
                            />
                            <p className="mt-1 text-center leading-4 text-sm">
                                {item.name}
                            </p>
                        </div>
                    </Link>
                ))}
                <Link href="/produk">
                    <div className=" flex flex-col items-center">
                        <img
                            className="size-16 border rounded-lg"
                            src="/img/kategori/lainnya2.svg"
                            alt="dsb"
                        />
                        <p className="mt-1 text-center leading-4 text-sm">
                            Lainnya
                        </p>
                    </div>
                </Link>
            </div>
            <div className="mt-4 p-4 bg-white">
                <CardTitle name="Produk Terlaris" />
                <div className="mt-3 flex gap-4 overflow-auto">
                    {product.map((item: any, idx: any) => (
                        <div
                            key={idx}
                            className="min-w-60 rounded-xl shadow-sm border flex justify-center items-center"
                        >
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
            <div className="mt-4 p-2">
                <CardTitle name="Rekomendasi" />
                <div className="mt-2 grid grid-cols-2 gap-2">
                    {product.map((item: any, idx: any) => (
                        <div key={idx} className="p-1 bg-white">
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
                    <Link className="flex place-items-center" href="/produk">
                        <p className="font-bold text-green-700">
                            Lihat Semua Produk
                        </p>
                        <IconRightArrow color="fill-green-700" size="size-3" />
                    </Link>
                </div>
            </div>
        </LayoutMain>
    );
}
