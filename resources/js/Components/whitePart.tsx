const menu = [
    {
        name: "Bimbel Reguler",
        img: "/img/wifi.svg",
    },
    {
        name: "English Course",
        img: "/img/chat.svg",
    },
    {
        name: "Kids Zone",
        img: "/img/kids.svg",
    },
];

const menu2 = [
    {
        name: "Upgrade Skill",
        img: "/img/it.svg",
    },
    {
        name: "Ngaji Free",
        img: "/img/ngajiquran.svg",
    },
];

export default function WhitePart() {
    return (
        <section className="w-full h-36 md:h-24 p-1 md:p-4 bg-white shadow-md rounded-2xl">
            {/* phone */}
            <div className="flex flex-col gap-1">
                <h2 className="md:hidden text-slate-600 text-center text-lg font-medium">
                    Pilihan Paket Belajar
                </h2>
                <div className="md:hidden grid grid-cols-4 text-center">
                    {menu.map((items: any, idx) => (
                        <div key={idx} className="leading-5 ">
                            <img
                                className="size-14 mx-auto"
                                src={items.img}
                                alt=""
                            />
                            <p className="w-14 mx-auto">{items.name}</p>
                        </div>
                    ))}
                    <div className="leading-5">
                        <img
                            className="size-14 mx-auto"
                            src="/img/lainnya.svg"
                            alt=""
                        />
                        <p className="w-14 mx-auto">Menu Lainnya</p>
                    </div>
                </div>
            </div>
            {/* table & dekstop */}
            <div className="max-md:hidden grid grid-cols-4 lg:grid-cols-6 gap-3">
                {menu.map((items: any, idx) => (
                    <div
                        key={idx}
                        className=" flex space-x-1 px-2 py-1 items-center border-2 border-slate-300 rounded-lg"
                    >
                        <img className="size-12" src={items.img} alt="" />
                        <p className="text-md text-slate-600 leading-5 text-wrap">
                            {items.name}
                        </p>
                    </div>
                ))}
                {menu2.map((items: any, idx) => (
                    <div
                        key={idx}
                        className="max-lg:hidden flex space-x-1 px-2 py-1 items-center border-2 border-slate-300 rounded-lg"
                    >
                        <img className="size-12" src={items.img} alt="" />
                        <p className="text-md text-slate-600 leading-5 text-wrap">
                            {items.name}
                        </p>
                    </div>
                ))}

                <div className="flex p-1 items-center border-2 border-slate-300 rounded-lg">
                    <img className="size-12" src="/img/lainnya.svg" alt="" />
                    <p className="text-md text-slate-600 leading-5 text-wrap">
                        Lihat Semua
                    </p>
                </div>
            </div>
        </section>
    );
}
