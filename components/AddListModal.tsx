import {
  View,
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "../Colors";
import { useState } from "react";
import { tempData } from "../temData";

const backgroundColors = [
  "#8A4921",
  "#2AF976",
  "#8C0088",
  "#7EB1C4",
  "#3D002D",
  "#C24632",
  "#727D5E",
];

export const AddListModal = (props: any) => {
  const [name, setName] = useState<string>();
  const [color, setColor] = useState(backgroundColors[0]);

  function handleInputChange(value: string) {
    setName(value);
  }

  return (
    <>
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <TouchableOpacity
          style={{ position: "absolute", top: 64, right: 32 }}
          onPress={props.closeModal}
        >
          <AntDesign name="close" size={24} color={colors.black} />
        </TouchableOpacity>
      </KeyboardAvoidingView>

      <View style={{ alignSelf: "stretch", marginHorizontal: 32 }}>
        <Text style={styles.title}>Create Todo List</Text>
        <TextInput
          style={styles.input}
          placeholder="List name?"
          onChangeText={handleInputChange}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 12,
          }}
        >
          {backgroundColors.map((color) => {
            return (
              <TouchableOpacity
                key={color}
                style={[styles.colorSelect, { backgroundColor: color }]}
                onPress={() => setColor(color)}
              />
            );
          })}
        </View>
        <TouchableOpacity style={[styles.create, { backgroundColor: color }]}>
          <Text style={{ color: colors.white, fontWeight: "600" }}>
            Create!
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: colors.black,
    alignSelf: "center",
    marginBottom: 16,
  },
  input: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.green,
    borderRadius: 6,
    height: 50,
    marginTop: 8,
    paddingHorizontal: 16,
    fontSize: 18,
  },
  create: {
    marginTop: 24,
    height: 50,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  colorSelect: {
    width: 30,
    height: 30,
    borderRadius: 4,
  },
});
