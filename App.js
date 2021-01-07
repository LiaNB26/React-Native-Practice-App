import React, { useState } from "react";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import MainNavigator from "./navigation/MainNavigator";
import categoriesReducer from "./store/reducers/categoriesReducer";
import galleriesReducer from "./store/reducers/galleriesReducer";
import { enableScreens } from "react-native-screens";

enableScreens();

const rootReducer = combineReducers({
  categories: categoriesReducer,
  galleries: galleriesReducer,
});

const store = createStore(rootReducer);

const fetchFonts = () => {
  return Font.loadAsync({
    "chilanka-regular": require("./assets/fonts/Chilanka-Regular.ttf"),
    "caveat-regular": require("./assets/fonts/Caveat-Regular.ttf"),
    "caveat-bold": require("./assets/fonts/Caveat-Bold.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setIsLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => {
          setIsLoaded(true);
        }}
      />
    );
  }

  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
}
