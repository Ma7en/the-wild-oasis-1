/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";

import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";

import { useSignup } from "./useSignup";
import { HiEye, HiEyeSlash } from "react-icons/hi2";
import { useState } from "react";
import FormRowPass from "../../ui/form/FormRowPass";

// Email regex: /\S+@\S+\.\S+/

function SignupForm({ sign }) {
    const { signup, isLoading } = useSignup();
    const { register, formState, getValues, handleSubmit, reset } = useForm();
    const { errors } = formState;
    const [showPassword, setShowPassword] = useState(false);

    function onSubmit({ fullName, email, password }) {
        // console.log(data);
        signup(
            { fullName, email, password },
            {
                onSettled: () => reset(),
            },
        );
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <FormRow label="Full name" error={errors?.fullName?.message}>
                <Input
                    type="text"
                    id="fullName"
                    disabled={isLoading}
                    {...register("fullName", {
                        required: `This field is required`,
                    })}
                />
            </FormRow>

            <FormRow label="Email address" error={errors?.email?.message}>
                <Input
                    type="email"
                    id="email"
                    disabled={isLoading}
                    {...register("email", {
                        required: `This field is required`,
                        pattern: {
                            value: /\S+@\S+\.\S+/,
                            message: `Please Provide a valid email address`,
                        },
                    })}
                />
            </FormRow>

            <FormRowPass
                label="Password (min 8 characters)"
                error={errors?.password?.message}
                sign={sign}
            >
                <>
                    <Input
                        type={!showPassword ? "password" : "text"}
                        id="password"
                        disabled={isLoading}
                        {...register("password", {
                            required: `This field is required`,
                            minLength: {
                                value: 8,
                                message: `Password needs a minimum of 8 characters`,
                            },
                        })}
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

            <FormRowPass
                label="Repeat password"
                error={errors?.passwordConfirm?.message}
                sign={sign}
            >
                <>
                    <Input
                        type={!showPassword ? "password" : "text"}
                        id="passwordConfirm"
                        disabled={isLoading}
                        {...register("passwordConfirm", {
                            required: `This field is required`,
                            minLength: {
                                value: 8,
                                message: `Password needs a minimum of 8 characters`,
                            },
                            validate: (value) =>
                                value === getValues().password ||
                                `Passwords need to match`,
                        })}
                    />
                    {/* {!showPassword ? (
                        <HiEye
                            onClick={() => setShowPassword((show) => !show)}
                        />
                    ) : (
                        <HiEyeSlash
                            onClick={() => setShowPassword((show) => !show)}
                        />
                    )} */}
                </>
            </FormRowPass>

            <FormRow>
                {/* type is an HTML attribute! */}
                <Button
                    variation="secondary"
                    type="reset"
                    disabled={isLoading}
                    onClick={reset}
                >
                    Cancel
                </Button>
                <Button disabled={isLoading}>Create new user</Button>
            </FormRow>
        </Form>
    );
}

export default SignupForm;
