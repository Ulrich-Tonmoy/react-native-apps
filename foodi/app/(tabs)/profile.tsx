import CustomButton from "@/components/CustomButton";
import { signOut } from "@/lib/appwrite";
import { images } from "@/lib/constants";
import useAuthStore from "@/lib/store/auth.store";
import { Image, ImageSourcePropType, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const InfoCard = ({
  label,
  value,
  icon,
}: {
  label?: string;
  value?: string;
  icon?: ImageSourcePropType;
}) => {
  return (
    <View className="flex flex-row items-center gap-x-2 w-full pl-8">
      <Image source={icon} className="size-8" resizeMode="contain" />
      <View className="ml-4">
        <Text className="text-gray-200">{label}</Text>
        <Text className="font-bold">{value}</Text>
      </View>
    </View>
  );
};

const Profile = () => {
  const { user, setIsAuthenticated } = useAuthStore();

  const logout = async () => {
    await signOut();

    setIsAuthenticated(false);
  };

  return (
    <SafeAreaView>
      <View className="flex items-center justify-center my-10 gap-8">
        <Image source={images.avatar} className="size-28" resizeMode="contain" />
        <InfoCard value={user?.name} label="Full Name" icon={images.user} />
        <InfoCard value={user?.email} label="Full Name" icon={images.envelope} />
      </View>
      <CustomButton
        title="Logout"
        onPress={() => logout()}
        leftIcon={
          <Image source={images.logout} className="size-6 mr-3" resizeMode="contain" />
        }
        style="bg-red-500/10 border-red-500/60 border-2"
        textStyle="text-red-500"
      />
    </SafeAreaView>
  );
};

export default Profile;
