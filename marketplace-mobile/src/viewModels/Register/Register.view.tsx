import { FC } from "react";
import { router } from "expo-router";
import { ScrollView, Text, TouchableOpacity } from "react-native";

import { useRegisterViewModel } from "./useRegister.viewModel";
import { AuthFormHeader } from "../../shared/components/AuthFormHeader";
import { KeyboardContainer } from "../../shared/components/KeyboardContainer";
import { AppInputController } from "../../shared/components/AppInputController";

export const RegisterView: FC<ReturnType<typeof useRegisterViewModel>> = ({
  control,
  errors,
  onSubmit,
}) => {
  return (
    <KeyboardContainer>
      <ScrollView className="flex-1 px-[40px]">
        <AuthFormHeader
          title="Crie sua conta"
          subTitle="Informe os seus dados pessoais e de acesso"
        />

        <AppInputController
          label="NOME"
          leftIcon="person-outline"
          control={control}
          name="name"
        />

        <AppInputController
          label="E-MAIL"
          leftIcon="mail-outline"
          control={control}
          name="email"
        />

        <AppInputController
          label="TELEFONE"
          leftIcon="call-outline"
          control={control}
          name="phone"
        />

        <AppInputController
          label="SENHA"
          leftIcon="lock-closed-outline"
          control={control}
          name="password"
          secureTextEntry
        />

        <AppInputController
          label="CONFIRMAR SENHA"
          leftIcon="lock-closed-outline"
          control={control}
          name="confirmPassword"
          secureTextEntry
        />

        <TouchableOpacity onPress={onSubmit}>
          <Text>Registrar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("/login")}>
          <Text>Login</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardContainer>
  );
};
