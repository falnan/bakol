import { ButtonSubmit } from "@/Components/button";
import { InputText } from "@/Components/input";
import LayoutAuth from "@/Layouts/LayoutAuth";
import { Link, router } from "@inertiajs/react";
import { useState } from "react";

export default function Register() {
    const [values, setValues] = useState({
        email: "",
        password: "",
        confirm_password: "",
    });
    const [errors, setErrors]: any = useState({});
    function handleChange() {}
    return (
        <LayoutAuth onSubmit={() => router.post("/register", values)}>
            <InputText
                labelName="Nama Lengkap"
                id="name"
                onChange={handleChange}
                value={values.email}
                error={errors.email}
            />
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
                id="email"
                onChange={handleChange}
                value={values.password}
                error={errors.password}
            />
            <InputText
                labelName="Ulangi Kata Sandi"
                type="password"
                id="confirm_password"
                onChange={handleChange}
                value={values.confirm_password}
                error={errors.confirm_password}
            />
            <div className="mt-3 flex flex-col gap-1">
                <ButtonSubmit>Daftar</ButtonSubmit>
                <p className="text-slate-900">
                    Sudah mempunyai akun? Login{" "}
                    <span className="text-blue-600">
                        <Link href="/login"> di sini.</Link>
                    </span>
                </p>
            </div>
        </LayoutAuth>
    );
}
