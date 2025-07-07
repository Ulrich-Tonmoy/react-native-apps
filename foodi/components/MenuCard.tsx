// import { appwriteConfig } from "@/lib/appwrite";
import { useCartStore } from "@/lib/store/cart.store";
import { MenuItem } from "@/lib/type";
import { Image, Platform, Text, ToastAndroid, TouchableOpacity } from "react-native";

const MenuCard = ({ item: { $id, image_url, name, price } }: { item: MenuItem }) => {
  // const imageUrl = `${image_url}?project=${appwriteConfig.projectId}`;
  const imageUrl = image_url;
  const { addItem } = useCartStore();

  const addToCart = () => {
    addItem({ id: $id, name, price, image_url: imageUrl, customizations: [] });
    ToastAndroid.showWithGravity(
      "Item added to cart!",
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  };

  return (
    <TouchableOpacity
      className="menu-card"
      style={Platform.OS === "android" ? { elevation: 10, shadowColor: "#878787" } : {}}
    >
      <Image
        source={{ uri: imageUrl }}
        className="size-32 absolute -top-10"
        resizeMode="contain"
      />
      <Text className="text-center base-bold text-dark-100 mb-2" numberOfLines={1}>
        {name}
      </Text>
      <Text className="body-regular text-gray-200 mb-4">From ${price}</Text>
      <TouchableOpacity onPress={() => addToCart()}>
        <Text className="paragraph-bold text-primary">Add to Cart +</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};
export default MenuCard;
