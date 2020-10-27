import React from "react";
import { StyleSheet, FlatList } from "react-native";
import { useSelector } from "react-redux";
import CategoryGridTile from "../../components/CategoryGridTile";

export default function CategoriesOverviewScreen(props) {
  const categories = useSelector((state) => state.categories.categoriesList);

  const renderGridItem = (itemData) => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        imageUrl={itemData.item.imageUrl}
        onSelect={() => {
          props.navigation.navigate({
            routeName: "Galleries",
            params: {
              categoryId: itemData.item.id,
              categoryTitle: itemData.item.title,
            },
          });
        }}
      />
    );
  };

  return (
    <FlatList
      keyExtractor={(item, index) => {
        item.id;
      }}
      data={categories}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
}

CategoriesOverviewScreen.navigationOptions = {
  headerTitle: "Categories",
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
