import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import CategoriesOverviewScreen from "../screens/gallery/CategoriesOverviewScreen";
import CategoryGalleriesScreen from "../screens/gallery/CategoryGalleriesScreen";
import GalleryImagesScreen from "../screens/gallery/GalleryImagesScreen";
import Colors from "../constants/Colors";

const MainNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesOverviewScreen,
    },
    Galleries: {
      screen: CategoryGalleriesScreen,
    },
    Images: GalleryImagesScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.primary,
      },
      headerTintColor: "white",
    },
  }
);

export default createAppContainer(MainNavigator);
