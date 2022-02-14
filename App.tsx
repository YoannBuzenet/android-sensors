import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import SensorDisplay from "./components/sensor-display";
import GyroscopeCompo from "./components/gyroscope";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <SensorDisplay /> */}
      <GyroscopeCompo />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
