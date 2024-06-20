import LayoutMain from "./LayoutMain";

interface ILayoutAuth {
    onSubmit: any;
    children: any;
}

export default function LayoutAuth({ onSubmit, children }: ILayoutAuth) {
    return (
        <LayoutMain>
            <div className="p-4">
                <div className="w-fit mx-auto mt-20">
                    <img className="size-20" src="/img/logo.jpg" alt="" />
                </div>
                <div className="mt-20">
                    <form onSubmit={onSubmit}>
                        <div className="flex flex-col gap-1">{children}</div>
                    </form>
                </div>
            </div>
        </LayoutMain>
    );
}
