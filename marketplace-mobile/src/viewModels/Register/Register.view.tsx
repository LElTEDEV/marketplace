import { FC } from "react";
import { router } from "expo-router";
import { View, Text, TouchableOpacity } from "react-native";

import { useRegisterViewModel } from "./useRegister.viewModel";
import { AuthFormHeader } from "../../shared/components/AuthFormHeader";
import { AppInputController } from "../../shared/components/AppInputController";

export const RegisterView: FC<ReturnType<typeof useRegisterViewModel>> = ({
  control,
  errors,
  onSubmit,
}) => {
  return (
    <View className="flex-1 items-center justify-center">
      <AuthFormHeader
        title="Crie sua conta"
        subTitle="Informe os seus dados pessoais e de acesso"
      />

      <AppInputController
        label="E-MAIL"
        leftIcon="mail-outline"
        control={control}
        name="email"
      />

      <TouchableOpacity onPress={onSubmit}>
        <Text>Registrar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("/login")}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
};
