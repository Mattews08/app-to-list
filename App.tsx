import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "./Colors";
import { tempData } from "./temData";
import { TodoList } from "./components/TodoList";

export default function App() {

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <View style={styles.divider} />
        <Text style={styles.title}>
          Todo
          <Text style={{ fontWeight: "300", color: colors.green }}>Lists</Text>
        </Text>
        <View style={styles.divider} />
      </View>
      <View style={{ marginVertical: 48 }}>
        <TouchableOpacity style={styles.addList}>
          <AntDesign name="plus" size={16} color={colors.green} />
        </TouchableOpacity>
        <Text style={styles.add}>Add List</Text>
      </View>
      <View style={{ height: 350, padding: 32 }}>
        <FlatList
          data={tempData}
          keyExtractor={(item) => item.name}
          horizontal={true}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
           <TodoList data={item} />
          )}
        />
      </View>
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
  divider: {
    backgroundColor: colors.lightGreen,
    height: 1,
    flex: 1,
    alignSelf: "center",
  },
  title: {
    fontSize: 38,
    fontWeight: "800",
    color: colors.black,
    paddingHorizontal: 64,
  },
  addList: {
    borderWidth: 2,
    borderColor: colors.lightGreen,
    borderRadius: 4,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  add: {
    color: colors.green,
    fontWeight: "600",
    fontSize: 14,
    marginTop: 8,
  },
});
