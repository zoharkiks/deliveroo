import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { selectBasketItems, selectBasketTotal } from "../features/basketSlice";
import { useNavigation } from "@react-navigation/native";
import Currency from "react-currency-formatter";

const BasketIcon = () => {
  const items = useSelector(selectBasketItems);
  const navigation = useNavigation();
  const basketTotal = useSelector(selectBasketTotal);

  return (
    <View className="absolute z-50 w-full bottom-10">
      <TouchableOpacity className="flex-row items-center p-4 mx-5 space-x-1 rounded-lg bg-[#00CCBB] ">
        <Text className='text-lg font-extrabold text-white  bg-[#01A296] px-2 py-1'>{items.length}</Text>
        <Text className='flex-1 text-lg font-extrabold text-center text-white'>View Basket</Text>
        <Text className="text-lg font-extrabold text-white">
          <Currency quantity={basketTotal} currency="INR" />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BasketIcon;
