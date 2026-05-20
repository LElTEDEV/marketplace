import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useUserStore } from "../../shared/store/user-store";
import { RegisterFormData, registerScheme } from "./register.scheme";
import { useRegisterMutation } from "../../shared/queries/auth/use-register.mutation";

export const useRegisterViewModel = () => {
  const userRegisterMutation = useRegisterMutation();
  const { setSession } = useUserStore();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: yupResolver(registerScheme),
    defaultValues: {
      name: "Igor Teste",
      email: "teste@teste3.com",
      password: "123123",
      confirmPassword: "123123",
      phone: "19999999999",
    },
  });

  const onSubmit = handleSubmit(async (userData) => {
    const { confirmPassword, ...registerData } = userData;

    const mutationResponse =
      await userRegisterMutation.mutateAsync(registerData);

    setSession({
      token: mutationResponse.token,
      refreshToken: mutationResponse.refreshToken,
      user: mutationResponse.user,
    });
  });

  return { control, errors, onSubmit };
};
