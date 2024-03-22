import { Dimensions } from "react-native";

export const useScreenSize = () => {
  const screenWidth = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("window").height;

  return { screenWidth, screenHeight };
};

export default useScreenSize;
