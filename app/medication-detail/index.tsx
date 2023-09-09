import { Text } from "react-native";
import { Image } from "react-native-svg";

const HappyImg = require("../../assets/images/doctor-bg.png");

export default function Page() {
  return (
    <>
      <Text>medication page</Text>
      <Image source={HappyImg} style={{ width: 40, height: 40 }} />
    </>
  );
}
