import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";

export default function CategoryGalleriesScreen(props) {
  const selectedCategory = props.navigation.getParam("category");

  // console.log(selectedCategory);
  return (
    <View style={styles.screen}>
      <Text>{selectedCategory.title}</Text>
    </View>
  );
}

CategoryGalleriesScreen.navigationOptions = (navData) => {
  const selectedCategory = navData.navigation.getParam("category");

  return {
    headerTitle: selectedCategory.title,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
