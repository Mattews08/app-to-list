import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../Colors";
import { ITempData } from "../interface/ITempData";

export const TodoList = ({ data }: ITempData) => {
  const completedCount = data.todos.filter((todos) => todos.completed).length;
  const remainingCount = data.todos.length - completedCount;

  return (
    <View style={[styles.dataContainer, { backgroundColor: data.color }]}>
      <Text style={styles.dataTitle} numberOfLines={1}>
        {data.name}
      </Text>

      <View>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.count}>{completedCount}</Text>
          <Text style={styles.subtitle}>Incompleto</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.count}>{remainingCount}</Text>
          <Text style={styles.subtitle}>Concluído</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dataContainer: {
    paddingVertical: 32,
    paddingHorizontal: 16,
    borderRadius: 6,
    marginHorizontal: 12,
    alignItems: "center",
    width: 200,
  },
  dataTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: colors.white,
    marginBottom: 18,
  },
  count: {
    fontSize: 48,
    fontWeight: "200",
    color: colors.white,
  },
  subtitle: {
    fontSize: 12,
    fontWeight: "700",
    color: colors.white,
  },
});
