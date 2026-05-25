import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

import { AppInput } from "../../shared/components/AppInput";
import { AuthFormHeader } from "../../shared/components/AuthFormHeader";

export const LoginView = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <AuthFormHeader
        title="Acesse sua conta"
        subTitle="Informe seu e-mail e senha para entrar"
      />

      <AppInput />

      <TouchableOpacity onPress={() => router.push("/register")}>
        <Text>Registro</Text>
      </TouchableOpacity>
    </View>
  );
};
