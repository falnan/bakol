import { Link } from "@inertiajs/react";

interface IButton {
    href: string,
    children: string;
    disabled?: boolean;
    color?: string;
    custom?: string;
}

export default function ButtonLink(props: IButton) {
    return (
        <Link
            className={`${props.color} ${props.custom}  w-full py-2 px-2 text-center  rounded-md bg-emerald-500 text-white`}
            href={props.href}
        >
            {props.children}
        </Link>
    );
}

export function ButtonSubmit({
    children,
    color = "bg-emerald-500",
    custom,
    disabled,
}: Omit<IButton, 'href'>) {
    return (
        <button
            className={`${custom} ${disabled ? "bg-slate-400" : color} w-full py-2 px-2 text-md text-center  rounded-md text-white`}
            disabled={disabled}
        >
            {children}
        </button>
    );
}