/* eslint-disable no-unused-vars */
import { useState } from "react";

import Form from "../../ui/Form";
import FormRowVertical from "../../ui/FormRowVertical";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import SpinnerMini from "../../ui/SpinnerMini";

import { useResetPassword } from "./useResetPassword";

// Email regex: /\S+@\S+\.\S+/

function ResetPasswordForm() {
    const [email, setEmail] = useState("");
    const { resetPassword, isResetPassword } = useResetPassword();

    function handleSubmit(e) {
        e.preventDefault();

        if (!email) return;

        resetPassword(
            { email },
            {
                onSettled: () => {
                    setEmail("");
                },
            },
        );
    }

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <FormRowVertical label="Email address">
                    <Input
                        type="email"
                        id="email"
                        // This makes this form better for password managers
                        autoComplete="username"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={isResetPassword}
                    />
                </FormRowVertical>

                <FormRowVertical>
                    <Button size="large" disabled={isResetPassword}>
                        {!isResetPassword ? `Reset Password` : <SpinnerMini />}
                    </Button>
                </FormRowVertical>
            </Form>
        </>
    );
}

export default ResetPasswordForm;
