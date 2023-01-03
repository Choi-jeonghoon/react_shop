import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const userSignupSchema = yup.object().shape({
  email: yup.string().email("이메일다시").required(),
  firstname: yup.string().min(4, "4글자이상").required(),
  lastname: yup.string().min(4, "4글자이상").required(),
  password: yup
    .string()
    .min(8, "패스워드 너무 짧어~")
    .max(15, "패드워드 너무 길어~")
    .matches(/(?=.*\d)(?=.*[a-z]).{8,15}/)
    .required(),
});

const useSignup = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(userSignupSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
      firstname: "",
      lastname: "",
      password: "",
    },
  });

  const handleSignUpSubmit = (newUser) => {
    const { email, password } = newUser;
    sessionStorage.setItem(
      "user",
      JSON.stringify({
        email: email,
        password: password,
      })
    );
    window.location.replace("/login");
  };

  return {
    register,
    errors,
    handleSubmit,
    handleSignUpSubmit,
  };
};
export default useSignup;
