import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import Colors from "../constants/Colors";

export default function GalleryItem(props) {
  return (
    <View style={styles.galleryItem}>
      <TouchableOpacity onPress={props.onSelectGallery}>
        <View>
          <View style={{ ...styles.galleryRow, ...styles.galleryHeader }}>
            <ImageBackground
              source={{ uri: props.image }}
              style={styles.bgImage}
            />
          </View>
          <View style={{ ...styles.galleryRow, ...styles.galleryDetail }}>
            <Text>{props.title}</Text>
            <Text>{props.numOfImages} Pictures</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  galleryItem: {
    height: 200,
    width: "96%",
    marginTop: 15,
    alignSelf: "center",
    backgroundColor: Colors.info,
  },
  galleryRow: {
    flexDirection: "row",
  },
  galleryHeader: {
    height: "90%",
  },
  galleryDetail: {
    paddingHorizontal: 10,
    justifyContent: "space-between",
  },
  bgImage: {
    width: "100%",
    height: "100%",
  },
});
