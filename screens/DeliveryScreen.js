import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectRestaurant } from "../features/restaurantSlice";
import { XMarkIcon } from "react-native-heroicons/solid";
import * as Progress from "react-native-progress";

const DeliveryScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);

  return (
    <View className="bg-[#00ccbb] flex-1 ">
      <SafeAreaView className="z-50">
        <View className="flex-row items-center justify-between p-5 mt-14">
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <XMarkIcon color="white" size={30} />
          </TouchableOpacity>
          <Text className="text-lg font-light text-white">Order Help</Text>
        </View>

        <View className="z-50 p-6 mx-5 my-2 bg-white rounded-md shadow-md">
          <View className="flex-row items-center justify-between">
            <View>
              <Text className="text-lg text-gray-400">Estimated Arrival</Text>
              <Text className="text-4xl font-bold">45-55 Minutes</Text>
            </View>
            <Image
              source={require("../assets/delivery.png")}
              className="w-16 h-16 "
            />
          </View>
          <Progress.Bar size={30} color="#00ccbb" indeterminate={true} className='mt-4' />
          <Text className='mt-3 text-gray-500'>Your order at {restaurant.title} is being prepared</Text>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default DeliveryScreen;
