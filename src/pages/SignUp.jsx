import React from "react";
import SignUpPage from "../components/SignUp";
import useSignup from "./../hooks/useSignUp";

const SignUp = () => {
  const { register, errors, handleSubmit, handleSignUpSubmit } = useSignup();

  return (
    <SignUpPage
      register={register}
      errors={errors}
      onSignUpSubmitEvent={handleSubmit(handleSignUpSubmit)}
    />
  );
};

export default SignUp;
