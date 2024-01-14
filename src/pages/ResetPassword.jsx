/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import Logo from "../ui/Logo";
import Heading from "../ui/Heading";
import ResetPasswordForm from "../features/authentication/ResetPasswordForm";
import DivForm from "../ui/DivForm";
import Button from "../ui/Button";

const ResetPasswordLayout = styled.main`
    min-height: 100vh;
    display: grid;
    grid-template-columns: 48rem;
    align-content: center;
    justify-content: center;
    gap: 3.2rem;
    background-color: var(--color-grey-50);
`;

function ResetPassword() {
    const navigate = useNavigate();

    return (
        <>
            <ResetPasswordLayout>
                <Logo />
                <Heading as="h4">Reset Password to your account</Heading>
                <ResetPasswordForm />
                <DivForm>
                    <Button size="large" onClick={() => navigate("/login")}>
                        Login
                    </Button>

                    <Button size="large" onClick={() => navigate("/signup")}>
                        SignUp
                    </Button>
                </DivForm>
            </ResetPasswordLayout>
        </>
    );
}

export default ResetPassword;
