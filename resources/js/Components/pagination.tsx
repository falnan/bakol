import { useState } from "react";
import { Link } from "@inertiajs/react";
import { IconLeftArrow, IconRightArrow } from "./icon";

export function Pagination({ data }: any) {
    const [page, setPage] = useState(data.links);
    const current =
        data.current_page <= 1
            ? 2
            : data.current_page >= data.last_page
            ? data.last_page - 1
            : data.current_page;
    const [print, setprint] = useState([
        page[current - 1],
        page[current],
        page[current + 1],
    ]);
    return (
        <div className="flex justify-center">
            <nav aria-label="Pagination">
                <ul className="bg-white inline-flex items-center -space-x-px rounded-md text-sm shadow-sm">
                    <li>
                        <Link
                            href={data.prev_page_url}
                            className="inline-flex items-center rounded-l-md border border-gray-300 px-2 py-2 font-medium text-gray-500 hover:bg-gray-50"
                        >
                            <span className="sr-only">Previous</span>

                            <IconLeftArrow color="fill-gray-400" />
                        </Link>
                    </li>
                    {print.map((i: any) => (
                        <li key={i.label}>
                            <Link
                                href={i.url}
                                className={`${
                                    i.label == data.current_page &&
                                    "bg-gray-100"
                                } inline-flex items-center border border-gray-300 px-4 py-2 text-gray-500 hover:bg-gray-50`}
                            >
                                {i.label}
                            </Link>
                        </li>
                    ))}
                    <li>
                        <Link
                            href={data.next_page_url}
                            className="inline-flex items-center rounded-r-md border border-gray-300 px-2 py-2 font-medium text-gray-500 hover:bg-gray-50"
                        >
                            <span className="sr-only">Next</span>
                            <IconRightArrow color="fill-gray-400" />
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
