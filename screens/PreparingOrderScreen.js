import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";

const PreparingOrderScreen = () => {
  return (
    <SafeAreaView className="bg-[#00ccbb] flex-1 justify-center items-center">
      <Animatable.Image
        source={require("../assets/orderLoading.gif")}
        animation="slideInUp"
        iterationCount={1}
        className=" h-80 w-80"
      />

      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        className="my-10 text-lg font-bold text-center text-white"
      >
        Waiting For Restaurant To Accept Your Order
      </Animatable.Text>

      <Progress.Bar progress={0.3} width={200} color='white' indeterminate={true} />

    </SafeAreaView>
  );
};

export default PreparingOrderScreen;
