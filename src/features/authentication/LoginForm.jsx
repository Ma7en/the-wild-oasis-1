/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";

import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import FormRowVertical from "../../ui/FormRowVertical";
import SpinnerMini from "../../ui/SpinnerMini";

import { useLogin } from "./useLogin";
import { HiEye, HiEyeSlash } from "react-icons/hi2";
import { useForm } from "react-hook-form";
import FormRowPass from "../../ui/form/FormRowPass";

// hi2 HiEye
// hi2 HiEyeSlash

function LoginForm({ sign }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login, isLoading } = useLogin();
    const { register, formState, reset } = useForm();
    const { errors } = formState;
    const [showPassword, setShowPassword] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();

        if (!email || !password) return;

        login(
            { email, password },
            {
                onSettled: () => {
                    setEmail("");
                    setPassword("");
                },
            },
        );
    }

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <FormRowVertical
                    label="Email address"
                    error={errors?.email?.message}
                >
                    <Input
                        type="email"
                        id="email"
                        // This makes this form better for password managers
                        autoComplete="username"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={isLoading}
                    />
                </FormRowVertical>

                <FormRowPass
                    label="Password"
                    error={errors?.password?.message}
                    sign={sign}
                    // icon={<HiEye />}
                >
                    <>
                        <Input
                            type={!showPassword ? "password" : "text"}
                            id="password"
                            autoComplete="current-password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            disabled={isLoading}
                        />
                        {!showPassword ? (
                            <HiEye
                                onClick={() => setShowPassword((show) => !show)}
                            />
                        ) : (
                            <HiEyeSlash
                                onClick={() => setShowPassword((show) => !show)}
                            />
                        )}
                    </>
                </FormRowPass>

                <FormRowVertical>
                    <Button size="large" disabled={isLoading}>
                        {!isLoading ? `Login` : <SpinnerMini />}
                    </Button>
                </FormRowVertical>
            </Form>
        </>
    );
}

export default LoginForm;
