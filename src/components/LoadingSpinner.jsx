import { Text, View, ActivityIndicator } from "react-native";

const LoadingSpinner = () => {
  return (
    <View>
      <ActivityIndicator color="blue" size={30} />
      <Text>Cargando datos...</Text>
    </View>
  );
};

export default LoadingSpinner;
