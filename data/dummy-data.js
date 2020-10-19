import Gallery from "../models/gallery";
import Category from "../models/category";

export const Japan = [
  new Gallery(
    "g1",
    "gallery1",
    "https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg",
    "gallery1"
  ),
  new Gallery(
    "g2",
    "gallery2",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRxQj1ii5I3JW0fhYoMrjCOwSDT4gz969fQKQ&usqp=CAU",
    "gallery2"
  ),
];

export const Canada = [
  new Gallery(
    "g1",
    "gallery1",
    "https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg",
    "gallery1"
  ),
  new Gallery(
    "g2",
    "gallery2",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRxQj1ii5I3JW0fhYoMrjCOwSDT4gz969fQKQ&usqp=CAU",
    "gallery2"
  ),
];

export const CATEGORIES = [
  new Category(
    "c1",
    "Japan",
    "https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg",
    Japan
  ),
  new Category(
    "c2",
    "Canada",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRxQj1ii5I3JW0fhYoMrjCOwSDT4gz969fQKQ&usqp=CAU",
    Canada
  ),
];
