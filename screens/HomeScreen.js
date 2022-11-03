import { View, Text, Image, TextInput } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  UserIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white pt-5">
      {/* Header */}
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image
          source={{
            uri: "https://www.w3schools.com/howto/img_avatar2.png",
          }}
          className="h-7 w-7 rounded-full p-4 bg-gray-300 "
        />

        <View className="flex-1">
          <Text className="font-bold text-gray-400  text-xs">Deliver Now</Text>
          <Text className="font-bold text-xl ">
            Current Location
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>

        <UserIcon size={35} color="#00CCBB" />
      </View>

      {/* Search */}
      <View className='flex-row items-center space-x-2 pb-2 mx-4 '>
        <View className='flex-row flex-1  bg-gray-200 space-x-2 p-3 items-center'>
          <MagnifyingGlassIcon size={20} color="gray" />
          <TextInput placeholder="Restaurants and Cuisines"
          keyboardType="default"
          />

        </View>

        <AdjustmentsVerticalIcon color="#00CCBB" />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
