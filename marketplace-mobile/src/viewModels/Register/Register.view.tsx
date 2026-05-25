import { FC } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { useRegisterViewModel } from "./useRegister.viewModel";
import { AppInputController } from "../../shared/components/AppInputController";

export const RegisterView: FC<ReturnType<typeof useRegisterViewModel>> = ({
  control,
  errors,
  onSubmit,
}) => {
  return (
    <View className="flex-1 items-center justify-center">
      <AppInputController
        label="E-MAIL"
        leftIcon="mail-outline"
        control={control}
        name="email"
      />

      <TouchableOpacity onPress={onSubmit}>
        <Text>Registrar</Text>
      </TouchableOpacity>
    </View>
  );
};
