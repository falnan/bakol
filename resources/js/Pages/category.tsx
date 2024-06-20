import { BottomBarNav } from "@/Components/bottomBar";
import { TopBarSearch } from "@/Components/topBar";
import LayoutMain from "@/Layouts/LayoutMain";
import { Link, router } from "@inertiajs/react";
import { useState } from "react";

export default function Category() {
    const [search, setSearch] = useState("");
    function handleSubmit(e: any) {
        e.preventDefault();
        router.get("/produk", { search });
    }
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

    return (
        <LayoutMain>
            <TopBarSearch
                search={search}
                setSearch={setSearch}
                onSubmit={handleSubmit}
            />
            <BottomBarNav />
            <div className="p-2">
                <div className="grid grid-cols-3 gap-3">
                    {category.map((item: any, idx) => (
                        <Link key={idx} href={item.link}>
                            <div className="flex flex-col items-center">
                                <img
                                    className="size-28 border rounded-lg"
                                    src={item.img}
                                    alt={item.name}
                                />
                                <p className="mt-1 text-center leading-4 text-sm">
                                    {item.name}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </LayoutMain>
    );
}
