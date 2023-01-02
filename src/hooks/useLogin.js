import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import mockData from "./../dev/mockData";

const userSchema = yup
  .object()
  .shape({
    email: yup.string().email("이메일다시적어라"),
    password: yup
      .string()
      .min(8, "패스워드 너무 짧어~")
      .max(15, "패드워드 너무 길어~")
      .matches(/(?=.*\d)(?=.*[a-z]).{8,15}/),
  })
  .required();

const useLogin = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(userSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleLoginSubmit = (user) => {
    const { email, password } = user;
    if (sessionStorage.getItem("user")) {
      const { email, password } = JSON.parse(sessionStorage.getItem("user"));
      if (email === user.email && password === user.password)
        window.location.replace("/");
    }
    if (mockData.user.email === email && mockData.user.password === password)
      window.location.replace("/");
  };

  return {
    register,
    errors,
    handleSubmit,
    handleLoginSubmit,
  };
};

export default useLogin;
