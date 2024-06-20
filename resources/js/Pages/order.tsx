import { NavbarBottomMain } from "@/Components/bottomBar";
import { NavbarTopOrder } from "@/Components/topBar";
import LayoutGeneral from "@/Layouts/LayoutGeneral";

export default function Order() {
    function handle() {}
    return (
        <LayoutGeneral
            top={<NavbarTopOrder title="Pesanan Saya" />}
            bottom={<NavbarBottomMain />}
        >
            <div className="">ini halaman order</div>
        </LayoutGeneral>
    );
}
