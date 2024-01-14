/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import Logo from "../ui/Logo";
import Heading from "../ui/Heading";
import SignupForm from "../features/authentication/SignupForm";
import DivForm from "../ui/DivForm";
import Button from "../ui/Button";

const SignupLayout = styled.main`
    min-height: 100vh;
    display: grid;
    grid-template-columns: 48rem;
    align-content: center;
    justify-content: center;
    gap: 3.2rem;
    background-color: var(--color-grey-50);

    form {
        div {
            /* display: grid;
            grid-template-columns: 1fr 1fr;
            justify-items: stretch;
            align-items: stretch;
            */
            display: grid;
            grid-template-columns: 1fr;
            justify-items: stretch;
            align-items: stretch;

            &:last-of-type {
                display: flex;
                flex-direction: column-reverse;
            }
        }
    }
`;

function Signup() {
    const navigate = useNavigate();

    return (
        <>
            <SignupLayout>
                <Logo />
                <Heading as="h4">Signup to your account</Heading>
                <SignupForm sign="true" />
                <DivForm>
                    <Button
                        size="large"
                        onClick={() => navigate("/resetpassword")}
                    >
                        Reset password
                    </Button>

                    <Button size="large" onClick={() => navigate("/login")}>
                        Login
                    </Button>
                </DivForm>
            </SignupLayout>
        </>
    );
}

export default Signup;
