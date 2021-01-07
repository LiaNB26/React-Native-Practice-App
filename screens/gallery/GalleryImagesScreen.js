import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { useSelector } from "react-redux";
import ImageItem from "../../components/ImageItem";

export default function GalleryImagesScreen(props) {
  const renderImageItem = (itemData) => {
    return (
      <ImageItem
        onSelectGallery={() => {}}
        number={itemData.index + 1}
        image={itemData.item.imageUrl}
      />
    );
  };

  const galleryImages = props.navigation.getParam("galleryImages");

  return (
    <View style={styles.screen}>
      <FlatList
        data={galleryImages}
        // keyExtractor={(item) => item.id}
        renderItem={renderImageItem}
        style={{ width: "100%" }}
      />
    </View>
  );
}

GalleryImagesScreen.navigationOptions = (navData) => {
  const galleryTitle = navData.navigation.getParam("galleryTitle");

  return {
    headerTitle: galleryTitle + " Gallery Images",
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
