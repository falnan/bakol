import { useEffect, useState } from "react";
import { IconHalfStar, IconStar } from "./icon";

export default function Rating() {
    const [value, setValue] = useState<number[]>([]);
    const number: number = 5;

    useEffect(() => {
        const newValue = [];
        for (let i = 0; i < number; i++) {
            newValue.push(i);
        }
        setValue(newValue);
    }, [number]);
    return (
        <div className="w-fit flex">
            {value.map((item: any) => (
                <IconStar color="fill-yellow-500" size="size-4" />
            ))}
        </div>
    );
}
