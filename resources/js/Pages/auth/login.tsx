import { ButtonSubmit } from "@/Components/button";
import { InputText } from "@/Components/input";
import LayoutAuth from "@/Layouts/LayoutAuth";
import { Link, router } from "@inertiajs/react";
import { useState } from "react";

export default function Login() {
    const [values, setValues] = useState({
        email: "",
        password: "",
    });
    const [errors, setErrors]: any = useState({});
    function handleChange(e: any) {
        const id = e.target.id;
        const value = e.target.value;
        setValues((val: any) => ({ ...val, [id]: value }));
    }
    function handleSubmit(e: any) {
        e.preventDefault();
        router.post("/login", values);
    }

    return (
        <LayoutAuth onSubmit={handleSubmit}>
            <InputText
                labelName="Email"
                id="email"
                onChange={handleChange}
                value={values.email}
                error={errors.email}
            />
            <InputText
                labelName="Kata Sandi"
                type="password"
                id="password"
                onChange={handleChange}
                value={values.password}
                error={errors.password}
            />
            <div className="mt-3 flex flex-col gap-1">
                <ButtonSubmit>Masuk</ButtonSubmit>
                <p className="text-slate-900">
                    Belum mempunyai akun? Daftar{" "}
                    <span className="text-blue-600">
                        <Link href="/daftar"> di sini.</Link>
                    </span>
                </p>
            </div>
        </LayoutAuth>
    );
}
