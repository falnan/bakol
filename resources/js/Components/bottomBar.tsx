import { Link } from "@inertiajs/react";
import { IconCartShopping, IconCategory, IconHome, IconUser } from "./icon";

export function BottomBarNav() {
    const menu = [
        {
            name: "Beranda",
            icon: <IconHome size="size-7" color="fill-gray-700" />,
            link: "/",
        },
        {
            name: "Kategori",
            icon: <IconCategory color="fill-gray-900" />,
            link: "kategori",
        },
        {
            name: "Keranjang",
            icon: <IconCartShopping color="stroke-gray-800" size="size-6" />,
            link: "keranjang",
        },
        {
            name: "Akun",
            icon: <IconUser color="fill-gray-700" />,
            link: "akun",
        },
    ];
    return (
        <div className="w-full max-w-md h-16 fixed bottom-0 z-20 bg-white">
            <div className="w-full h-full flex justify-around place-items-center bg-white border-t">
                {menu.map((item: any, idx) => (
                    <div key={idx}>
                        <Link href={item.link}>
                            <div className="flex justify-center">
                                {item.icon}
                            </div>
                            <p>{item.name}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export function BottomBarCart({ totalPrice }: { totalPrice: number }) {
    return (
        <div className="w-full max-w-md h-16 px-4 fixed bottom-16 z-10 flex items-center bg-white">
            <div className="w-full flex justify-between place-items-center">
                <div className="flex place-items-center gap-1">
                    <p>Total:</p>
                    <p className="font-bold text-lg text-green-600">
                        <span className="text-sm font-normal">Rp</span>
                        {totalPrice.toLocaleString("id")}
                    </p>
                </div>
                <Link href="/checkout">
                    <button className="px-2 rounded-md py-2 bg-green-500">
                        <p className="text-center font-bold text-white">
                            Checkout
                        </p>
                    </button>
                </Link>
            </div>
        </div>
    );
}
