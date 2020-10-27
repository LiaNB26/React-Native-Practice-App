import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import GalleryItem from "../../components/GalleryItem";

export default function CategoryGalleriesScreen(props) {
  const renderGalleryItem = (itemData) => {
    return (
      <GalleryItem
        onSelectGallery={() => {}}
        title={itemData.item.title}
        numOfImages={itemData.item.numOfImages}
        image={itemData.item.imageUrl}
      />
    );
  };

  const selectedCategoryId = props.navigation.getParam("categoryId");

  const selectedCategory = useSelector((state) =>
    state.categories.categoriesList.find((cat) => cat.id === selectedCategoryId)
  );

  const allGallerires = useSelector((state) => state.galleries.galleriesList);

  const galleriesCategory = allGallerires.find(
    (gallery) => gallery.id === selectedCategory.galleryId
  ).galleries;

  return (
    <View style={styles.screen}>
      <FlatList
        data={galleriesCategory}
        // keyExtractor={(item) => item.id}
        renderItem={renderGalleryItem}
        style={{ width: "100%" }}
      />
    </View>
  );
}

CategoryGalleriesScreen.navigationOptions = (navData) => {
  const categoryTitle = navData.navigation.getParam("categoryTitle");

  return {
    headerTitle: categoryTitle,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 15,
    paddingRight: 15,
  },
});
