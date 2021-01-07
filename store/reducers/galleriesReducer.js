import { ALL_GALLARIES } from "../../data/dummy-data";
import { SAVE_GALLERY_IMAGES } from "../types/actionTypes";

const initialState = {
  galleriesList: ALL_GALLARIES,
  images: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SAVE_GALLERY_IMAGES:
      return {
        ...state,
        images: action.payload,
      };
    default:
      return state;
  }
};
