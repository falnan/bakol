import { IconBar, IconSearch } from "./icon";

interface IInput {
    type?: string;
    labelName?: string;
    id: string;
    onChange: any;
    defaultValue: string;
    value: string;
    error?: string;
    placeholder?: string;
    children: any;
    disabled?: boolean;
}

export function Label(props: any) {
    return (
        <label htmlFor={props.id} className="text-slate-900 text-md capitalize">
            {props.labelName}
        </label>
    );
}

export function InputError(props: any) {
    return <div className="text-red-500 text-xs">*{props.error}</div>;
}

export function InputText(props: Omit<IInput, "defaultValue" | "children">) {
    return (
        <div className="flex flex-col">
            <Label id={props.id} labelName={props.labelName} />
            <InputTextBox
                type={props.type}
                id={props.id}
                onChange={props.onChange}
                value={props.value}
                error={props.error}
                placeholder={props.placeholder}
                disabled={props.disabled}
            />
            {props.error && <InputError error={props.error} />}
        </div>
    );
}

export function InputTextBox(props: any) {
    return (
        <input
            type={props.type}
            id={props.id}
            name={props.id}
            onChange={props.onChange}
            value={props.value}
            placeholder={props.placeholder}
            className={` ${
                props.error
                    ? " ring-red-400 focus:ring-red-500"
                    : " ring-blue-300 focus:ring-blue-400"
            } 
                ${props.disabled ? "bg-slate-200" : ""} 
                w-full py-2 ring-opacity-50 ring-1 border-none text-slate-900 text-md rounded-md outline-none p-2 placeholder-slate-300
                `}
            disabled={props.disabled}
        />
    );
}

export function InputSelect(props: Omit<IInput, "type" | "value">) {
    return (
        <div className="flex flex-col">
            <Label id={props.id} labelName={props.labelName} />
            <InputSelectBox
                id={props.id}
                defaultValue={props.defaultValue}
                onChange={props.onChange}
                error={props.error}
            >
                {props.children}
            </InputSelectBox>
            {props.error && <InputError error={props.error} />}
        </div>
    );
}

export function InputSelectBox(props: any) {
    return (
        <select
            id={props.id}
            name={props.id}
            onChange={props.onChange}
            defaultValue={props.defaultValue}
            className={`${
                props.error
                    ? " ring-red-400 focus:ring-red-500"
                    : " ring-blue-300 focus:ring-blue-400"
            } w-full py-2 ring-opacity-50 ring-1 border-none text-slate-700 text-md rounded-md outline-none p-2 placeholder-slate-300`}
        >
            {props.children}
        </select>
    );
}

interface IInputSearch {
    id: string;
    onChange: any;
    value: string;
    custom?: string;
}
export function InputSearch(props: IInputSearch) {
    return (
        <div className="relative w-full">
            <input
                id={props.id}
                name={props.id}
                onChange={props.onChange}
                value={props.value}
                placeholder="      Cari Produk"
                className={`w-full py-2 border-none bg-slate-200 text-green-700 text-md rounded-lg outline-none p-2 placeholder-green-700 ${props.custom}`}
            />
            <div
                className={`${
                    props.value ? "hidden" : ""
                } absolute top-2.5 left-2`}
            >
                <IconSearch size="size-5" color="fill-green-700" />
            </div>
        </div>
    );
}
