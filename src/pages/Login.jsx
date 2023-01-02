import React from "react";
import LoginPage from "../components/Login";
import useLogin from "../hooks/useLogin";

const Login = () => {
  const { register, errors, handleSubmit, handleLoginSubmit } = useLogin();

  return (
    <LoginPage
      register={register}
      errors={errors}
      onLoginSubmitEvent={handleSubmit(handleLoginSubmit)}
    />
  );
};

export default Login;
