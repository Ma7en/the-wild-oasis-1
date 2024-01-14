import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import Logo from "../ui/Logo";
import Heading from "../ui/Heading";
import LoginForm from "../features/authentication/LoginForm";
import DivForm from "../ui/DivForm";
import Button from "../ui/Button";

const LoginLayout = styled.main`
    min-height: 100vh;
    display: grid;
    grid-template-columns: 48rem;
    align-content: center;
    justify-content: center;
    gap: 3.2rem;
    background-color: var(--color-grey-50);
`;

function Login() {
    const navigate = useNavigate();

    return (
        <>
            <LoginLayout>
                <Logo />
                <Heading as="h4">Log in to your account</Heading>
                <LoginForm sign="true" />
                <DivForm>
                    <Button
                        size="large"
                        onClick={() => navigate("/resetpassword")}
                    >
                        Reset password
                    </Button>

                    <Button size="large" onClick={() => navigate("/signup")}>
                        SignUp
                    </Button>
                </DivForm>
                <DivForm>
                    <h4>
                        <span>emil:</span> wayip11615@pursip.com
                    </h4>
                    <h4>
                        <span>password:</span> 123123@@
                    </h4>
                </DivForm>
            </LoginLayout>
        </>
    );
}

export default Login;
