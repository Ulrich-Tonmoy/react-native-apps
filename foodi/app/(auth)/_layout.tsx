import { images } from "@/lib/constants";
import useAuthStore from "@/lib/store/auth.store";
import { Redirect, Slot } from "expo-router";
import {
  Dimensions,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  View,
} from "react-native";

const AuthLayout = () => {
  const { isAuthenticated } = useAuthStore();

  if (isAuthenticated) return <Redirect href="/" />;

  return (
    <>
      <StatusBar barStyle="light-content" />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView className="bg-white h-full" keyboardShouldPersistTaps="handled">
          <View
            className="w-full relative"
            style={{ height: Dimensions.get("screen").height / 2.25 }}
          >
            <ImageBackground
              source={images.loginGraphic}
              className="size-full rounded-b-lg"
              resizeMode="stretch"
            />
            <Image
              source={images.logo}
              className="self-center size-48 absolute -bottom-16 z-10"
            />
          </View>
          <Slot />
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default AuthLayout;
