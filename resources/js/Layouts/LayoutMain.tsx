interface ILayoutMain {
    children: any;
}

export default function LayoutMain({ children }: ILayoutMain) {
    return (
        <main className="relative max-w-md mx-auto bg-gray-100 min-h-screen">
            {children}
        </main>
    );
}
