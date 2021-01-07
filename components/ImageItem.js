import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import Colors from "../constants/Colors";

export default function ImageItem(props) {
  return (
    <View style={styles.imageItem}>
      <TouchableOpacity onPress={() => {}}>
        <View>
          <View style={{ ...styles.imageItemRow, ...styles.imageItemHeader }}>
            <ImageBackground
              source={{ uri: props.image }}
              style={styles.bgImage}
            />
          </View>
          <View style={{ ...styles.imageItemRow, ...styles.imageItemDetail }}>
            <Text>Image #{props.number}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  imageItem: {
    height: 200,
    width: "96%",
    marginTop: 15,
    alignSelf: "center",
    backgroundColor: Colors.info,
  },
  imageItemRow: {
    flexDirection: "row",
  },
  imageItemHeader: {
    height: "90%",
  },
  imageItemDetail: {
    paddingHorizontal: 10,
    justifyContent: "space-between",
  },
  bgImage: {
    width: "100%",
    height: "100%",
  },
});
