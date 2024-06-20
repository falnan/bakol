import { IconChat, IconLeftArrow } from "./icon";
import { InputSearch } from "./input";

interface ITopBarHome {
    search: string;
    setSearch: any;
    onSubmit: any;
}
interface ITopBarOrder {
    title: string;
}

export function TopBarHome({ search, setSearch, onSubmit }: ITopBarHome) {
    return (
        <div className="w-full z-10 px-4 pt-4 flex place-items-center gap-3 absolute top-0 left-0">
            <form className="w-full" onSubmit={onSubmit}>
                <InputSearch
                    custom="bg-white"
                    id="search"
                    value={search}
                    onChange={(e: any) => setSearch(e.target.value)}
                />
            </form>
            <div>
                <IconChat size="size-7" />
            </div>
        </div>
    );
}

export function TopBarSearch({ search, setSearch, onSubmit }: ITopBarHome) {
    return (
        <>
            <div className="w-full max-w-md h-16 z-10 px-4 fixed top-0 flex gap-4 place-items-center bg-white shadow-md">
                <div onClick={() => window.history.back()}>
                    <IconLeftArrow size="size-6" color="fill-green-700" />
                </div>
                <div className="w-full">
                    <form className="w-full" onSubmit={onSubmit}>
                        <InputSearch
                            id="search"
                            value={search}
                            onChange={(e: any) => setSearch(e.target.value)}
                        />
                    </form>
                </div>
                <div>
                    <IconChat size="size-7" color="fill-green-700" />
                </div>
            </div>
            <div className="h-16"></div>
        </>
    );
}

export function TopBarCart({ title }: ITopBarOrder) {
    return (
        <>
            <div className="w-full max-w-md h-16 z-10 px-4 fixed top-0 flex justify-between gap-4 place-items-center bg-white shadow-md">
                <div onClick={() => window.history.back()}>
                    <IconLeftArrow size="size-6" color="fill-green-700" />
                </div>
                <div>
                    <p className="text-xl font-bold text-green-700">{title}</p>
                </div>
                <div className="flex place-items-center gap-3">
                    <IconChat size="size-7" color="fill-green-700" />
                </div>
            </div>
            <div className="h-16"></div>
        </>
    );
}
