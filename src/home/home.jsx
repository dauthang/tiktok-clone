import React, { useState } from "react";
import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";
import Posts from "../Post/posts";

const HomeApp = () => {
  return (
    <View style={style.container}>
      <FlatList
        data={[
          { id: 1, name: "thang" },
          { id: 2, name: "thang1" },
        ]}
        renderItem={({ item }) => <Posts />}
        snapToInterval={Dimensions.get("window").height - 50}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    width: "100%",
    height: Dimensions.get("window").height - 50,
  },
});
export default HomeApp;
