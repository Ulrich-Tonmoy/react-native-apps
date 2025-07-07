import { images } from "@/lib/constants";
import { useCartStore } from "@/lib/store/cart.store";
import { router } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";

const CartButton = () => {
  const { getTotalItems } = useCartStore();
  const totalItems = getTotalItems();

  return (
    <TouchableOpacity
      className="cart-btn bg-dark-100"
      onPress={() => router.push("/cart")}
    >
      <Image source={images.bag} className="size-5" resizeMode="contain" />
      {totalItems > 0 && (
        <View className="cart-badge">
          <Text className="small-bold text-white">{totalItems}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};
export default CartButton;
