import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { Bell, ChevronDown, Search, Lightbulb } from "lucide-react-native";

interface HeaderProps {
  username: string;
  location: string;
}

const StaticDesign: React.FC<HeaderProps> = ({ username, location }) => {
  return (
    <View className="p-4 space-y-4">
      {/* Top Row */}
      <View className="flex-row justify-between items-center">
        <View className="w-12 h-12 bg-white rounded-full justify-center items-center overflow-hidden">
          <Image
            src={"https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/04cbf851-aeb2-4af6-be64-15feff838f36/569972be-0c98-4859-87b3-dd145228b33e.png" }
            className="w-full h-full"
            resizeMode="cover"
          />
        </View>
        <TouchableOpacity className="flex-row items-center space-x-1">
          <Text className="text-white text-base font-medium">{location}</Text>
          <ChevronDown size={20} color="white" />
        </TouchableOpacity>

        <TouchableOpacity className="border-grey-100 border-r-[100%]">
          <Bell size={20} color="white" />
        </TouchableOpacity>
      </View>

      {/* Welcome Text */}
      <View className="space-y-1">
        <Text className="text-gray-400 text-sm">Welcome Back</Text>
        <Text className="text-white text-xl font-semibold">{username}</Text>
      </View>

      {/* Search Bar */}
      <View className="flex-row space-x-2 my-4">
        <View className="flex-1 flex-row items-center bg-gray-800 rounded-lg px-3">
          <Search size={20} color="gray" />
          <TextInput
            className="flex-1 ml-2 text-white"
            placeholder="Search by role, project, or location"
            placeholderTextColor="#666"
          />
        </View>

        <TouchableOpacity className="bg-purple-600 rounded-lg p-3">
          <Lightbulb size={20} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default StaticDesign;
