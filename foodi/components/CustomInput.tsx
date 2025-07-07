import { images } from "@/lib/constants";
import { CustomInputProps } from "@/lib/type";
import cn from "clsx";
import { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";

const CustomInput = ({
  placeholder = "Enter text",
  value,
  onChangeText,
  label,
  secureTextEntry = false,
  keyboardType = "default",
}: CustomInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className="w-full">
      <Text className="label">{label}</Text>
      <View className="flex-row items-center">
        <TextInput
          className={cn("input", isFocused ? "border-primary" : "border-gray-300")}
          autoCapitalize="none"
          autoCorrect={false}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry ? !showPassword : secureTextEntry}
          keyboardType={keyboardType}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          placeholderTextColor="#888"
        />

        {secureTextEntry && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={showPassword ? images.eye : images.eyeCross}
              className="w-6 h-6 fixed right-8"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
export default CustomInput;
