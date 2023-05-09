import { StyleSheet, View, Text, Button } from "react-native";
import { useState } from "react";
export default function App() {
  const [Selector, SelectorHandler] = useState(true);
  return (
    <View className="w-full h-full flex flex-col justify-center items-center bg-red-400">
      <View className="w-[85%] justify-center items-center flex flex-row h-24">
        <View
          onTouchStart={() => SelectorHandler(true)}
          className=" flex justify-center items-center flex-col"
        >
          <Text className={`${Selector ? "text-black" : "text-white"} text-xl`}>
            Calculator
          </Text>
          <View
            className={`w-40 h-1 ${Selector ? "bg-black" : "bg-white"}`}
          ></View>
        </View>
        <View
          onTouchStart={() => SelectorHandler(false)}
          className="flex justify-center items-center flex-col"
        >
          <Text className={`${Selector ? "text-white" : "text-black"} text-xl`}>
            Convertor
          </Text>
          <View
            className={`w-40 h-1 ${Selector ? "bg-white" : "bg-black"}`}
          ></View>
        </View>
      </View>
      <View  className="w-[85%] h-52 bg-blue-400"></View>
      <View className="w-[85%] h-[60%] bg-violet-500"></View>
    </View>
  );
}
